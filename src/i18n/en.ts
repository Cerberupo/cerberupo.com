export const en = {
    page: {
        title: 'CV - FullStack Developer',
        description: 'Full Stack Developer with experience in creating and managing bots, API\'s and web applications using NodeJS and other technologies. Able to handle multiple platforms and ensure the optimization and security of projects.',
        keywords: 'Developer, Bots, API\'s, NodeJS, Facebook Messenger, Telegram, Line, Slack, SEO, Security, Real-Time Monitoring, Widgets, Backend, Web Development, AngularJS, ReactJS'
    },
    header: {
        imageAlt: 'Image of me',
        fullstack: 'Full Stack Developer',
        mapMarker: 'Map marker',
        location: 'Spain, Toledo',
        preferredTechnologies: 'Preferred technologies',
        description: 'With extensive experience in software development, I am passionate about creating innovative and effective solutions. I have worked on various projects where I have applied my technical skills and ability to solve problems creatively. My career has provided me with a deep understanding of current technologies and a solid foundation in development best practices. I am committed to excellence in my work and always seek new opportunities to grow professionally and contribute to the success of the projects I am involved in.'
    },
    timeline: {
        noImage: 'Confidential images',
        currently: 'Currently',
        months: {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        },
        card: {
            current: '(Currently)',
            button: 'View full project',
            months: '{{months}} months',
            month: '{{months}} month',
            year: '1 year',
            year_month: '{{years}} year and {{months}} month',
            year_months: '{{years}} year and {{months}} months',
            years_month: '{{years}} years and {{months}} month',
            years_months: '{{years}} years and {{months}} months'
        }
    },
    company: {
        between: {
            name: 'Between Technology',
            project: {
                isdin: {
                    name: 'Isdin',
                    position: 'Full Stack Developer',
                    description: 'I joined as support, responsible for assisting junior team members and developing new features as well as optimizing existing ones, always with a focus on code quality.',
                    fullDescription: 'I joined as a key support in my team, responsible for assisting and guiding junior colleagues, fostering their professional development and ensuring they understand and apply best practices in software development. Additionally, I focused on developing innovative new features and optimizing existing ones, always maintaining a high standard of code quality. I contributed my experience in using microservices to facilitate the transition to this architecture, which we are currently working on to improve the scalability and efficiency of our projects.'
                }
            }
        },
        leemons: {
            name: 'Leemons Edtech Solutions',
            project: {
                leemons: {
                    name: 'Leemons',
                    position: 'Full Stack Lead Developer',
                    description: 'In collaboration with a small team, we developed a SaaS solution to revolutionize the future of online education. I was one of the lead developers and created applications like a "Trello", a "Google Calendar", a "WhatsApp" and more, at a breakneck speed 🚀',
                    fullDescription: 'I participated in a highly ambitious project that represented a great technical and organizational challenge. We started with a team consisting of two programmers and the CTO, along with the UX/UI team. The project began with the creation of a free software monolith based on NodeJS, MySQL, and Redis, using Koa as a router and Knex for the database.' +
                        '<br/><br/>' +
                        'This monolith operated through a plugin system, which allowed the installation and uninstallation of additional modules besides the "core" plugins. The plugins could communicate with each other and trigger events captured by other plugins. We worked closely with the UX/UI and business teams to define and develop the best technical solutions.' +
                        '<br/><br/>' +
                        'Over two years, we developed 42 plugins, of which I was responsible for 30. In addition to developing many of the plugins, I was responsible for almost the entire user and permissions base of the platform, which was a significant challenge. A single user could log in as a student, teacher, administrator, or any other role, with these being completely flexible thanks to fully manageable permissions. Once a certain level of maturity was reached, we needed to deploy the monolith to showcase the product to potential clients. I implemented a CI/CD flow using GitHub Actions to compile the monolith into a Docker image, upload it to AWS ECR, and deploy it on AWS ECS, ensuring an automated and error-free deployment process.' +
                        '<br/><br/>' +
                        'Later, the business decided to transform the product into a SaaS. The monolith was not viable for this model due to the complexity of maintenance and the need for each client to manage their own plugins. We decided to migrate to a microservices architecture using MoleculerJS and Nats as the messaging system.' +
                        '<br/><br/>' +
                        'I migrated the database to MongoDB with Mongoose, adapting all CRUD operations to ensure data isolation between clients, thus preventing possible information leaks. Additionally, I developed a distributed transactions system to ensure data consistency in case of microservices failures.' +
                        '<br/><br/>' +
                        'I also organized and centralized the common libraries in an NPM repository, automating their update and publication through GitHub Actions. This process reviewed the changes in the packages, updated the versions in the package.json files, and updated all dependent plugins and packages, keeping the repository always up to date.' +
                        '<br/><br/>' +
                        'For deployment, I modified the script that compiled the monolith into a Docker image to compile each plugin separately and upload it to AWS ECR. My colleague then launched these plugins using AWS EKS. Additionally, I created all the necessary ECR repositories using Terraform, thus ensuring efficient and reproducible infrastructure as code.' +
                        '<br/><br/>' +
                        'Additionally, I set up a parallel project using NextJS for clients to register and configure their deployment/educational center. This project allowed adding students, teachers, subjects, etc., from a centralized point for greater convenience when starting with the product.' +
                        '<br/><br/>' +
                        'Besides my tasks as a programmer, I also helped define, together with AWS ProServe professionals, the company’s account structure, the data structure, and how to process them, as well as the final microservices structure with EKS that we set up and everything related to AWS.'
                }
            }
        },
        diga: {
            name: 'Diga33!',
            project: {
                eci: {
                    name: 'Corte Ingles',
                    position: 'Front-end developer',
                    description: 'I provided support to the El Corte Inglés team in their back-office modernization process',
                    fullDescription: 'I actively participated in the El Corte Inglés team during their back-office system modernization process. Using Angular 2, I contributed to the update and optimization of internal applications, improving their functionality and efficiency. <br/><br/> Thanks to my outstanding performance in my current company, I was selected to join the project, where I provided comprehensive and technical support in all necessary areas, ensuring the timely and successful completion of project objectives.'
                },
                clapp: {
                    name: 'Cristian lay (app)',
                    position: 'Front-end developer',
                    description: 'I created a mobile application from scratch for Cristian Lay, which allows viewing their catalogs and purchasing their products.',
                    fullDescription: 'Following the success in creating their new website, the client was so satisfied that they requested us to develop a mobile application.' +
                        '<br/><br/>In this app, I designed and implemented a system that allows new clients to register and current clients to access catalogs, add products to the cart, and process orders.' +
                        '<br/><br/>Additionally, the application includes a rewards points system that users can accumulate and use for future purchases. I also incorporated a push notification management functionality to enhance communication with users.'
                },
                clweb: {
                    name: 'Cristian lay (web)',
                    position: 'Front-end developer',
                    description: 'I supported the development of the new Cristian Lay website, designing all the pages and components requested, which were then integrated into their CMS by the team',
                    fullDescription: 'Cristian Lay requested our company to design their new website and asked for our help in its development.' +
                        '<br/><br/>Since they wanted to integrate it into their CMS, they asked us to provide the HTML and CSS design. I personally handled this task, ensuring to deliver everything according to their specifications.'
                },
                mousee: {
                    name: 'Mousee',
                    position: 'Full Stack Developer',
                    description: 'I developed the new Mousee website with my girlfriend, which allows creating, delivering, returning, rating, and delegating tasks.',
                    fullDescription: 'This was the first project I worked on when I joined the company. Along with my partner, who also started working here, we took care of everything from the backend to the frontend and deployment.' +
                        '<br/><br/>We were responsible for designing all the system logic, including user permissions management, card operations, calendar and timeline implementation.' +
                        '<br/><br/>We programmed the backend using Node.js with Express and MongoDB, using MongoDB Atlas for database hosting. We developed the frontend with Angular 2 and uploaded it to Amazon S3, using Amazon Route 53 and CloudFront for domain management and content distribution. Finally, we deployed the backend on AWS Lambda to ensure optimal performance and efficient scalability.'
                }
            }
        },
        flyingdonkey: {
            name: 'Flying donkey',
            project: {
                wannabot: {
                    name: 'Wannabot',
                    position: 'Full Stack Developer',
                    description: 'I led and fully developed the company\'s most ambitious project, creating a complete SaaS platform from scratch for chatbot creation. I implemented full customization of chatbots and their creation through a powerful interface based on cards, connections, and conditions, integrating them with multiple messaging platforms such as Telegram, WhatsApp, and many more functionalities.' +
                        '<br/><br/>Additionally, I developed a real-time live agent management system, allowing smooth transition between chatbots and human agents. I also designed a widget that, with just a single line of JavaScript code, enables chat integration on any webpage.',
                    fullDescription: 'During my time at Wannabot, I managed and developed multiple crucial components of the platform comprehensively, primarily using NodeJS to ensure security and SEO efficiency. My responsibilities ranged from bot creation and deployment to statistics handling and real-time user interaction. Here, I highlight some of my key contributions, which I carried out autonomously:' +
                        '<br/><br/><b>Development of Consoles and Deployment Platforms</b>: I extensively worked on console.wannabot.io, where users can create, deploy, and monitor their bots. These bots are compatible with various platforms, including Web, Facebook Messenger, Telegram, Line, and Slack. This work allowed me to gain a comprehensive understanding of bot management in different environments.' +
                        '<br/><br/><b>Implementation of User Interaction Systems</b>: Through chat.wannabot.io, I developed the webpage that allows clients to interact with created bots. Using NodeJS, I ensured that the page rendering was secure and optimized for SEO, facilitating proper preview display on social media.' +
                        '<br/><br/><b>Real-Time Monitoring</b>: At live.wannabot.io, I created a system to visualize bot sessions and conversations in real-time. This included the ability for multiple agents to simultaneously manage chats and the option to intervene directly in conversations to offer personalized support.' +
                        '<br/><br/><b>Integration of Customizable Widgets</b>: I developed the JavaScript code available on widget so that users could easily integrate bots into their own webpages. This widget offers multiple configurations, allowing precise adaptation to each client\'s needs.' +
                        '<br/><br/><b>Development of Specialized APIs</b>: I designed and managed several Wannabot backends, each with specific functions:' +
                        '<br/><br/><b>· dev.wannabot.io</b>: My first NodeJS API, responsible for general tasks and storing configured information.' +
                        '<br/><br/><b>· api.wannabot.io</b>: Main API for managing data organized in controller-service-repository format.' +
                        '<br/><br/><b>· central.wannabot.io</b>: Intermediate API that sends messages to platforms like Facebook Messenger, Slack, and Telegram.' +
                        '<br/><br/><b>· stats.wannabot.io</b>: API dedicated to processing statistics and reports.' +
                        '<br/><br/><b>· sandbox.wannabot.io</b>: API for safely executing third-party code.' +
                        '<br/><br/><b>· adhock.wannabot.io and adhockec2.wannabot.io</b>: APIs for client-specific custom logic, with the second one hosted on EC2 servers for speed optimization.' +
                        '<br/><br/><b>· dialogflow.wannabot.io</b>: Intermediate API with Dialogflow.' +
                        '<br/><br/><b>· core.wannabot.io</b>: Provider of general database configurations to avoid duplications in other projects.' +
                        '<br/><br/>These experiences have allowed me to develop advanced skills in creating robust and scalable systems, as well as in direct interaction with users to ensure a high-quality experience. It is worth noting that all the implementation of the mentioned functionalities was carried out entirely by me.'
                },
                demoagro: {
                    name: 'Demoagro',
                    position: 'Full Stack Developer',
                    description: 'I developed the hybrid app for Demoagro using Ionic, with offline support. The application synchronized and stored data in SQLite when there was an Internet connection, allowing its use in rural areas without coverage. It included a previously downloaded map, rendered with Leaflet, that showed the location of exhibitors and used GPS for navigation.',
                    fullDescription: 'I led the development of a hybrid application for Demoagro using Ionic, specifically designed to operate efficiently in rural environments with little or no Internet connectivity. The application offered complete offline support, automatically synchronizing and storing data in an SQLite database whenever an Internet connection was established. This ensured that users could access and record information reliably during events, regardless of network availability.' +
                        '<br/><br/>Additionally, the application included a previously downloaded map of the event area, rendered with Leaflet. This map allowed users to locate exhibitors and, using the integrated GPS functionality, provided precise directions for navigating within the event area. The integration of Leaflet ensured a smooth and efficient user experience, facilitating navigation and enhancing interaction at the event.' +
                        '<br/><br/>This project not only improved accessibility and functionality for Demoagro attendees but also demonstrated my ability to design and develop technological solutions adapted to specific and challenging conditions.'
                },
                miradatv: {
                    name: 'MiradaTV',
                    position: 'Frontend Developer',
                    description: 'I developed components in Angular 1 for subsequent rendering from a WordPress platform, always considering SEO best practices.',
                    fullDescription: 'I was responsible for developing components in Angular 1, specifically designed for integration and rendering within a WordPress platform. This process involved careful planning and execution to ensure the components were highly efficient and compatible with the WordPress environment.' +
                        '<br/><br/>Additionally, I always considered SEO best practices, ensuring the components were optimized for search engines. This included the correct structuring of code, the appropriate use of HTML tags and attributes, and the implementation of techniques that improved the indexing and visibility of the generated content.'
                },
                abanca: {
                    name: 'Abanca',
                    position: 'Frontend Developer',
                    description: 'I programmed the frontend for an ABANCA advertising campaign, implementing animations in CSS and using JavaScript with TweenLite for some additional animations.',
                    fullDescription: 'I programmed the entire frontend for an ABANCA advertising campaign, ensuring an attractive and dynamic visual experience. I implemented all animations using CSS to achieve smooth and effective transitions, with some additional animations created with JavaScript using TweenLite.' +
                        '<br/><br/>This task included the creation of interactive and visually impactful interfaces that enhanced the campaign’s appeal and captured the attention of the target audience.'
                }
            }
        },
    },
    section: {
        coding: {
            title: 'My Story',
            description1: 'For the past 8 years, I have passionately dedicated myself to software development, exploring various technologies and keeping up with industry trends.',
            description2: 'My journey began with obtaining a degree in intermediate and advanced levels, where I acquired skills in HTML, CSS, and JavaScript for frontend development, and Java with Oracle for databases. Since then, I have experienced significant evolution in my professional career.',
            imageAlt: 'Programmer coding'
        },
        career: {
            imageAlt: 'Programmer career',
            description1: 'I started my professional career as a PHP programmer with MySQL, using WordPress as a platform, without any prior experience in the language. Later, my curiosity led me to delve into the world of frameworks, where I worked with Angular 1 and later with Angular 2+ for frontend development and using Node.js along with MongoDB for the backend.',
            description2: 'Over time, my focus has shifted towards more modern technologies, and currently, I am involved in projects that employ React for the frontend and Node.js with MongoDB or MySQL for the backend, always integrating AWS solutions and services to ensure the reliability and security of applications. This diverse journey has provided me with extensive experience and technical skills that have allowed me to successfully adapt to the changing demands of the software development field.'
        },
        cat: {
            cat: 'Cat animation',
            date: 'September 2016 - July 2015',
            description: 'This was the start of my career. After studying for four years, where I learned to work with Java, Oracle, HTML, CSS, and JavaScript, I began working with PHP and WordPress. Although I initially had no experience with these technologies, I put in my best effort to learn and give my best.'
        }
    }
}