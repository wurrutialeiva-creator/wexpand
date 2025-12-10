const powerBiData = {
    multipleChoice: [
        { question: "¿Cuál es la extensión de archivo predeterminada para un informe de Power BI?", options: [".pbi", ".pbix", ".xlsx", ".pbit"], answer: 1 },
        { question: "¿Qué lenguaje se utiliza principalmente para crear medidas y columnas calculadas en Power BI?", options: ["SQL", "M", "DAX", "Python"], answer: 2 },
        { question: "¿Qué componente de Power BI se utiliza para la transformación y limpieza de datos?", options: ["Power View", "Power Query", "Power Map", "Power Pivot"], answer: 1 },
        { question: "¿Cuál es el límite de datos para un conjunto de datos en Power BI Pro?", options: ["1 GB", "10 GB", "100 GB", "Ilimitado"], answer: 0 },
        { question: "¿Qué tipo de filtro afecta a todos los elementos visuales en todas las páginas del informe?", options: ["Filtro de nivel visual", "Filtro de nivel de página", "Filtro de nivel de informe", "Filtro de exploración"], answer: 2 },
        { question: "¿Cómo se llama la función DAX que modifica el contexto de filtro?", options: ["FILTER", "CALCULATE", "ALL", "RELATED"], answer: 1 },
        { question: "¿Qué visualización es mejor para mostrar la distribución de una medida a través de una categoría geográfica?", options: ["Gráfico de barras", "Mapa", "Matriz", "Tarjeta"], answer: 1 },
        { question: "¿Qué es un 'Dashboard' en el contexto de Power BI Service?", options: ["Una página de un informe", "Un lienzo que agrupa visualizaciones de distintos informes", "Una tabla de datos", "Un archivo .pbix"], answer: 1 },
        { question: "¿Qué función se usa para ignorar todos los filtros aplicados a una columna o tabla?", options: ["KEEPFILTERS", "REMOVEFILTERS", "ALL", "VALUES"], answer: 2 },
        { question: "¿Qué significa ETL?", options: ["Extract, Transform, Load", "Edit, Type, Load", "Extract, Test, Loop", "Enter, Transform, List"], answer: 0 },
        { question: "¿Cuál no es un tipo de cardinalidad de relación en Power BI?", options: ["Uno a Uno", "Uno a Muchos", "Muchos a Muchos", "Algunos a Todos"], answer: 3 },
        { question: "¿En qué vista se gestionan las relaciones entre tablas?", options: ["Vista de Informe", "Vista de Datos", "Vista de Modelo", "Power Query"], answer: 2 },
        { question: "¿Qué herramienta externa se usa comúnmente para optimizar modelos DAX?", options: ["DAX Studio", "Excel", "Notepad", "Visual Studio Code"], answer: 0 },
        { question: "¿Qué función DAX cuenta las filas de una tabla?", options: ["COUNT", "COUNTROWS", "DISTINCTCOUNT", "SUM"], answer: 1 },
        { question: "¿Qué es una 'Medida Rápida' (Quick Measure)?", options: ["Una medida que se calcula rápido", "Una función predefinida que escribe el DAX por ti", "Una medida temporal", "Un filtro rápido"], answer: 1 },
        { question: "¿Cuál es el modo de almacenamiento donde los datos permanecen en la fuente original y no se importan?", options: ["Import", "DirectQuery", "Dual", "Live Connection"], answer: 1 },
        { question: "¿Qué visualización usarías para ver la contribución de las partes al todo?", options: ["Gráfico de líneas", "Gráfico circular (Pie chart)", "Gráfico de dispersión", "Medidor"], answer: 1 },
        { question: "¿Qué función DAX devuelve una tabla de una columna con valores únicos?", options: ["VALUES", "DISTINCT", "Ambas (con diferencias sutiles)", "Ninguna"], answer: 2 },
        { question: "¿Qué significa RLS en Power BI?", options: ["Real Live Service", "Row Level Security", "Report Level Sharing", "Rapid Load System"], answer: 1 },
        { question: "¿Dónde se puede programar la actualización de datos?", options: ["Power BI Desktop", "Power BI Service", "Excel", "Bloc de notas"], answer: 1 },
        { question: "¿Qué tipo de unión (Merge) en Power Query mantiene todas las filas de la primera tabla y las coincidentes de la segunda?", options: ["Inner", "Left Outer", "Right Outer", "Full Outer"], answer: 1 },
        { question: "¿Qué función DAX permite manejar errores de división por cero?", options: ["DIVIDE", "QUOTIENT", "IFERROR", "CALCULATE"], answer: 0 },
        { question: "¿Cómo se llama el motor de base de datos detrás de Power BI?", options: ["SQL Server", "VertiPaq", "Jet Engine", "Oracle"], answer: 1 },
        { question: "¿Qué objeto visual permite al usuario escribir preguntas en lenguaje natural?", options: ["Q&A", "Smart Narrative", "Key Influencers", "Decomposition Tree"], answer: 0 },
        { question: "¿Qué es un 'Gateway' (Puerta de enlace) en Power BI?", options: ["Un tipo de gráfico", "Software para conectar datos on-premise con la nube", "Una licencia", "Un filtro de seguridad"], answer: 1 },
        { question: "¿Qué función de inteligencia de tiempo calcula el valor acumulado hasta la fecha en el año?", options: ["TOTALYTD", "SAMEPERIODLASTYEAR", "DATESINPERIOD", "PARALLELPERIOD"], answer: 0 },
        { question: "¿Cuál es la función principal de 'Bookmarks' (Marcadores)?", options: ["Guardar una URL", "Capturar el estado actual de la página (filtros, visibilidad)", "Marcar datos favoritos", "Crear índices"], answer: 1 },
        { question: "¿Qué archivo contiene una plantilla de Power BI sin datos?", options: [".pbix", ".pbit", ".pbi", ".xml"], answer: 1 },
        { question: "¿Qué visualización es ideal para mostrar tendencias a lo largo del tiempo?", options: ["Gráfico de barras", "Gráfico de líneas", "Mapa de árbol", "Tarjeta"], answer: 1 },
        { question: "¿Cómo se llama la característica que permite profundizar en los datos (ej. Año -> Mes)?", options: ["Drill down", "Drill through", "Cross-filter", "Tooltip"], answer: 0 },
        { question: "¿Qué función DAX se usa para obtener la fecha de hoy?", options: ["NOW()", "TODAY()", "DATE()", "CURRENTDATE()"], answer: 1 },
        { question: "¿Qué significa que una columna sea 'Calculada'?", options: ["Se calcula en tiempo de consulta", "Se calcula durante la carga de datos y se almacena", "Es una medida", "Viene de la fuente original"], answer: 1 },
        { question: "¿Qué visualización ayuda a identificar factores clave que influyen en una métrica?", options: ["Key Influencers", "Scatter Plot", "Matrix", "Ribbon Chart"], answer: 0 },
        { question: "¿Qué lenguaje usa Power Query?", options: ["R", "Python", "M", "DAX"], answer: 2 },
        { question: "¿Qué es 'Power BI Report Server'?", options: ["Servicio en la nube", "Solución on-premise (local) para alojar informes", "Una herramienta de escritorio", "Un plugin de Excel"], answer: 1 },
        { question: "¿Para qué sirve la función 'Unpivot' en Power Query?", options: ["Para rotar filas a columnas", "Para rotar columnas a filas (normalizar datos)", "Para eliminar duplicados", "Para agrupar datos"], answer: 1 },
        { question: "¿Qué función DAX compara valores con el año anterior?", options: ["PREVIOUSYEAR", "SAMEPERIODLASTYEAR", "DATEADD", "Todas las anteriores pueden servir"], answer: 3 },
        { question: "¿Qué es un 'Slicer' (Segmentación de datos)?", options: ["Un gráfico de pastel", "Un control visual para filtrar datos", "Una herramienta de corte", "Una fórmula"], answer: 1 },
        { question: "¿Cuál es el límite de filas exportables a CSV desde un visual en Power BI Service (Pro)?", options: ["30,000", "150,000", "1,000,000", "Ilimitado"], answer: 0 },
        { question: "¿Qué función devuelve la tabla relacionada en el lado 'uno' de una relación?", options: ["RELATEDTABLE", "RELATED", "LOOKUPVALUE", "USERELATIONSHIP"], answer: 1 },
        { question: "¿Qué visualización permite ver cómo se descompone un valor en varias dimensiones?", options: ["Decomposition Tree", "Key Influencers", "Treemap", "Gauge"], answer: 0 },
        { question: "¿Qué es 'IntelliSense'?", options: ["Una IA de Power BI", "Autocompletado y ayuda en la escritura de código", "Un tipo de licencia", "Un gráfico inteligente"], answer: 1 },
        { question: "¿Qué función DAX se usa para concatenar cadenas de texto?", options: ["CONCATENATE", "COMBINE", "TEXTJOIN", "SUM"], answer: 0 },
        { question: "¿Qué permite hacer 'Edit Interactions' (Editar interacciones)?", options: ["Cambiar el tipo de gráfico", "Controlar cómo un visual filtra a otros", "Editar los datos fuente", "Editar DAX"], answer: 1 },
        { question: "¿Cuál es el color por defecto del tema de Power BI?", options: ["Rojo", "Verde", "Azul (Cian)", "Amarillo"], answer: 2 },
        { question: "¿Qué función DAX devuelve el último valor de una columna según el contexto?", options: ["LASTNONBLANK", "ENDOFYEAR", "MAX", "CLOSINGBALANCE"], answer: 0 },
        { question: "¿Qué es un 'Workspace' (Área de trabajo)?", options: ["El escritorio de tu PC", "Un contenedor de colaboración en Power BI Service", "Una hoja de cálculo", "Un archivo temporal"], answer: 1 },
        { question: "¿Qué permite la 'Seguridad a nivel de filas' (RLS)?", options: ["Que nadie vea el informe", "Restringir datos según el usuario que inicia sesión", "Encriptar el archivo", "Proteger con contraseña el pbix"], answer: 1 },
        { question: "¿Qué es 'DirectQuery'?", options: ["Importar datos", "Conexión en vivo a la fuente sin guardar datos en el modelo", "Copiar y pegar datos", "Escribir SQL manual"], answer: 1 },
        { question: "¿Qué gráfico es mejor para comparar valores y mostrar su tendencia combinada?", options: ["Gráfico combinado (Líneas y columnas)", "Gráfico de dispersión", "Gráfico de cascada", "Gráfico de embudo"], answer: 0 }
    ],
    trueFalse: [
        { question: "DAX distingue entre mayúsculas y minúsculas (case-sensitive).", answer: false },
        { question: "Power BI Desktop es una herramienta gratuita.", answer: true },
        { question: "Power Query se utiliza para crear visualizaciones.", answer: false },
        { question: "Una medida calculada consume RAM y almacenamiento en el modelo.", answer: false },
        { question: "Una columna calculada se calcula cada vez que se interactúa con el informe.", answer: false },
        { question: "Puedes tener múltiples relaciones activas entre dos tablas.", answer: false },
        { question: "La función CALCULATE es una de las más importantes en DAX.", answer: true },
        { question: "Power BI Service permite programar hasta 8 actualizaciones diarias con licencia Pro.", answer: true },
        { question: "Un archivo .pbit incluye los datos del informe.", answer: false },
        { question: "Row Level Security (RLS) se configura en Power BI Service, no en Desktop.", answer: false },
        { question: "La función RELATED solo funciona si existe una relación entre las tablas.", answer: true },
        { question: "Power BI puede conectarse a archivos PDF como fuente de datos.", answer: true },
        { question: "El esquema de estrella es el diseño recomendado para modelos de datos en Power BI.", answer: true },
        { question: "DirectQuery es siempre más rápido que el modo Import.", answer: false },
        { question: "Puedes usar Python para crear visualizaciones en Power BI.", answer: true },
        { question: "Power BI Premium es necesario para compartir informes con usuarios gratuitos.", answer: true },
        { question: "La función SUMX es una función iteradora.", answer: true },
        { question: "El lenguaje M es el mismo que DAX.", answer: false },
        { question: "Un Dashboard puede contener elementos de múltiples informes.", answer: true },
        { question: "Power BI Mobile permite crear informes complejos desde el teléfono.", answer: false },
        { question: "Drill-through permite navegar de una página a otra con detalles filtrados.", answer: true },
        { question: "La cardinalidad Muchos a Muchos se recomienda para principiantes.", answer: false },
        { question: "USERELATIONSHIP activa una relación inactiva solo para el cálculo específico.", answer: true },
        { question: "Power BI admite la actualización incremental.", answer: true },
        { question: "Los marcadores (Bookmarks) solo guardan la página actual, no los filtros.", answer: false },
        { question: "Q&A solo funciona en inglés.", answer: false },
        { question: "El modo Dual permite que una tabla actúe como Import o DirectQuery según el contexto.", answer: true },
        { question: "Power Pivot es el nombre antiguo de Power BI.", answer: false },
        { question: "Puedes publicar en la web (públicamente) desde Power BI Desktop directamente.", answer: false },
        { question: "La función ALL selecciona todas las filas y respeta los filtros externos.", answer: false },
        { question: "DAX Studio es una herramienta oficial de Microsoft integrada en Desktop.", answer: false },
        { question: "Las jerarquías permiten agrupar campos como Año, Trimestre, Mes.", answer: true },
        { question: "El gráfico de cascada es útil para explicar cambios en un valor inicial y final.", answer: true },
        { question: "Los temas personalizados se importan como archivos .json.", answer: true },
        { question: "Power BI puede conectarse a Google Analytics.", answer: true },
        { question: "La función BLANK() devuelve un espacio en blanco.", answer: true },
        { question: "ISBLANK comprueba si un valor es nulo.", answer: true },
        { question: "Power BI Report Builder se usa para informes paginados.", answer: true },
        { question: "Un Gateway personal sirve para compartir datos con toda la organización.", answer: false },
        { question: "La función DIVIDE es más segura que usar el operador /.", answer: true },
        { question: "Power BI no soporta mapas de ArcGIS.", answer: false },
        { question: "La actualización programada requiere que el PC esté encendido si no se usa Gateway.", answer: false },
        { question: "Las 'Quick Measures' escriben código DAX automáticamente.", answer: true },
        { question: "Un 'Workspace' de la aplicación es lo mismo que un 'App'.", answer: false },
        { question: "Puedes exportar un informe de Power BI a PowerPoint.", answer: true },
        { question: "La función SAMEPERIODLASTYEAR requiere una tabla de fechas marcada.", answer: true },
        { question: "El 'Performance Analyzer' ayuda a medir el tiempo de carga de los visuales.", answer: true },
        { question: "Power BI es parte de la Power Platform.", answer: true },
        { question: "No se pueden ocultar páginas en un informe.", answer: false },
        { question: "El formato condicional se puede aplicar al color de fondo de una celda.", answer: true }
    ],
    fillBlanks: [
        { question: "El lenguaje de fórmulas utilizado en Power Query se conoce como ____.", answer: "M" },
        { question: "DAX son las siglas de Data Analysis ____.", answer: "Expressions" },
        { question: "El proceso de Extraer, Transformar y Cargar se conoce por sus siglas ____.", answer: "ETL" },
        { question: "La extensión de un archivo de Power BI Desktop es .____.", answer: "pbix" },
        { question: "Para modificar el contexto de filtro en una medida, usamos la función ____.", answer: "CALCULATE" },
        { question: "La función que cuenta filas en una tabla es ____.", answer: "COUNTROWS" },
        { question: "El objeto visual que permite hacer preguntas en lenguaje natural es ____.", answer: "Q&A" },
        { question: "La seguridad que restringe datos según el usuario se llama ____ (siglas).", answer: "RLS" },
        { question: "El motor de almacenamiento columnar de Power BI se llama ____.", answer: "VertiPaq" },
        { question: "Para conectarse a datos locales desde la nube se necesita un ____.", answer: "Gateway" },
        { question: "La función DAX para evitar errores de división por cero es ____.", answer: "DIVIDE" },
        { question: "El gráfico que muestra valores acumulados positivos y negativos se llama de ____.", answer: "Cascada" },
        { question: "El modo de conexión donde los datos no se importan al modelo es ____.", answer: "DirectQuery" },
        { question: "Para ignorar todos los filtros en un cálculo usamos la función ____.", answer: "ALL" },
        { question: "El servicio en la nube de Microsoft se llama Power BI ____.", answer: "Service" },
        { question: "La vista donde se crean relaciones entre tablas es la vista de ____.", answer: "Modelo" },
        { question: "Un conjunto de visualizaciones ancladas en Power BI Service se llama ____.", answer: "Dashboard" },
        { question: "La función que devuelve la fecha actual es ____.", answer: "TODAY" },
        { question: "Para combinar tablas una debajo de otra (anexar) en Power Query se usa ____.", answer: "Append" },
        { question: "Para combinar tablas lado a lado (fusionar) en Power Query se usa ____.", answer: "Merge" },
        { question: "El gráfico circular también se conoce como gráfico de ____.", answer: "Pastel" },
        { question: "Una medida que itera fila por fila para sumar se llama ____.", answer: "SUMX" },
        { question: "El archivo de plantilla de Power BI tiene la extensión .____.", answer: "pbit" },
        { question: "La herramienta para optimizar DAX externa se llama DAX ____.", answer: "Studio" },
        { question: "El panel donde seleccionas los campos para tu gráfico se llama panel de ____.", answer: "Campos" },
        { question: "La función para obtener un valor de una tabla relacionada es ____.", answer: "RELATED" },
        { question: "El tipo de esquema de base de datos ideal para Power BI es el esquema de ____.", answer: "Estrella" },
        { question: "La función que devuelve el año de una fecha es ____.", answer: "YEAR" },
        { question: "Para eliminar filas duplicadas en Power Query usamos 'Remove ____'.", answer: "Duplicates" },
        { question: "La función para reemplazar valores nulos en DAX es ____ (o COALESCE).", answer: "BLANK" },
        { question: "El gráfico que parece un velocímetro se llama ____.", answer: "Medidor" },
        { question: "Power BI es parte de la Microsoft Power ____.", answer: "Platform" },
        { question: "La función para crear una tabla con una sola columna de valores únicos es ____.", answer: "VALUES" },
        { question: "El filtro que se aplica a todos los visuales de una página es el filtro de nivel de ____.", answer: "Página" },
        { question: "Para agrupar datos geográficos usamos visualizaciones de ____.", answer: "Mapa" },
        { question: "El visual que muestra influyentes clave se llama Key ____.", answer: "Influencers" },
        { question: "La licencia gratuita de Power BI se llama Power BI ____.", answer: "Free" },
        { question: "La licencia de pago por usuario más común es Power BI ____.", answer: "Pro" },
        { question: "La capacidad dedicada para empresas grandes es Power BI ____.", answer: "Premium" },
        { question: "El editor de Power Query también se abre al pulsar 'Transformar ____'.", answer: "Datos" },
        { question: "Un KPI significa Key Performance ____.", answer: "Indicator" },
        { question: "La función para texto que extrae caracteres de la izquierda es ____.", answer: "LEFT" },
        { question: "Para cambiar de minúsculas a mayúsculas en Power Query usamos ____.", answer: "UPPERCASE" },
        { question: "La función lógica 'SI' en inglés (DAX) es ____.", answer: "IF" },
        { question: "El visual para descomponer un valor jerárquicamente es el ____ Tree.", answer: "Decomposition" },
        { question: "La función que devuelve la tabla filtrada ignorando filtros se llama ____.", answer: "ALL" },
        { question: "Un visual personalizado se puede descargar del ____.", answer: "Marketplace" },
        { question: "El lenguaje usado para visuales personalizados avanzados es R o ____.", answer: "Python" },
        { question: "La función para contar valores distintos es ____.", answer: "DISTINCTCOUNT" },
        { question: "El formato de archivo para temas personalizados es .____.", answer: "json" }
    ],
    learningModules: [
        {
            id: 'intro',
            title: 'Introducción a Power BI',
            description: 'Descubre qué es Power BI y sus componentes principales.',
            content: `
                <h3>¿Qué es Power BI?</h3>
                <p>Power BI es una colección de servicios de software, aplicaciones y conectores que funcionan conjuntamente para convertir sus orígenes de datos sin relación entre sí en información coherente, visualmente envolvente e interactiva.</p>
                <br>
                <h3>Componentes Principales</h3>
                <ul>
                    <li><strong>Power BI Desktop:</strong> Aplicación de escritorio gratuita para conectar, transformar y visualizar datos.</li>
                    <li><strong>Power BI Service (SaaS):</strong> Servicio en la nube para publicar y compartir informes.</li>
                    <li><strong>Power BI Mobile:</strong> Aplicaciones para iOS, Android y Windows para ver informes en movimiento.</li>
                </ul>
                <br>
                <h3>Flujo de Trabajo Típico</h3>
                <ol>
                    <li>Conectar a datos en Power BI Desktop.</li>
                    <li>Crear un informe con visualizaciones.</li>
                    <li>Publicar en Power BI Service.</li>
                    <li>Compartir con otros usuarios.</li>
                </ol>
            `
        },
        {
            id: 'data',
            title: 'Conexión y Transformación (ETL)',
            description: 'Aprende a importar y limpiar tus datos con Power Query.',
            content: `
                <h3>Power Query y el proceso ETL</h3>
                <p>ETL significa Extract (Extraer), Transform (Transformar) y Load (Cargar). En Power BI, esto se hace con Power Query.</p>
                <br>
                <h3>Paso a paso: Importar Datos</h3>
                <ol>
                    <li>En la pestaña <em>Inicio</em>, haz clic en <strong>Obtener datos</strong>.</li>
                    <li>Selecciona tu fuente (Excel, SQL, Web, etc.).</li>
                    <li>Haz clic en <strong>Transformar datos</strong> para abrir el Editor de Power Query.</li>
                </ol>
                <br>
                <h3>Transformaciones Comunes</h3>
                <ul>
                    <li><strong>Promover encabezados:</strong> Usar la primera fila como nombres de columna.</li>
                    <li><strong>Cambiar tipo de dato:</strong> Asegurar que los números sean números y las fechas sean fechas.</li>
                    <li><strong>Filtrar filas:</strong> Eliminar datos que no necesitas.</li>
                    <li><strong>Reemplazar valores:</strong> Corregir errores tipográficos o nulos.</li>
                </ul>
            `
        },
        {
            id: 'modeling',
            title: 'Modelado de Datos',
            description: 'Crea relaciones y prepara tu modelo para el análisis.',
            content: `
                <h3>¿Qué es el Modelado?</h3>
                <p>El modelado implica conectar diferentes tablas de datos para que puedas usarlas juntas en un informe. La base es el <strong>Esquema de Estrella</strong>.</p>
                <br>
                <h3>Tipos de Tablas</h3>
                <ul>
                    <li><strong>Tablas de Hechos (Facts):</strong> Contienen números y métricas (ej. Ventas, Transacciones). Son largas y estrechas.</li>
                    <li><strong>Tablas de Dimensiones (Dims):</strong> Contienen descripciones (ej. Productos, Clientes, Fechas). Son cortas y anchas.</li>
                </ul>
                <br>
                <h3>Crear Relaciones</h3>
                <ol>
                    <li>Ve a la <strong>Vista de Modelo</strong>.</li>
                    <li>Arrastra el campo clave (ID) de una tabla a la otra.</li>
                    <li>Verifica la cardinalidad (generalmente <em>Uno a Muchos</em>).</li>
                </ol>
            `
        },
        {
            id: 'dax',
            title: 'Fundamentos de DAX',
            description: 'Data Analysis Expressions: El lenguaje de fórmulas de Power BI.',
            content: `
                <h3>¿Qué es DAX?</h3>
                <p>DAX es una colección de funciones, operadores y constantes que se pueden usar en una fórmula para calcular y devolver uno o más valores.</p>
                <br>
                <h3>Medidas vs. Columnas Calculadas</h3>
                <ul>
                    <li><strong>Medidas:</strong> Se calculan dinámicamente según los filtros del informe. Usan CPU. <br><em>Ej: Total Ventas = SUM(Ventas[Importe])</em></li>
                    <li><strong>Columnas Calculadas:</strong> Se calculan fila por fila y se almacenan en el modelo. Usan RAM y Disco. <br><em>Ej: NombreCompleto = [Nombre] & " " & [Apellido]</em></li>
                </ul>
                <br>
                <h3>Funciones Clave</h3>
                <ul>
                    <li><code>CALCULATE()</code>: La función más poderosa. Modifica el contexto de filtro.</li>
                    <li><code>SUM(), AVERAGE(), COUNT()</code>: Funciones de agregación básicas.</li>
                    <li><code>RELATED()</code>: Trae datos de una tabla relacionada (lado uno).</li>
                </ul>
            `
        },
        {
            id: 'visuals',
            title: 'Visualización y Reportes',
            description: 'Crea gráficos impactantes e interactivos.',
            content: `
                <h3>Creando Visuales</h3>
                <p>Arrastra campos desde el panel de Campos al lienzo o selecciona un tipo de gráfico en el panel de Visualizaciones.</p>
                <br>
                <h3>Tipos de Gráficos y su Uso</h3>
                <ul>
                    <li><strong>Gráfico de Barras/Columnas:</strong> Comparar categorías.</li>
                    <li><strong>Gráfico de Líneas:</strong> Ver tendencias en el tiempo.</li>
                    <li><strong>Circular/Donut:</strong> Ver partes de un todo (usar con precaución).</li>
                    <li><strong>Mapas:</strong> Datos geográficos.</li>
                    <li><strong>Tarjetas:</strong> Mostrar un solo número importante (KPI).</li>
                </ul>
                <br>
                <h3>Formatos y Temas</h3>
                <p>Usa el icono de "brocha" (Formato) para cambiar colores, títulos, ejes y etiquetas. Puedes importar Temas (.json) para estandarizar colores corporativos.</p>
            `
        }
    ]
};
