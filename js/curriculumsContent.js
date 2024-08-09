const Content = [
    {
        title: "HTML",
        topics: ["Intro to HTML", "HTML Text and Links", "HTML Forms", "HTML Tables"]
    },
    {
        title: "HTML5",
        topics: ["Intro to HTML5, What and Why?", "New HTML 5 Tags", "Audio and Video Tags in HTML5"]
    },
    {
        title: "CSS",
        topics: [
            "Introduction to CSS", "CSS Text and Fonts", "CSS Layout and Positioning",
            "CSS Transitions and Animations", "CSS Performance Optimization", "Intro to SCSS"
        ]
    },
    {
        title: "Bootstrap",
        topics: [
            "What's Framework?", "Why We Should Use Frameworks?", "How to Build First Web Page Using Bootstrap?",
            "Understanding The Grid System", "Study The Classes of Bootstrap and How to use its Documentation?"
        ]
    },
    {
        title: "JavaScript",
        topics: [
            "What’s Programming?", "Intro to JavaScript", "JavaScript Syntax and Structure",
            "JavaScript Variables and Data Types", "JavaScript Operators and Expressions",
            "JavaScript Functions and Control Structures", "JavaScript DOM Manipulation", "AJAX",
            "ECMAScript 6 and Beyond", "JavaScript Security Best Practices",
            "JavaScript Performance Best Practices", "JavaScript with 3rd Party Libraries",
            "How to run JavaScript on a Server?"
        ]
    },
    {
        title: "React JS",
        topics: [
            "Introduction to React", "React Components and Props", "React State Management (Redux & Use Context)",
            "React Forms and Validation", "React Routing and Navigation", "React Hooks and Advanced Topics",
            "React Best Practices and Performance", "Intro to React Ecosystem"
        ]
    },
    {
        title: "Final Project",
        topics: ["Building Responsive Multi Pages Website", "Using All Learned Technologies", "Developing Regression Plan"]
    },
    {
        title: "Introduction to PHP",
        topics: [
            "Client Side VS Server Side", "Installing PHP Environment Tools", "PHP Data Types and Variables",
            "Printing Functions", "PHP Operators", "Conditional Statements (If Else - Inline Condition)"
        ]
    },
    {
        title: "Repetition Statements",
        topics: [
            "For, While and do. While", "Switch Case", "String Handling (Strings and Patterns)",
            "Matching and Extracting", "Searching and Replacing"
        ]
    },
    {
        title: "PHP Arrays and Foreach",
        topics: [
            "Indexed and Associative Arrays", "Multi-Dimensional Arrays", "Foreach Loop",
            "Set, Push and Pop from Array", "Sorting Array", "Array Checking Existence and Search"
        ]
    },
    {
        title: "PHP Functions",
        topics: [
            "Function Types", "Use Array with Functions", "Built-In Functions", "PHP Cookie Handling",
            "PHP Session Handling"
        ]
    },
    {
        title: "PHP Forms",
        topics: [
            "PHP Form Handling", "File Uploading", "Validating Form from XSS",
            "Validating Form with Regular Expression", "Use Sessions and Cookies with Login and Registration Forms",
            "Mailing Service"
        ]
    },
    {
        title: "MYSQL Database",
        topics: [
            "Intro to the History of Database", "Difference between DBMS, DB and SQL",
            "DDL (Data Definition Language)", "How to Design Database and Designing ERD (Entity Relationship Diagram)?",
            "How to Create, Alter and Drop the Tables Using PHPMYADMIN?", "DML (Data Manipulation Language)",
            "Study Insert, Update and Delete Statements", "Study Select Statement", "Select Types",
            "How to Search in Database?", "Condition Operators", "Sorting Data", "Aggregation Functions", "Joins"
        ]
    },
    {
        title: "How to connect PHP with MYSQL?",
        topics: [
            "Understand the Lifecycle of Connection", "Difference between MYSQL, MYSQLI and PDO",
            "Implement CRUD Functions for Tables"
        ]
    },
    {
        title: "OOP [Object Oriented Programming]",
        topics: [
            "Understanding the Theory of OOP", "Understanding Encapsulation", "Inheritance",
            "Polymorphism", "Abstraction"
        ]
    },
    {
        title: "PHP AJAX and JSON",
        topics: [
            "How to make Call and Response with AJAX?", "How to use JSON with AJAX?",
            "Call PHP Methods with AJAX without Loading Page", "PHP Autoloader"
        ]
    },
    {
        title: "MVC Design Pattern",
        topics: [
            "What is Design Pattern?", "What is MVC?", "How to build MVC?"
        ]
    },
    {
        title: "Cookies",
        topics: [
            "Why Cookies?", "Types of Cookies", "How to Create and Access Cookies?"
        ]
    },
    {
        title: "Sessions",
        topics: [
            "Session Variables", "Creating and Destroying a Session", "Retrieving and Setting the Session ID",
            "Encoding and Decoding Session Data", "Auto-Login", "Recently Viewed Document Index"
        ]
    },
    {
        title: "Web Services",
        topics: [
            "Why Web Services?", "RSS Syntax", "SOAP", "How to Access Web Services?"
        ]
    },
    {
        title: "Authentication",
        topics: [
            "HTTP Authentication", "PHP Authentication", "Authentication Methodologies"
        ]
    },
    {
        title: "Introduction to Laravel",
        topics: [
            "What is Composer and how to install it?", "What is Framework?", "Framework VS Native",
            "What is Laravel?", "Laravel MVC", "Laravel Views", "Introduction to Laravel Routing"
        ]
    },
    {
        title: "Laravel Controllers",
        topics: [
            "Laravel Routing and Group Routing", "Laravel Controllers", "Laravel Sessions"
        ]
    },
    {
        title: "Users and Authentication",
        topics: [
            "Creating and Authenticating Users", "Customizing User Authentication",
            "Managing the User Authentication State", "Protecting Routes with Middleware"
        ]
    },
    {
        title: "RESTful Web Services with Laravel",
        topics: [
            "Designing and Structuring a RESTful Service", "Restful Routing", "Request Handling & Responses",
            "Protecting Routes with Middleware", "Use AJAX with Laravel"
        ]
    }
];

// const courseContentDiv = document.getElementById("curriculums-content");

// Content.forEach(course => {
//     // Create a container for each course
//     const contentDiv = document.createElement("div");
//     contentDiv.className = "content-topic";

//     // Create and add the course title
//     const courseTitle = document.createElement("h3");
//     courseTitle.textContent = course.title;
//     courseTitle.className = "curriculums-title";
//     contentDiv.appendChild(courseTitle);

//     // Create and add the topics
//     course.topics.forEach(topic => {
//         const topicSpan = document.createElement("span");
//         topicSpan.textContent = topic;
//         topicSpan.className = "curriculums-topic";
//         contentDiv.appendChild(topicSpan);
//     });

//     // Append the content div to the main container
//     courseContentDiv.appendChild(contentDiv);
// });