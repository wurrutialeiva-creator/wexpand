// Global State
let currentUser = null;
let currentQuizType = null;
let currentQuestionIndex = 0;
let currentQuestions = [];
let audioContext = null;
let currentModuleId = null;

// Constants
const BADGES = [
    { id: 'novice', name: 'Novato', threshold: 50, icon: '🌱' },
    { id: 'apprentice', name: 'Aprendiz', threshold: 200, icon: '🛠️' },
    { id: 'analyst', name: 'Analista', threshold: 500, icon: '📊' },
    { id: 'expert', name: 'Experto', threshold: 1000, icon: '🏆' },
    { id: 'master', name: 'Maestro Power BI', threshold: 2000, icon: '👑' },
    { id: 'scholar', name: 'Erudito', threshold: -1, icon: '🎓', specialCondition: 'all_modules' } // New Badge
];

const POINTS_PER_QUESTION = 10;
const POINTS_PER_MODULE = 50;

// Init
document.addEventListener('DOMContentLoaded', () => {
    initAudio();
    const page = document.body.getAttribute('data-page');
    
    // Load User
    const storedUser = localStorage.getItem('powerBiUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        // Ensure legacy users have learning structure
        if (!currentUser.completedModules) {
            currentUser.completedModules = [];
        }
        if (!currentUser.badges) {
            currentUser.badges = [];
        }
    }

    if (page === 'login') {
        initLogin();
    } else {
        // Protect routes
        if (!currentUser) {
            window.location.href = 'index.html';
            return;
        }

        if (page === 'dashboard') {
            initDashboard();
        } else if (page === 'quiz') {
            initQuiz();
        } else if (page === 'learn') {
            initLearn();
        }
    }
});

// Audio System (Web Audio API)
function initAudio() {
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
    } catch (e) {
        console.warn('Web Audio API not supported');
    }
}

function playSound(type) {
    if (!audioContext) return;
    if (audioContext.state === 'suspended') audioContext.resume();

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === 'success') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
    } else if (type === 'error') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
    } else if (type === 'click') {
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }
}

// Login Logic
function initLogin() {
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            if (username) {
                login(username);
            }
        });
    }
}

function login(username) {
    playSound('click');
    
    let users = JSON.parse(localStorage.getItem('powerBiUsersMap') || '{}');
    
    if (users[username]) {
        currentUser = users[username];
        if (!currentUser.completedModules) currentUser.completedModules = [];
    } else {
        // Create new user
        currentUser = {
            name: username,
            points: 0,
            badges: [],
            progress: {
                multipleChoice: 0,
                trueFalse: 0,
                fillBlanks: 0
            },
            completedModules: []
        };
    }
    
    saveUser(users);
    window.location.href = 'dashboard.html';
}

function saveUser(usersMap = null) {
    if (!usersMap) {
        usersMap = JSON.parse(localStorage.getItem('powerBiUsersMap') || '{}');
    }
    usersMap[currentUser.name] = currentUser;
    localStorage.setItem('powerBiUsersMap', JSON.stringify(usersMap));
    localStorage.setItem('powerBiUser', JSON.stringify(currentUser)); // Current session
}

// Dashboard Logic
function initDashboard() {
    document.getElementById('userNameDisplay').textContent = currentUser.name;
    updateDashboardStats();
}

function updateDashboardStats() {
    document.getElementById('totalPoints').textContent = currentUser.points;
    
    // Calculate total progress
    const totalQuestions = 150;
    const answered = currentUser.progress.multipleChoice + currentUser.progress.trueFalse + currentUser.progress.fillBlanks;
    const percent = Math.round((answered / totalQuestions) * 100);
    
    document.getElementById('globalProgress').style.width = `${percent}%`;
    document.getElementById('questionsAnswered').textContent = `${answered} / ${totalQuestions}`;

    renderBadges();
}

function renderBadges() {
    const container = document.getElementById('badgesList');
    container.innerHTML = '';
    
    BADGES.forEach(badge => {
        const hasBadge = currentUser.badges.includes(badge.id);
        const div = document.createElement('div');
        div.className = `badge ${hasBadge ? 'earned' : ''}`;
        div.innerHTML = `<span>${badge.icon}</span> ${badge.name}`;
        if (!hasBadge) {
            div.style.opacity = '0.5';
        }
        container.appendChild(div);
    });
}

function logout() {
    localStorage.removeItem('powerBiUser');
    window.location.href = 'index.html';
}

// Learn Logic
function initLearn() {
    renderModules();
    updateLearningProgress();
}

function renderModules() {
    const container = document.getElementById('modulesList');
    container.innerHTML = '';

    powerBiData.learningModules.forEach(mod => {
        const isCompleted = currentUser.completedModules.includes(mod.id);
        
        const card = document.createElement('div');
        card.className = `module-card ${isCompleted ? 'completed' : ''}`;
        card.onclick = () => openModule(mod.id);

        card.innerHTML = `
            <div>
                <div class="module-title">${mod.title}</div>
                <div class="module-desc">${mod.description}</div>
            </div>
            ${isCompleted ? '<small style="color: green; font-weight: bold;">Completado</small>' : '<small style="color: #999;">Toca para leer</small>'}
        `;
        container.appendChild(card);
    });
}

function updateLearningProgress() {
    const total = powerBiData.learningModules.length;
    const completed = currentUser.completedModules.length;
    const percent = (completed / total) * 100;
    
    document.getElementById('learningProgress').style.width = `${percent}%`;
    document.getElementById('learningStats').textContent = `Módulos completados: ${completed}/${total}`;
}

function openModule(moduleId) {
    currentModuleId = moduleId;
    const module = powerBiData.learningModules.find(m => m.id === moduleId);
    
    document.getElementById('modalTitle').textContent = module.title;
    document.getElementById('modalBody').innerHTML = module.content;
    
    const isCompleted = currentUser.completedModules.includes(moduleId);
    const btn = document.getElementById('markCompleteBtn');
    
    if (isCompleted) {
        btn.textContent = 'Ya completado ✅';
        btn.disabled = true;
        btn.style.opacity = '0.7';
    } else {
        btn.textContent = '✅ Marcar como Leído (+50 pts)';
        btn.disabled = false;
        btn.style.opacity = '1';
    }

    const modal = document.getElementById('moduleModal');
    modal.classList.add('show');
}

function closeModule() {
    document.getElementById('moduleModal').classList.remove('show');
    currentModuleId = null;
}

function markAsComplete() {
    if (!currentModuleId || currentUser.completedModules.includes(currentModuleId)) return;
    
    playSound('success');
    currentUser.completedModules.push(currentModuleId);
    currentUser.points += POINTS_PER_MODULE;
    
    // Check Scholar Badge (all modules completed)
    if (currentUser.completedModules.length === powerBiData.learningModules.length) {
        // Just force check badges logic
        checkBadges(); 
    } else {
        checkBadges(); // Normal points check
    }

    saveUser();
    
    // Update UI
    const btn = document.getElementById('markCompleteBtn');
    btn.textContent = '¡Completado! 🎉';
    btn.disabled = true;
    
    renderModules();
    updateLearningProgress();
    
    setTimeout(() => {
        closeModule();
    }, 1500);
}


// Quiz Logic
function initQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    currentQuizType = urlParams.get('type');
    
    if (!currentQuizType || !powerBiData[currentQuizType]) {
        alert('Tipo de cuestionario no válido');
        window.location.href = 'dashboard.html';
        return;
    }

    // Set Title
    const titles = {
        multipleChoice: 'Opción Múltiple',
        trueFalse: 'Verdadero o Falso',
        fillBlanks: 'Completar'
    };
    document.getElementById('quizTitle').textContent = titles[currentQuizType];

    // Load Questions
    currentQuestions = powerBiData[currentQuizType];
    currentQuestionIndex = currentUser.progress[currentQuizType];

    if (currentQuestionIndex >= currentQuestions.length) {
        showQuizComplete();
    } else {
        renderQuestion();
    }
}

function renderQuestion() {
    const container = document.getElementById('questionContainer');
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress bar for this quiz
    const percent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    document.getElementById('quizProgress').style.width = `${percent}%`;
    document.getElementById('questionCount').textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;

    // Clear previous
    container.innerHTML = '';
    document.getElementById('feedback').className = 'feedback hidden';
    document.getElementById('nextBtn').classList.add('hidden');

    // Render Question Text
    const qText = document.createElement('p');
    qText.className = 'question-text';
    qText.textContent = question.question;
    container.appendChild(qText);

    // Render Options based on type
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options-container';

    if (currentQuizType === 'multipleChoice') {
        question.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-option';
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(index, btn);
            optionsDiv.appendChild(btn);
        });
    } else if (currentQuizType === 'trueFalse') {
        const btnTrue = document.createElement('button');
        btnTrue.className = 'btn btn-option';
        btnTrue.textContent = 'Verdadero';
        btnTrue.onclick = () => checkAnswer(true, btnTrue);
        
        const btnFalse = document.createElement('button');
        btnFalse.className = 'btn btn-option';
        btnFalse.textContent = 'Falso';
        btnFalse.onclick = () => checkAnswer(false, btnFalse);

        optionsDiv.appendChild(btnTrue);
        optionsDiv.appendChild(btnFalse);
    } else if (currentQuizType === 'fillBlanks') {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-input';
        input.placeholder = 'Escribe tu respuesta...';
        input.id = 'blankInput';
        
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn';
        submitBtn.textContent = 'Enviar';
        submitBtn.onclick = () => checkAnswer(document.getElementById('blankInput').value, submitBtn);

        optionsDiv.appendChild(input);
        optionsDiv.appendChild(submitBtn);
    }

    container.appendChild(optionsDiv);
}

function checkAnswer(input, element) {
    if (document.getElementById('nextBtn').classList.contains('hidden') === false) return; // Already answered

    const question = currentQuestions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQuizType === 'multipleChoice') {
        isCorrect = (input === question.answer);
    } else if (currentQuizType === 'trueFalse') {
        isCorrect = (input === question.answer);
    } else if (currentQuizType === 'fillBlanks') {
        const normalizedInput = input.trim().toLowerCase();
        const normalizedAnswer = question.answer.toLowerCase();
        isCorrect = (normalizedInput === normalizedAnswer);
    }

    // Visual Feedback
    const feedback = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedbackText');
    
    if (isCorrect) {
        playSound('success');
        feedback.className = 'feedback correct';
        feedbackText.textContent = '¡Correcto! +10 puntos';
        
        // Disable options
        if (element) {
            element.style.backgroundColor = '#d4edda';
            element.style.borderColor = '#28a745';
        }

        // Add points
        currentUser.points += POINTS_PER_QUESTION;
        checkBadges();
    } else {
        playSound('error');
        feedback.className = 'feedback incorrect';
        
        let correctText = '';
        if (currentQuizType === 'multipleChoice') {
            correctText = question.options[question.answer];
        } else if (currentQuizType === 'trueFalse') {
            correctText = question.answer ? 'Verdadero' : 'Falso';
        } else {
            correctText = question.answer;
        }

        feedbackText.textContent = `Incorrecto. La respuesta era: ${correctText}`;
        
        if (element) {
            element.style.backgroundColor = '#f8d7da';
            element.style.borderColor = '#dc3545';
        }
    }

    // Update Progress regardless of right/wrong (moving to next question)
    currentUser.progress[currentQuizType]++;
    saveUser();

    document.getElementById('nextBtn').classList.remove('hidden');
}

function checkBadges() {
    let newBadge = false;
    
    BADGES.forEach(badge => {
        if (currentUser.badges.includes(badge.id)) return;

        let earned = false;
        
        // Special condition for Scholar badge
        if (badge.specialCondition === 'all_modules') {
            if (currentUser.completedModules.length === powerBiData.learningModules.length) {
                earned = true;
            }
        } else if (currentUser.points >= badge.threshold) {
            earned = true;
        }

        if (earned) {
            currentUser.badges.push(badge.id);
            newBadge = true;
            alert(`¡Nueva Medalla Desbloqueada: ${badge.name}! ${badge.icon}`);
        }
    });

    if (newBadge) saveUser();
}

function nextQuestion() {
    playSound('click');
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        renderQuestion();
    } else {
        showQuizComplete();
    }
}

function showQuizComplete() {
    const container = document.getElementById('questionContainer');
    container.innerHTML = `
        <h3>¡Cuestionario Completado!</h3>
        <p>Has respondido todas las preguntas de esta categoría.</p>
        <p>Puntos actuales: ${currentUser.points}</p>
        <button class="btn" onclick="window.location.href='dashboard.html'">Volver al Inicio</button>
    `;
    document.getElementById('nextBtn').classList.add('hidden');
    document.getElementById('quizProgress').style.width = '100%';
}
