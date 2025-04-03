from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

courses = [
    {
        "id": 1,
        "name": "Intro to Python",
        "description": ("Learn the basics of Python, one of the most versatile and beginner-friendly programming "
                        "languages. This course covers essential concepts such as variables, loops, functions, and "
                        "basic data structures, preparing you for more advanced programming."),
        "category": "Programming Fundamentals",
        "img": "https://i.ibb.co/sFsBtBm/1.png",
        "price": "Open Access",
        "instructor": "Khunakorn C.",
        "lastupdate": "2024-05-15T09:15:00Z",
        "language": "Thai",
        "totaltime": "9130",
        "videos": [
            {"title": "Introduction to Python", "duration": 600, "description": "Overview of Python, its uses, and setup instructions.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "Variables and Data Types", "duration": 720, "description": "Learn how to declare variables and understand basic data types.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Control Flow", "duration": 780, "description": "Explore if-statements and conditional logic in Python.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Functions", "duration": 810, "description": "Understand how to define and call functions for reusable code.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Lists and Tuples", "duration": 720, "description": "Introduction to lists and tuples for storing multiple items.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Dictionaries and Sets", "duration": 780, "description": "Learn to use dictionaries for key-value pairs and sets for unique items.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Loops in Python", "duration": 720, "description": "Master for and while loops to iterate over data.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "File Handling", "duration": 600, "description": "Basics of reading from and writing to files in Python.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Error Handling", "duration": 750, "description": "Handle exceptions using try-except blocks.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Object-Oriented Programming", "duration": 900, "description": "Introduction to OOP concepts like classes and objects.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Modules and Packages", "duration": 600, "description": "Learn to organize code with modules and packages.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"},
            {"title": "Final Project", "duration": 1080, "description": "Apply your skills to build a simple Python application.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"}
        ]
    },
    {
        "id": 2,
        "name": "Advanced JavaScript",
        "description": ("Take your JavaScript skills to the next level by diving deep into advanced concepts like closures, "
                        "asynchronous programming, and ES6+ features. Perfect for developers looking to master modern web development."),
        "category": "Web Development",
        "img": "https://i.ibb.co/ctRgfbp/2.png",
        "price": "2,590",
        "instructor": "Khunakorn C.",
        "lastupdate": "2024-08-22T13:45:00Z",
        "language": "Thai",
        "totaltime": "9720",
        "videos": [
            {"title": "Closures Explained", "duration": 720, "description": "Understand closures and how they manage variable scope.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "Scope and Hoisting", "duration": 660, "description": "Learn about variable scope and hoisting in JavaScript.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "ES6 Arrow Functions", "duration": 600, "description": "Introduction to arrow functions and their syntax.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Promises Basics", "duration": 780, "description": "Explore promises for handling asynchronous operations.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Async/Await", "duration": 840, "description": "Simplify asynchronous code with async/await.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Modules in JavaScript", "duration": 720, "description": "Organize code using ES6 modules.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Destructuring", "duration": 600, "description": "Unpack values from arrays and objects with destructuring.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Spread and Rest Operators", "duration": 660, "description": "Use spread and rest operators for flexible code.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Prototypes and Inheritance", "duration": 900, "description": "Dive into JavaScript’s prototype-based inheritance.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Event Loop", "duration": 780, "description": "Understand the event loop and how JavaScript handles tasks.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Advanced DOM Manipulation", "duration": 720, "description": "Master techniques for dynamic DOM manipulation.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"},
            {"title": "Error Handling in JS", "duration": 750, "description": "Implement robust error handling in your code.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"},
            {"title": "Project: Task Manager", "duration": 1080, "description": "Build a task manager app using advanced JS concepts.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        ]
    },
    {
        "id": 3,
        "name": "Machine Learning with TensorFlow",
        "description": ("Learn how to create and train powerful machine learning models using TensorFlow, one of the most popular "
                        "libraries in the field. This course includes hands-on projects and real-world applications."),
        "category": "Machine Learning",
        "img": "https://i.ibb.co/FK5KDD6/3.png",
        "price": "3,560",
        "instructor": "Khunakorn C.",
        "lastupdate": "2025-01-10T10:30:00Z",
        "language": "Thai",
        "totaltime": "9480",
        "videos": [
            {"title": "Intro to Machine Learning", "duration": 600, "description": "Overview of ML concepts and applications.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "TensorFlow Basics", "duration": 720, "description": "Get started with TensorFlow and its core features.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Neural Networks Overview", "duration": 780, "description": "Understand the structure of neural networks.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Data Preprocessing", "duration": 750, "description": "Prepare data for machine learning models.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Linear Regression", "duration": 720, "description": "Build a linear regression model with TensorFlow.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Classification Models", "duration": 810, "description": "Create models for classification tasks.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Overfitting and Regularization", "duration": 840, "description": "Learn techniques to prevent overfitting.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Convolutional Neural Networks", "duration": 900, "description": "Explore CNNs for image processing.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Recurrent Neural Networks", "duration": 870, "description": "Understand RNNs for sequential data.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Model Evaluation", "duration": 720, "description": "Evaluate ML models with key metrics.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Hyperparameter Tuning", "duration": 660, "description": "Optimize models with hyperparameter tuning.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"},
            {"title": "Project: Image Classifier", "duration": 1080, "description": "Build an image classifier using TensorFlow.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"}
        ]
    },
    {
        "id": 4,
        "name": "Data Science with R",
        "description": ("Dive into the world of data science and learn how to manipulate, analyze, and visualize data using the R "
                        "programming language. This course is perfect for statisticians and data analysts."),
        "category": "Data Science",
        "img": "https://i.ibb.co/CVLJx11/4.png",
        "price": "Open Access",
        "instructor": "Khunakorn C.",
        "lastupdate": "2024-11-05T16:00:00Z",
        "language": "Thai",
        "totaltime": "8340",
        "videos": [
            {"title": "Introduction to R", "duration": 600, "description": "Learn the basics of R and its environment.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "Data Types in R", "duration": 720, "description": "Understand R’s data types and their uses.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Vectors and Lists", "duration": 660, "description": "Work with vectors and lists in R.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Data Frames", "duration": 750, "description": "Master data frames for structured data.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Data Import/Export", "duration": 720, "description": "Import and export data in various formats.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Basic Statistics", "duration": 780, "description": "Perform basic statistical analysis in R.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Data Visualization with ggplot2", "duration": 840, "description": "Create stunning visuals with ggplot2.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Exploratory Data Analysis", "duration": 810, "description": "Conduct EDA to uncover data insights.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Hypothesis Testing", "duration": 720, "description": "Learn statistical hypothesis testing in R.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "R Packages", "duration": 600, "description": "Extend R’s functionality with packages.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Project: Data Insights", "duration": 930, "description": "Analyze a dataset to extract meaningful insights.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"}
        ]
    },
    {
        "id": 5,
        "name": "Java for Beginners",
        "description": ("Start your journey into programming with Java, a powerful and widely-used language. Learn the basics, including "
                        "object-oriented programming, syntax, and common applications."),
        "category": "Programming Fundamentals",
        "img": "https://i.ibb.co/tqkgS2m/5.png",
        "price": "Open Access",
        "instructor": "Khunakorn C.",
        "lastupdate": "2024-07-19T08:20:00Z",
        "language": "Thai",
        "totaltime": "8790",
        "videos": [
            {"title": "Java Basics", "duration": 600, "description": "Introduction to Java and its key features.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "Setting Up Environment", "duration": 660, "description": "Set up your Java development environment.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Variables and Types", "duration": 720, "description": "Learn Java’s variables and data types.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Operators", "duration": 690, "description": "Understand operators for calculations and logic.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Control Structures", "duration": 750, "description": "Master if-else and switch statements.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Methods in Java", "duration": 780, "description": "Create and use methods for modular code.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Arrays", "duration": 720, "description": "Work with arrays to store multiple values.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Object-Oriented Concepts", "duration": 810, "description": "Explore OOP principles in Java.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Classes and Objects", "duration": 840, "description": "Define classes and create objects.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Exception Handling", "duration": 720, "description": "Manage errors with try-catch blocks.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Project: Simple Banking System", "duration": 1080, "description": "Build a basic banking app in Java.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"}
        ]
    },
    {
        "id": 6,
        "name": "Advanced TypeScript",
        "description": ("Enhance your TypeScript knowledge by learning about advanced features, design patterns, and real-world applications. "
                        "Ideal for developers who want to build robust and scalable applications."),
        "category": "Web Development",
        "img": "https://i.ibb.co/SQBKgBh/6.png",
        "price": "1,450",
        "instructor": "Khunakorn C.",
        "lastupdate": "2025-02-14T12:10:00Z",
        "language": "Thai",
        "totaltime": "9180",
        "videos": [
            {"title": "TypeScript Overview", "duration": 600, "description": "Recap of TypeScript basics and benefits.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "Advanced Types", "duration": 720, "description": "Explore complex type definitions.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Interfaces vs Types", "duration": 660, "description": "Compare interfaces and type aliases.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Generics", "duration": 780, "description": "Use generics for reusable, type-safe code.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Decorators", "duration": 750, "description": "Enhance classes with decorators.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Modules", "duration": 720, "description": "Organize code with TypeScript modules.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Utility Types", "duration": 690, "description": "Leverage built-in utility types.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Type Inference", "duration": 810, "description": "Understand how TypeScript infers types.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Design Patterns", "duration": 840, "description": "Apply common design patterns in TS.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Real-World Setup", "duration": 720, "description": "Set up a TS project for production.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Error Handling", "duration": 600, "description": "Handle errors effectively in TypeScript.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"},
            {"title": "Project: TypeScript App", "duration": 1080, "description": "Build a fully-typed application.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"}
        ]
    },
    {
        "id": 7,
        "name": "Python Regression Analysis",
        "description": ("Master regression analysis in Python through hands-on examples. Learn to build predictive models for statistical "
                        "and machine learning purposes using libraries like NumPy, Pandas, and Scikit-learn."),
        "category": "Machine Learning",
        "img": "https://i.ibb.co/X4FwQG1/7.png",
        "price": "Open Access",
        "instructor": "Khunakorn C.",
        "lastupdate": "2024-09-30T15:25:00Z",
        "language": "Thai",
        "totaltime": "8070",
        "videos": [
            {"title": "Intro to Regression", "duration": 600, "description": "Understand regression and its applications.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "NumPy Basics", "duration": 720, "description": "Learn NumPy for numerical operations.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Pandas for Data", "duration": 750, "description": "Use Pandas for data manipulation.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Linear Regression", "duration": 810, "description": "Build a linear regression model.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Multiple Regression", "duration": 780, "description": "Extend regression to multiple variables.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Model Evaluation", "duration": 720, "description": "Assess regression models with metrics.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Feature Engineering", "duration": 660, "description": "Enhance models with feature engineering.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Regularization Techniques", "duration": 750, "description": "Apply regularization to improve models.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Diagnostics", "duration": 690, "description": "Diagnose and refine regression models.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Project: Sales Prediction", "duration": 1080, "description": "Create a sales prediction model.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"}
        ]
    },
    {
        "id": 8,
        "name": "Python for Data Science",
        "description": ("Explore the essential libraries for data science in Python, including NumPy, Pandas, Matplotlib, Seaborn, "
                        "and Scikit-learn. Build your foundation for analyzing and visualizing data effectively."),
        "category": "Data Science",
        "img": "https://i.ibb.co/rppvrQr/8.png",
        "price": "Open Access",
        "instructor": "Khunakorn C.",
        "lastupdate": "2024-12-12T11:50:00Z",
        "language": "Thai",
        "totaltime": "9660",
        "videos": [
            {"title": "Python Recap", "duration": 600, "description": "Refresh your Python fundamentals.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "NumPy Essentials", "duration": 720, "description": "Master NumPy for array operations.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Pandas Basics", "duration": 750, "description": "Learn Pandas for data handling.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Data Cleaning", "duration": 780, "description": "Clean and prepare data for analysis.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Exploratory Analysis", "duration": 810, "description": "Perform EDA to explore datasets.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Matplotlib Intro", "duration": 720, "description": "Create basic plots with Matplotlib.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Seaborn Visualization", "duration": 750, "description": "Enhance visuals with Seaborn.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Statistical Analysis", "duration": 690, "description": "Apply statistics to datasets.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Scikit-learn Intro", "duration": 720, "description": "Get started with Scikit-learn.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Correlation Analysis", "duration": 660, "description": "Analyze relationships between variables.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Time Series Basics", "duration": 780, "description": "Introduction to time series analysis.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"},
            {"title": "Data Storytelling", "duration": 600, "description": "Present data insights effectively.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"},
            {"title": "Project: Data Dashboard", "duration": 1080, "description": "Build an interactive data dashboard.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        ]
    },
    {
        "id": 9,
        "name": "C# Basics for Beginners",
        "description": ("Get started with C#, a versatile language for building desktop, web, and mobile applications. Learn the "
                        "fundamentals, including syntax, data types, and object-oriented programming principles."),
        "category": "Programming Fundamentals",
        "img": "https://i.ibb.co/xGN2ygm/9.png",
        "price": "Open Access",
        "instructor": "Khunakorn C.",
        "lastupdate": "2024-06-25T14:00:00Z",
        "language": "Thai",
        "totaltime": "8520",
        "videos": [
            {"title": "C# Introduction", "duration": 600, "description": "Overview of C# and its applications.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "Setting Up C#", "duration": 660, "description": "Install and configure a C# environment.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Variables and Types", "duration": 720, "description": "Learn C# variables and data types.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Control Flow", "duration": 750, "description": "Use if-statements and loops in C#.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Methods", "duration": 780, "description": "Define and call methods in C#.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Arrays and Lists", "duration": 720, "description": "Work with arrays and lists for data storage.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "OOP Basics", "duration": 810, "description": "Introduction to object-oriented programming.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Classes and Objects", "duration": 840, "description": "Create classes and instantiate objects.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Inheritance", "duration": 720, "description": "Implement inheritance in C#.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Exception Handling", "duration": 660, "description": "Handle errors with try-catch.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Project: To-Do List", "duration": 1080, "description": "Build a simple to-do list application.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"}
        ]
    },
    {
        "id": 10,
        "name": "Java Spring Framework",
        "description": ("Master the Java Spring Framework and build robust web applications. This course covers Spring Boot, REST API "
                        "development, Spring Data JPA, Spring Security, and JWT authentication."),
        "category": "Web Development",
        "img": "https://i.ibb.co/qgh5Bt2/10.png",
        "price": "4,500",
        "instructor": "Khunakorn C.",
        "lastupdate": "2025-03-01T09:40:00Z",
        "language": "Thai",
        "totaltime": "9330",
        "videos": [
            {"title": "Spring Framework Intro", "duration": 600, "description": "Overview of Spring and its ecosystem.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "Spring Boot Setup", "duration": 720, "description": "Set up a Spring Boot project.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Dependency Injection", "duration": 750, "description": "Understand dependency injection in Spring.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "REST API Basics", "duration": 780, "description": "Create RESTful APIs with Spring.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Spring Data JPA", "duration": 810, "description": "Manage data with Spring Data JPA.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "CRUD Operations", "duration": 720, "description": "Implement CRUD functionality.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Spring Security Intro", "duration": 840, "description": "Secure apps with Spring Security.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "JWT Authentication", "duration": 900, "description": "Add JWT-based authentication.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Exception Handling", "duration": 720, "description": "Handle errors in Spring applications.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Testing APIs", "duration": 660, "description": "Write tests for your REST APIs.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Deploying Spring Apps", "duration": 750, "description": "Deploy a Spring app to production.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"},
            {"title": "Project: E-Commerce API", "duration": 1080, "description": "Build an e-commerce REST API.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"}
        ]
    },
    {
        "id": 11,
        "name": "Complete A.I. & Machine Learning",
        "description": ("A comprehensive guide to data science and machine learning, featuring Python libraries like TensorFlow and Pandas. "
                        "Learn to build, train, and deploy machine learning models with hands-on projects."),
        "category": "Machine Learning",
        "img": "https://i.ibb.co/4JmFmvp/11.png",
        "price": "2,000",
        "instructor": "Khunakorn C.",
        "lastupdate": "2024-10-18T17:15:00Z",
        "language": "Thai",
        "totaltime": "9960",
        "videos": [
            {"title": "AI Overview", "duration": 600, "description": "Introduction to AI and its possibilities.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "Python for ML", "duration": 720, "description": "Set up Python for machine learning.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Pandas Basics", "duration": 750, "description": "Handle data with Pandas.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "TensorFlow Intro", "duration": 780, "description": "Get started with TensorFlow.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Supervised Learning", "duration": 810, "description": "Explore supervised learning techniques.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "Unsupervised Learning", "duration": 840, "description": "Understand unsupervised learning methods.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Neural Networks", "duration": 900, "description": "Build neural networks with TensorFlow.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Deep Learning Basics", "duration": 870, "description": "Introduction to deep learning concepts.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Model Optimization", "duration": 720, "description": "Optimize ML models for better performance.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Natural Language Processing", "duration": 750, "description": "Basics of NLP with Python.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Computer Vision", "duration": 780, "description": "Apply ML to image processing.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"},
            {"title": "Model Deployment", "duration": 660, "description": "Deploy ML models to production.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"},
            {"title": "Project: AI Chatbot", "duration": 1080, "description": "Create an AI-powered chatbot.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        ]
    },
    {
        "id": 12,
        "name": "Complete MLOps",
        "description": ("Learn the end-to-end process of MLOps, from building machine learning models to deploying and automating workflows. "
                        "Ideal for professionals working on scalable data science projects."),
        "category": "Data Science",
        "img": "https://i.ibb.co/Sf94Px5/12.png",
        "price": "Open Access",
        "instructor": "Khunakorn C.",
        "lastupdate": "2025-03-20T13:30:00Z",
        "language": "Thai",
        "totaltime": "8850",
        "videos": [
            {"title": "MLOps Introduction", "duration": 600, "description": "Overview of MLOps and its importance.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
            {"title": "ML Pipeline Basics", "duration": 720, "description": "Build an end-to-end ML pipeline.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
            {"title": "Data Versioning", "duration": 750, "description": "Track and manage data versions.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
            {"title": "Model Training", "duration": 780, "description": "Train ML models efficiently.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
            {"title": "Model Evaluation", "duration": 810, "description": "Evaluate models with best practices.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
            {"title": "CI/CD for ML", "duration": 840, "description": "Implement CI/CD for ML workflows.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
            {"title": "Containerization with Docker", "duration": 900, "description": "Use Docker for ML deployments.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
            {"title": "Kubernetes Basics", "duration": 720, "description": "Scale ML apps with Kubernetes.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
            {"title": "Monitoring Models", "duration": 660, "description": "Monitor ML models in production.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
            {"title": "Automation Workflows", "duration": 750, "description": "Automate MLOps processes.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
            {"title": "Project: MLOps Pipeline", "duration": 1080, "description": "Build a complete MLOps pipeline.", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"}
        ]
    }
]


@app.route('/')
def index():
    return "<h1>Final API</h1><br>สำหรับวิธีการเข้าใช้งาน API สามารถเข้าใช้งานได้ดังนี้ <br><li><b>การเข้าถึงรายละเอียดแต่ละคอร์ส</b> สามารถเข้าได้ที่ /courses/<int:course_id> โดย course_id คือ ไอดีของแต่ละหลักสูตร<br>เช่น https://borntodev-final-project-api.borntodev.repl.co/courses/1</li><li><b>ดูรายการหลักสูตรทั้งหมด</b> สามารถเข้าได้ที่ /courses จะแสดงข้อมูลหลักสูตรทั้งหมดออกมา<br>เช่น https://borntodev-final-project-api.borntodev.repl.co/courses</li><li><b>ดูรายการหมวดหมู่ทั้งหมด</b> สามารถเข้าได้ที่ /categories จะแสดงชื่อหมวดหมู่ทั้งหมดออกมา<br>เช่น https://borntodev-final-project-api.borntodev.repl.co/categories</li><li><b>ดูรายการหมวดหมู่ทั้งหมด</b> สามารถเข้าได้ที่ /categories/<string:category_name>/courses โดยเราจะใส่ชื่อหมวดหมู่ลงไป เราจะได้หลักสูตรทั้งหมดในหมวดหมู่นั้น ๆ ออกมา<br>เช่น https://borntodev-final-project-api.borntodev.repl.co/categories/Web%20Development/courses (ตัวพิมพ์เล็ก และ ใหญ่มีผล)</li><p>ขอให้ทุกคนพยายามอย่างเต็มที่กับ Project Final ของหลักสูตรนี้นะครับ 😊</p>"


@app.route('/courses', methods=['GET'])
def get_all_courses():
    return jsonify(courses)


@app.route('/courses/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = next((course for course in courses if course["id"] == course_id),
                  None)
    if course is not None:
        return jsonify(course)
    else:
        return jsonify({"message": "Course not found"}), 404


@app.route('/categories', methods=['GET'])
def get_categories():
    categories = list(set(course['category'] for course in courses))
    return jsonify(categories)


@app.route('/categories/<string:category_name>/courses', methods=['GET'])
def get_courses_in_category(category_name):
    category_courses = [
        course for course in courses if course["category"] == category_name
    ]
    if category_courses:
        return jsonify(category_courses)
    else:
        return jsonify({"message": "No courses found in this category"}), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=81)
