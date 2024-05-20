export const es = {
    header: {
        imageAlt: 'Imagen de mi',
        fullstack: 'Desarrollador Full Stack',
        mapMarker: 'Marcador mapa',
        location: 'España, Toledo',
        preferredTechnologies: 'Tecnologias preferidas',
        description: 'Con una amplia experiencia en el desarrollo de software, soy un apasionado de la creación de soluciones innovadoras y efectivas. He trabajado en diversos proyectos donde he aplicado mis habilidades técnicas y mi capacidad para resolver problemas de manera creativa. Mi trayectoria me ha brindado una comprensión profunda de las tecnologías actuales y una sólida base en las mejores prácticas de desarrollo. Estoy comprometido con la excelencia en mi trabajo y siempre busco nuevas oportunidades para crecer profesionalmente y contribuir al éxito de los proyectos en los que participo.',
    },
    timeline: {
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
                    name: 'Leemons',
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
                    description: 'Brindé apoyo al equipo de El Corte Inglés en su proceso de modernización del back office'
                },
                clapp: {
                    name: 'Cristian lay (app)',
                    position: ' Front-end developer',
                    description: 'Creé desde cero una aplicación móvil para Cristian Lay, que permite visualizar sus catálogos y realizar compras de sus productos.'
                },
                clweb: {
                    name: 'Cristian lay (web)',
                    position: 'Front-end developer',
                    description: 'Apoyé en el desarrollo de la nueva web de Cristian Lay, maquetando todas las páginas y componentes solicitados, que luego fueron integrados en su CMS por el equipo'
                },
                mousee: {
                    name: 'Mousee',
                    position: 'Full Stack Developer',
                    description: 'Desarrollé junto a mi novia la nueva web de Mousee, que permite crear, entregar, devolver, puntuar y delegar tareas.'
                }
            }
        }
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
        }
    }
};