// Create a function to generate curriculum content
function createCurriculum(title, items, imageUrl) {
    // Create the main content div
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    // Create the h3 element for the title
    const h3 = document.createElement('h3');
    h3.textContent = title;
    contentDiv.appendChild(h3);

    // Create an img element for the icon
    // const img = document.createElement('img');
    // img.src = imageUrl;
    // img.alt = `${title} Icon`;
    // img.className = 'curriculum-icon';
    // contentDiv.appendChild(img);

    // Create a div for the list of items
    const itemsDiv = document.createElement('div');

    // Loop through the items and create spans for each
    items.forEach(item => {
        const span = document.createElement('span');
        span.textContent = item;
        itemsDiv.appendChild(span);
    });

    // Append the items div to the content div
    contentDiv.appendChild(itemsDiv);

    return contentDiv;
}

// Get the parent element where content will be added
const curriculumsContent = document.getElementById('curriculums-content');

// Define the content for each curriculum
const curriculums = [
    {
        title: 'HTML',
        items: [
            'Introduction to HTML',
            'HTML Text and Links',
            'HTML Forms',
            'HTML Tables',
            'HTML5: New Tags and Features',
            'Audio and Video Tags in HTML5'
        ],
        imageUrl: 'https://skillicons.dev/icons?i=html'
    },
    {
        title: 'CSS',
        items: [
            'Introduction to CSS',
            'CSS Text and Fonts',
            'CSS Layout and Positioning',
            'CSS Transitions and Animations',
            'CSS Performance Optimization',
            'Intro to SCSS',
            'Bootstrap: Responsive Design and Grid System'
        ],
        imageUrl: 'https://skillicons.dev/icons?i=css'
    },
    {
        title: 'JavaScript',
        items: [
            'Intro to JavaScript',
            'JavaScript Syntax and Structure',
            'JavaScript Variables and Data Types',
            'JavaScript Operators and Expressions',
            'JavaScript Functions and Control Structures',
            'JavaScript DOM Manipulation',
            'AJAX',
            'ECMAScript 6 and Beyond',
            'JavaScript Security Best Practices',
            'JavaScript Performance Optimization',
            'JavaScript with 3rd Party Libraries',
            'How to Run JavaScript on a Server?'
        ],
        imageUrl: 'https://skillicons.dev/icons?i=js'
    },
    {
        title: 'React JS',
        items: [
            'Introduction to React',
            'React Components and Props',
            'React State Management (Redux & Use Context)',
            'React Forms and Validation',
            'React Routing and Navigation',
            'React Hooks and Advanced Topics',
            'React Best Practices and Performance',
            'Intro to React Ecosystem'
        ],
        imageUrl: 'https://skillicons.dev/icons?i=react'
    },
    {
        title: 'PHP',
        items: [
            'Introduction to PHP',
            'Client Side VS Server Side',
            'Installing PHP Environment Tools',
            'PHP Data Types and Variables',
            'PHP Operators',
            'Conditional Statements (If Else - Inline Condition)',
            'PHP Functions',
            'PHP Form Handling',
            'PHP Cookie Handling',
            'PHP Session Handling'
        ],
        imageUrl: 'https://skillicons.dev/icons?i=php'
    },
    {
        title: 'MYSQL',
        items: [
            'Intro to the History of Database',
            'DBMS, DB, and SQL',
            'Designing Database and ERD',
            'CRUD Operations',
            'Joins and Aggregation Functions',
            'Connecting PHP with MYSQL'
        ],
        imageUrl: 'https://skillicons.dev/icons?i=mysql'
    },
    {
        title: 'Laravel Framework',
        items: [
            'Introduction to Laravel',
            'Laravel MVC',
            'Laravel Routing and Controllers',
            'Laravel Sessions',
            'RESTful Web Services with Laravel',
            'Using AJAX with Laravel',
            'Middleware and Route Protection'
        ],
        imageUrl: 'https://skillicons.dev/icons?i=laravel'
    }
];

// Loop through each curriculum and add it to the page
curriculums.forEach(curriculum => {
    const curriculumDiv = createCurriculum(curriculum.title, curriculum.items, curriculum.imageUrl);
    curriculumsContent.appendChild(curriculumDiv);
});
