export const es = {
    page: {
        title: 'CV - FullStack Developer',
        description: 'Desarrollador Full Stack con experiencia en la creación y gestión de bots, API\'s y aplicaciones web utilizando NodeJS y otras tecnologías. Capaz de manejar múltiples plataformas y asegurar la optimización y seguridad de los proyectos.',
        keywords: 'Desarrollador, Bots, API\'s, NodeJS, Facebook Messenger, Telegram, Line, Slack, SEO, Seguridad, Monitoreo en Tiempo Real, Widgets, Backend, Desarrollo Web, AngularJS, ReactJS'
    },
    header: {
        imageAlt: 'Imagen de mi',
        fullstack: 'Desarrollador Full Stack',
        mapMarker: 'Marcador mapa',
        location: 'España, Toledo',
        preferredTechnologies: 'Tecnologias preferidas',
        description: 'Con una amplia experiencia en el desarrollo de software, soy un apasionado de la creación de soluciones innovadoras y efectivas. He trabajado en diversos proyectos donde he aplicado mis habilidades técnicas y mi capacidad para resolver problemas de manera creativa. Mi trayectoria me ha brindado una comprensión profunda de las tecnologías actuales y una sólida base en las mejores prácticas de desarrollo. Estoy comprometido con la excelencia en mi trabajo y siempre busco nuevas oportunidades para crecer profesionalmente y contribuir al éxito de los proyectos en los que participo.',
    },
    timeline: {
        noImage: 'Imagenes confidenciales',
        currently: 'Actualmente',
        months: {
            0: 'Enero',
            1: 'Febrero',
            2: 'Marzo',
            3: 'Abril',
            4: 'Mayo',
            5: 'Junio',
            6: 'Julio',
            7: 'Agosto',
            8: 'Septiembre',
            9: 'Octubre',
            10: 'Noviembre',
            11: 'Diciembre',
        },
        card: {
            current: '(Actualmente)',
            button: 'Ver proyecto completo',
            months: '{{months}} meses',
            month: '{{months}} mes',
            year: '1 año',
            year_month: '{{years}} año y {{months}} mes',
            year_months: '{{years}} año y {{months}} meses',
            years_month: '{{years}} años y {{months}} mes',
            years_months: '{{years}} años y {{months}} meses'
        }
    },
    company: {
        between: {
            name: 'Between Technology',
            project: {
                isdin_lead: {
                    name: 'Isdin',
                    position: 'Full Stack Lead Developer',
                    description: 'Líder técnico con experiencia en formación de equipo, revisión de código, planificación técnica y coordinación entre negocio y diseño. Enfocado en la calidad del software, la eficiencia del desarrollo y la entrega de soluciones técnicamente viables alineadas con los objetivos del producto.',
                    fullDescription: 'Como líder técnico del equipo, me encargo de la incorporación y formación de nuevos integrantes, transmitiendo las mejores prácticas en desarrollo y fomentando un entorno de aprendizaje continuo. Realizo revisiones de código exhaustivas, donde detecto errores comunes y propongo mejoras a nivel de arquitectura, estilo y rendimiento, promoviendo un código limpio y mantenible. Me ocupo de distribuir las tareas técnicas de manera equilibrada, ajustándolas a las fortalezas y áreas de crecimiento de cada desarrollador. Participo activamente en la estimación de tiempos para planificar entregas realistas, colaborando estrechamente con el equipo de producto. Además, sirvo de enlace entre negocio y diseño, asegurando una comunicación fluida entre todas las partes y proponiendo soluciones técnicas que equilibren la viabilidad del desarrollo con los objetivos del producto.'
                },
                isdin: {
                    name: 'Isdin',
                    position: 'Full Stack Developer',
                    description: 'Ingresé como apoyo, encargado de asistir a los compañeros más junior de mi equipo y de desarrollar nuevas funcionalidades, así como optimizar las existentes, siempre con un enfoque en la calidad del código.',
                    fullDescription: 'Ingresé como apoyo clave en mi equipo, encargado de asistir y guiar a los compañeros más junior, fomentando su desarrollo profesional y asegurando que comprendan y apliquen las mejores prácticas en desarrollo de software. Además, me enfoqué en el desarrollo de nuevas funcionalidades innovadoras y en la optimización de las ya existentes, siempre manteniendo un alto estándar de calidad en el código. Aporté mi experiencia en el uso de microservicios para facilitar el proceso de transición a esta arquitectura, en el cual estamos trabajando actualmente para mejorar la escalabilidad y eficiencia de nuestros proyectos.'
                }
            }
        },
        leemons: {
            name: 'Leemons Edtech Solutions',
            project: {
                leemons: {
                    name: '[SASS] Leemons',
                    position: 'Full Stack Lead Developer',
                    description: 'En colaboración con un pequeño equipo, desarrollamos una solución SaaS para revolucionar el futuro de la educación en línea. Fui uno de los desarrolladores principales y creé aplicaciones como un "Trello", un "Google Calendar", un "WhatsApp" y más, a una velocidad vertiginosa 🚀',
                    fullDescription: '' +
                        'Participé en un proyecto altamente ambicioso que representó un gran desafío técnico y organizativo. Iniciamos con un equipo compuesto por dos programadores y el CTO, además del equipo de UX/UI. El proyecto comenzó con la creación de un monolito de software libre basado en NodeJS, MySQL y Redis, utilizando Koa como enrutador y Knex para la base de datos.' +
                        '<br/><br/>' +
                        'Este monolito funcionaba mediante un sistema de plugins, que permitía instalar y desinstalar módulos adicionales además de los plugins "core". Los plugins podían comunicarse entre sí y lanzar eventos capturados por otros plugins. Trabajábamos en estrecha colaboración con los equipos de UX/UI y de negocio para definir y desarrollar las mejores soluciones técnicas.' +
                        '<br/><br/>' +
                        'Durante dos años, desarrollamos 42 plugins, de los cuales fui responsable de 30.  Además de desarrollar muchos de los plugins, fui responsable de casi toda la base de usuarios y permisos de la plataforma, lo cual supuso un gran reto. Un mismo usuario podía entrar como alumno, profesor, administrador o cualquier otro rol, siendo estos completamente flexibles gracias a los permisos totalmente administrables. Alcanzado un punto de madurez, necesitábamos desplegar el monolito para mostrar el producto a potenciales clientes. Implementé un flujo de CI/CD utilizando GitHub Actions para compilar el monolito en una imagen Docker, subirla a AWS ECR y desplegarla en AWS ECS, asegurando así un proceso de despliegue automatizado y libre de errores.' +
                        '<br/><br/>' +
                        'Posteriormente, el negocio decidió transformar el producto en un SaaS. El monolito no era viable para este modelo debido a la complejidad del mantenimiento y la necesidad de que cada cliente pudiera gestionar sus propios plugins. Decidimos migrar a una arquitectura de microservicios utilizando MoleculerJS y Nats como sistema de mensajería.' +
                        '<br/><br/>' +
                        'Migré la base de datos a MongoDB con Mongoose, adaptando todas las operaciones de CRUD para asegurar el aislamiento de datos entre clientes, evitando así posibles filtraciones de información. Además, desarrollé un sistema de transacciones distribuidas para garantizar la consistencia de los datos en caso de fallos en los microservicios.' +
                        '<br/><br/>' +
                        'También organicé y centralicé las librerías comunes en un repositorio NPM, automatizando la actualización y publicación de estas mediante GitHub Actions. Este proceso revisaba los cambios en los paquetes, actualizaba las versiones en los archivos package.json, y actualizaba todos los plugins y paquetes dependientes, manteniendo el repositorio siempre al día.' +
                        '<br/><br/>' +
                        'Para el despliegue, modifiqué el script que compilaba el monolito en una imagen Docker para que compilara cada plugin por separado y lo subiera a AWS ECR. Mi compañero luego levantó estos plugins usando AWS EKS. Adicionalmente, creé todos los repositorios ECR necesarios utilizando Terraform, garantizando así una infraestructura como código eficiente y reproducible.' +
                        '<br/><br/>' +
                        ' Adicionalmente, monté un proyecto paralelo usando NextJS para que los clientes se pudieran registrar y desde el que poder configurar su despliegue/centro estudiantil. Este proyecto permitía añadir alumnos, profesores, asignaturas, etc., desde un punto centralizado para mayor comodidad a la hora de empezar con el producto.' +
                        '<br/><br/>' +
                        'Además de mis tareas como programador, también ayudé a definir, junto a los profesionales de AWS ProServe, la estructura de cuentas de la empresa, la estructura de datos y cómo procesarlos, además de la estructura final de microservicios con EKS que montamos y todo a lo que AWS respecta.'
                }
            }
        },
        diga: {
            name: 'Diga33!',
            project: {
                eci: {
                    name: 'Corte ingles',
                    position: ' Front-end developer',
                    description: 'Brindé apoyo al equipo de El Corte Inglés en su proceso de modernización del back office',
                    fullDescription: 'Participé activamente en el equipo de El Corte Inglés durante su proceso de modernización del sistema de backoffice. Utilizando Angular 2, contribuí a la actualización y optimización de las aplicaciones internas, mejorando su funcionalidad y eficiencia. <br/><br/> Gracias a mi desempeño destacado en mi actual empresa, fui seleccionado para unirme al proyecto, donde brindé apoyo integral y técnico en todas las áreas necesarias, asegurando el cumplimiento de los objetivos del proyecto en tiempo y forma.'
                },
                clapp: {
                    name: 'Cristian lay (app)',
                    position: ' Front-end developer',
                    description: 'Creé desde cero una aplicación móvil para Cristian Lay, que permite visualizar sus catálogos y realizar compras de sus productos.',
                    fullDescription: 'Tras el éxito en la creación de su nueva página web, el cliente quedó tan satisfecho que nos solicitó desarrollar una aplicación móvil.' +
                        '<br/><br/>En esta app, diseñé e implementé un sistema que permite registrar nuevos clientes y ofrecer a los clientes actuales acceso a catálogos, la posibilidad de añadir productos al carrito y procesar pedidos.' +
                        '<br/><br/>Además, la aplicación incluye un sistema de puntos de recompensa que los usuarios pueden acumular y usar en futuras compras. También incorporé la funcionalidad de gestión de notificaciones push para mejorar la comunicación con los usuarios.'
                },
                clweb: {
                    name: 'Cristian lay (web)',
                    position: 'Front-end developer',
                    description: 'Apoyé en el desarrollo de la nueva web de Cristian Lay, maquetando todas las páginas y componentes solicitados, que luego fueron integrados en su CMS por el equipo',
                    fullDescription: 'Cristian Lay solicitó a nuestra empresa el diseño de su nueva página web y nos pidió ayuda en su desarrollo.' +
                        '<br/><br/>Dado que querían integrarlo en su CMS, nos solicitaron que les proporcionáramos el HTML y CSS maquetado. Me encargué personalmente de esta tarea, asegurándome de entregar todo conforme a sus especificaciones.'
                },
                mousee: {
                    name: 'Mousee',
                    position: 'Full Stack Developer',
                    description: 'Desarrollé junto a mi novia la nueva web de Mousee, que permite crear, entregar, devolver, puntuar y delegar tareas.',
                    fullDescription: 'Este fue el primer proyecto que realicé al ingresar a la empresa. Junto con mi pareja, quien también comenzó a trabajar aquí, nos encargamos de todo el proceso, desde el backend hasta el frontend y el despliegue.' +
                        '<br/><br/>Nos responsabilizamos de diseñar toda la lógica del sistema, incluyendo la gestión de permisos de los usuarios, el funcionamiento de las cartas, la implementación de un calendario y el timeline.' +
                        '<br/><br/>Programamos el backend utilizando Node.js con Express y MongoDB, utilizando MongoDB Atlas para el alojamiento de la base de datos. Desarrollamos el frontend con Angular 2 y lo subimos a Amazon S3, utilizando Amazon Route 53 y CloudFront para la gestión de dominios y la distribución de contenido. Finalmente, desplegamos el backend en AWS Lambda para asegurar un rendimiento óptimo y una escalabilidad eficiente.'
                }
            }
        },
        flyingdonkey: {
            name: 'Flying donkey',
            project: {
                wannabot: {
                    name: '[SASS] Wannabot',
                    position: 'Full Stack Developer',
                    description: 'Lideré y desarrollé íntegramente el proyecto más ambicioso de la empresa, creando desde cero una plataforma SaaS completa para la creación de chatbots. Implementé la personalización total de los chatbots y su creación mediante una potente interfaz basada en cartas, conexiones y condiciones, integrándolos con múltiples plataformas de mensajería como Telegram, WhatsApp y muchas más funcionalidades.' +
                        '<br/><br/>Además, desarrollé un sistema de gestión de agentes en vivo en tiempo real, permitiendo una transición fluida entre chatbots y agentes humanos. También diseñé un widget que, con una sola línea de código JavaScript, permite integrar el chat en cualquier página web.',
                    fullDescription: 'Durante mi tiempo en Wannabot, he gestionado y desarrollado de manera integral múltiples componentes cruciales de la plataforma, utilizando principalmente NodeJS para garantizar seguridad y eficiencia en el SEO. Mis responsabilidades abarcaron desde la creación y despliegue de bots hasta el manejo de estadísticas y la interacción en tiempo real con usuarios. Aquí, destaco algunas de mis contribuciones clave, las cuales realicé de forma autónoma:' +
                        '<br/><br/><b>Desarrollo de Consolas y Plataformas de Despliegue</b>: He trabajado extensamente en console.wannabot.io, donde los usuarios pueden crear, desplegar y monitorear sus bots. Estos bots son compatibles con varias plataformas, incluyendo Web, Facebook Messenger, Telegram, Line y Slack. Este trabajo me permitió adquirir una visión integral de la gestión de bots en diferentes entornos.' +
                        '<br/><br/><b>Implementación de Sistemas de Interacción con Usuarios</b>: A través de chat.wannabot.io, desarrollé la página web que permite a los clientes interactuar con los bots creados. Utilizando NodeJS, aseguré que la representación de las páginas fuera segura y optimizada para SEO, facilitando la correcta visualización de previews en redes sociales.' +
                        '<br/><br/><b>Monitoreo en Tiempo Real</b>: En live.wannabot.io, creé un sistema para visualizar en tiempo real las sesiones y conversaciones de los bots. Esto incluyó la posibilidad de que múltiples agentes gestionaran simultáneamente los chats y la opción de intervenir directamente en las conversaciones para ofrecer soporte personalizado.' +
                        '<br/><br/><b>Integración de Widgets Personalizables</b>: Desarrollé el código JavaScript disponible en widget para que los usuarios pudieran integrar fácilmente los bots en sus propias páginas web. Este widget ofrece múltiples configuraciones, permitiendo una adaptación precisa a las necesidades de cada cliente.' +
                        '<br/><br/><b>Desarrollo de API\'s Especializadas</b>: He diseñado y gestionado varios backends de Wannabot, cada uno con funciones específicas:' +
                        '<br/><br/><b>· dev.wannabot.io</b>: Mi primer API en NodeJS, encargado de tareas generales y almacenamiento de la información configurada.' +
                        '<br/><br/><b>· api.wannabot.io</b>: API principal para gestionar datos organizados en formato controlador-service-repositorio.' +
                        '<br/><br/><b>· central.wannabot.io</b>: API intermediaria que envía mensajes a plataformas como Facebook Messenger, Slack y Telegram.' +
                        '<br/><br/><b>· stats.wannabot.io</b>: API dedicada al procesamiento de estadísticas y reportes.' +
                        '<br/><br/><b>· sandbox.wannabot.io</b>: API para ejecutar código de terceros de manera segura.' +
                        '<br/><br/><b>· adhock.wannabot.io y adhockec2.wannabot.io</b>: API\'s para lógica personalizada de clientes, con la segunda alojada en servidores EC2 para optimización de velocidad.' +
                        '<br/><br/><b>· dialogflow.wannabot.io</b>: API intermediaria con Dialogflow.' +
                        '<br/><br/><b>· core.wannabot.io</b>: Proveedora de configuraciones generales de base de datos para evitar duplicaciones en otros proyectos.' +
                        '<br/><br/>Estas experiencias me han permitido desarrollar habilidades avanzadas en la creación de sistemas robustos y escalables, así como en la interacción directa con los usuarios para garantizar una experiencia de alta calidad. Cabe destacar que toda la implementación de las funcionalidades mencionadas fue realizada íntegramente por mí. '
                },
                demoagro: {
                    name: 'Demoagro',
                    position: 'Full Stack Developer',
                    description: 'Desarrollé la app híbrida para Demoagro utilizando Ionic, con soporte offline. La aplicación se sincronizaba y almacenaba datos en SQLite cuando había conexión a Internet, permitiendo su uso en áreas rurales sin cobertura. Incluía un mapa previamente descargado, renderizado con Leaflet, que mostraba la ubicación de los expositores y utilizaba el GPS para navegación.',
                    fullDescription: 'Lideré el desarrollo de una aplicación híbrida para Demoagro utilizando Ionic, diseñada específicamente para operar eficientemente en entornos rurales con poca o ninguna conectividad a Internet. La aplicación ofrecía soporte offline completo, sincronizándose automáticamente y almacenando datos en una base de datos SQLite cada vez que se establecía una conexión a Internet. Esto garantizaba que los usuarios pudieran acceder y registrar información de manera confiable durante los eventos, independientemente de la disponibilidad de la red.' +
                        '<br/><br/>Además, la aplicación incluía un mapa previamente descargado de la zona del evento, renderizado con Leaflet. Este mapa permitía a los usuarios localizar expositores y, utilizando la funcionalidad GPS integrada, proporcionaba direcciones precisas para navegar dentro del área del evento. La integración de Leaflet aseguraba una experiencia de usuario fluida y eficiente, facilitando la navegación y mejorando la interacción en el evento.' +
                        '<br/><br/>Este proyecto no solo mejoró la accesibilidad y funcionalidad para los asistentes de Demoagro, sino que también demostró mi capacidad para diseñar y desarrollar soluciones tecnológicas adaptadas a condiciones específicas y desafiantes.'
                },
                miradatv: {
                    name: 'MiradaTV',
                    position: 'Frontend Developer',
                    description: 'Desarrollé componentes en Angular 1 para su posterior renderizado desde una plataforma WordPress, siempre teniendo en cuenta las mejores prácticas de SEO.',
                    fullDescription: 'Me encargué del desarrollo de componentes en Angular 1, diseñados específicamente para su integración y renderizado dentro de una plataforma WordPress. Este proceso implicó una cuidadosa planificación y ejecución para asegurar que los componentes fueran altamente eficientes y compatibles con el entorno de WordPress.' +
                        '<br/><br/>Además, siempre mantuve en consideración las mejores prácticas de SEO, garantizando que los componentes fueran optimizados para los motores de búsqueda. Esto incluyó la correcta estructuración del código, el uso adecuado de etiquetas y atributos HTML, y la implementación de técnicas que mejoraran la indexación y visibilidad del contenido generado.'
                },
                abanca: {
                    name: 'Abanca',
                    position: 'Frontend Developer',
                    description: 'Programé el frontend para una campaña publicitaria de ABANCA, implementando animaciones en CSS y utilizando JavaScript con TweenLite para algunas animaciones adicionales.',
                    fullDescription: 'Programé toda la parte frontend para una campaña publicitaria de ABANCA, asegurando una experiencia visual atractiva y dinámica. Implementé todas las animaciones utilizando CSS para lograr transiciones suaves y efectivas, con algunas animaciones adicionales creadas con JavaScript con la ayuda de TweenLite.' +
                        '<br/><br/>Esta tarea incluyó la creación de interfaces interactivas y visualmente impactantes que mejoraron el atractivo de la campaña y captaron la atención del público objetivo.'
                }
            }
        },
    },
    section: {
        coding: {
            title: 'Mi historia',
            description1: 'Durante los últimos 8 años, me he dedicado apasionadamente al desarrollo de software, explorando diversas tecnologías y manteniéndome al día con las tendencias del sector.',
            description2: 'Mi viaje comenzó con la obtención de un título en grado medio y superior, donde adquirí habilidades en HTML, CSS y JavaScript para el desarrollo frontend, y Java con Oracle para bases de datos. Desde entonces, he experimentado una evolución significativa en mi trayectoria profesional.',
            imageAlt: 'Programador codificando'
        },
        career: {
            imageAlt: 'Carrera programador',
            description1: 'Inicié mi carrera laboral como programador PHP con MySQL, utilizando WordPress como plataforma, sin tener experiencia previa en el lenguaje. Posteriormente, mi curiosidad me llevó a adentrarme en el mundo de los frameworks, donde trabajé con Angular 1 y más tarde con Angular 2+, para el desarrollo frontend y utilizando Node.js junto con MongoDB para el backend.',
            description2: 'Con el tiempo, mi enfoque se ha desplazado hacia tecnologías más modernas, y en la actualidad, me encuentro inmerso en proyectos que emplean React para el frontend y Node.js con MongoDB o MySQL para el backend, siempre integrando soluciones y servicios de AWS para garantizar la fiabilidad y la seguridad de las aplicaciones. Este recorrido diverso me ha proporcionado una amplia experiencia y habilidades técnicas que me han permitido adaptarme con éxito a las demandas cambiantes del campo del desarrollo de software.'
        },
        cat: {
            cat: 'Cat animation',
            date: 'Septiembre 2016 - Julio 2015',
            description: 'Este fue el inicio de mi carrera. Después de estudiar durante cuatro años, donde aprendí a trabajar con Java, Oracle, HTML, CSS y JavaScript, comencé a trabajar con PHP y WordPress. Aunque al principio no tenía experiencia en estas tecnologías, me esforcé al máximo por aprender y dar lo mejor de mí.'
        }
    }
};