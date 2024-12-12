export const labReviewQuestions = [
    {
      source: 'Lab 1',
      questions: [
        {
          question: "What version of Visual Studio are we using in this course?",
          options: [
            "Only Visual Studio 2022",
            "As long as it can use .net 7 you're good",
            "Must be the latest version",
            "Visual Studio Code"
          ],
          correctAnswer: "As long as it can use .net 7 you're good"
        },
        {
          question: "What version of SQL Server are we using in this course?",
          options: [
            "SQL Server 2019",
            "SQL Server 2017",
            "LocalDB",
            "SQL Server Express"
          ],
          correctAnswer: "SQL Server 2017"
        },
        {
          question: "According to Wikipedia, what kind of \"system\" is a client/server application?",
          options: [
            "Centralized",
            "Distributed",
            "Standalone",
            "Cloud-based"
          ],
          correctAnswer: "Distributed"
        },
        {
          question: "According to Wikipedia, what kind of \"architecture\" is a client server application?",
          options: [
            "Single-tier architecture",
            "Two-tier architecture",
            "Multi-tier architecture",
            "Monolithic architecture"
          ],
          correctAnswer: "Multi-tier architecture"
        },
        {
          question: "What two client-side libraries did we utilize this class?",
          options: [
            "React, Angular",
            "Bootstrap, jQuery",
            "Vue, Svelte",
            "Backbone, Ember"
          ],
          correctAnswer: "Bootstrap, jQuery"
        },
        {
          question: "What html element is used to render pages correctly on mobile devices?",
          options: [
            "<meta>",
            "<div>",
            "<span>",
            "<header>"
          ],
          correctAnswer: "<meta>"
        },
        {
          question: "Explain how html elements are referenced with jQuery code using the element’s id attribute.",
          options: [
            "$(\"#elementId\")",
            "$(\".elementClass\")",
            "$(\"elementTag\")",
            "$(\"[name='elementName']\")"
          ],
          correctAnswer: "$(\"#elementId\")"
        },
        {
          question: "What does the tick (`) character represent in JavaScript?",
          options: [
            "String concatenation",
            "Template literal",
            "Escape character",
            "Comment"
          ],
          correctAnswer: "Template literal"
        },
        {
          question: "Give an example of what a JSON object looks like",
          options: [
            "{ \"id\": 234, \"firstname\": \"Donny\", \"lastname\": \"Brook\" }",
            "{ id: 234, firstname: 'Donny', lastname: 'Brook' }",
            "{ \"id\": 234, \"firstname\": Donny, \"lastname\": Brook }",
            "{ id: 234, firstname: \"Donny\", lastname: \"Brook\" }"
          ],
          correctAnswer: "{ \"id\": 234, \"firstname\": \"Donny\", \"lastname\": \"Brook\" }"
        },
        {
          question: "Give an example of what a JSON object array looks like",
          options: [
            "[{ }, { }, { }]",
            "[ {}, {}, {} ]",
            "[ { }, { }, { } ]",
            "[ { }, { }, { } ]"
          ],
          correctAnswer: "[{ }, { }, { }]"
        },
        {
          question: "What does JSON.parse do?",
          options: [
            "Turns a JSON string into a JavaScript object",
            "Turns a JavaScript object into a JSON string",
            "Parses a JSON file",
            "Validates a JSON string"
          ],
          correctAnswer: "Turns a JSON string into a JavaScript object"
        },
        {
          question: "What about JSON.stringify?",
          options: [
            "Turns a JSON string into a JavaScript object",
            "Turns a JavaScript object into a JSON string",
            "Parses a JSON file",
            "Validates a JSON string"
          ],
          correctAnswer: "Turns a JavaScript object into a JSON string"
        },
        {
          question: "Give an example of using a JavaScript ternary operator.",
          options: [
            "condition ? expr1 : expr2",
            "if (condition) { expr1 } else { expr2 }",
            "condition && expr1 || expr2",
            "expr1 || expr2"
          ],
          correctAnswer: "condition ? expr1 : expr2"
        },
        {
          question: "Give an example of using a JavaScript arrow function.",
          options: [
            "function() => { }",
            "() => { }",
            "function() { }",
            "() => expr"
          ],
          correctAnswer: "() => { }"
        },
        {
          question: "What array operator was used to add an element to an existing array?",
          options: [
            "push",
            "pop",
            "shift",
            "unshift"
          ],
          correctAnswer: "push"
        },
        {
          question: "What array operator was used to remove an element from an existing array?",
          options: [
            "pop",
            "push",
            "shift",
            "unshift"
          ],
          correctAnswer: "pop"
        },
        {
          question: "Explain how the array’s .forEach method works",
          options: [
            "Iterates over each element in the array",
            "Filters elements in the array",
            "Maps elements to a new array",
            "Reduces the array to a single value"
          ],
          correctAnswer: "Iterates over each element in the array"
        },
        {
          question: "What API was utilized to retrieve data from the GitHub site?",
          options: [
            "fetch",
            "axios",
            "XMLHttpRequest",
            "jQuery.ajax"
          ],
          correctAnswer: "fetch"
        },
        {
          question: "What kind of method was utilized to retrieve the data from GitHub?",
          options: [
            "Synchronous",
            "Asynchronous",
            "Callback",
            "Promise"
          ],
          correctAnswer: "Asynchronous"
        },
        {
          question: "What 2 keywords are used in such a method?",
          options: [
            "await, async",
            "then, catch",
            "try, catch",
            "resolve, reject"
          ],
          correctAnswer: "await, async"
        },
        {
          question: "What storage was utilized to prevent a page from having to return to GitHub when refreshing the page?",
          options: [
            "sessionStorage",
            "localStorage",
            "cookies",
            "indexedDB"
          ],
          correctAnswer: "sessionStorage"
        },
        {
          question: "How was an item added to it?",
          options: [
            "sessionStorage.setItem",
            "sessionStorage.getItem",
            "sessionStorage.removeItem",
            "sessionStorage.clear"
          ],
          correctAnswer: "sessionStorage.setItem"
        },
        {
          question: "How was an item deleted from it?",
          options: [
            "sessionStorage.removeItem",
            "sessionStorage.setItem",
            "sessionStorage.getItem",
            "sessionStorage.clear"
          ],
          correctAnswer: "sessionStorage.removeItem"
        },
        {
          question: "Explain how the Bootstrap class mt-5 works?",
          options: [
            "Adds a margin-top of 5 units",
            "Adds a padding-top of 5 units",
            "Adds a margin-top of 5 pixels",
            "Adds a padding-top of 5 pixels"
          ],
          correctAnswer: "Adds a margin-top of 5 units"
        }
      ]
    },
    {
        source: 'Lab 2',
        questions: [
          {
            question: "What explorer was used to set up the initial database someSchoolDb?",
            options: [
              "SQL Server Management Studio",
              "SQL Server Object Explorer",
              "Azure Data Studio",
              "Visual Studio Code"
            ],
            correctAnswer: "SQL Server Object Explorer"
          },
          {
            question: "What is the type of database we're going to use in this course?",
            options: [
              "SQL Server",
              "MySQL",
              "LocalDB",
              "PostgreSQL"
            ],
            correctAnswer: "LocalDB"
          },
          {
            question: "What 2 tables were created in the someSchoolDb database?",
            options: [
              "Courses, Instructors",
              "Students, Divisions",
              "Departments, Enrollments",
              "Classes, Grades"
            ],
            correctAnswer: "Students, Divisions"
          },
          {
            question: "What file type gets created for the database?",
            options: [
              ".mdf file",
              ".ldf file",
              ".ndf file",
              ".bak file"
            ],
            correctAnswer: ".ldf file"
          },
          {
            question: "What 4 libraries were installed to use the EntityFramework in the ExercisesDAL project?",
            options: [
              "Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.SqlServer, Microsoft.EntityFrameworkCore.Tools, Microsoft.EntityFrameworkCore.Proxies",
              "Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.MySQL, Microsoft.EntityFrameworkCore.Tools, Microsoft.EntityFrameworkCore.Proxies",
              "Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.SqlServer, Microsoft.EntityFrameworkCore.Tools, Microsoft.EntityFrameworkCore.Design",
              "Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.SqlServer, Microsoft.EntityFrameworkCore.Tools, Microsoft.EntityFrameworkCore.Migrations"
            ],
            correctAnswer: "Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.SqlServer, Microsoft.EntityFrameworkCore.Tools, Microsoft.EntityFrameworkCore.Proxies"
          },
          {
            question: "According to the Entity Framework (EF) Core article, what kind of framework is it classified as?",
            options: [
              "Object/Relational Mapping (O/RM) framework",
              "Data Access framework",
              "Database Management framework",
              "Application Development framework"
            ],
            correctAnswer: "Object/Relational Mapping (O/RM) framework"
          },
          {
            question: "What does it do?",
            options: [
              "Turns out database tables into useable c# objects for us to code against",
              "Manages database connections",
              "Generates SQL queries",
              "Handles database migrations"
            ],
            correctAnswer: "Turns out database tables into useable c# objects for us to code against"
          },
          {
            question: "What does Microsoft call the objects that map to database tables?",
            options: [
              "Models",
              "Entities",
              "Tables",
              "Records"
            ],
            correctAnswer: "Entities"
          },
          {
            question: "What command was used to create the objects from Q8?",
            options: [
              "Scaffold-DbContext \"Server=(localdb)\\SQLServer2019instance;Database=SomeschoolDb;Trusted_Connection=True;\" Microsoft.EntityFrameworkCore.SqlServer -Context SomeSchoolContext -UseDatabaseNames",
              "Add-Migration InitialCreate",
              "Update-Database",
              "Create-DbContext"
            ],
            correctAnswer: "Scaffold-DbContext \"Server=(localdb)\\SQLServer2019instance;Database=SomeschoolDb;Trusted_Connection=True;\" Microsoft.EntityFrameworkCore.SqlServer -Context SomeSchoolContext -UseDatabaseNames"
          },
          {
            question: "Other than the object described in Q8 what other class was added to the DAL?",
            options: [
              "Repository",
              "Service",
              "Context",
              "Controller"
            ],
            correctAnswer: "Context"
          },
          {
            question: "What is the purpose of this 3rd object?",
            options: [
              "Holds all the rules for interacting with the database (FK, PK, property rules)",
              "Manages database connections",
              "Handles database migrations",
              "Generates SQL queries"
            ],
            correctAnswer: "Holds all the rules for interacting with the database (FK, PK, property rules)"
          },
          {
            question: "What version of LINQ are we using in this course?",
            options: [
              "LINQ to SQL",
              "LINQ to Objects",
              "LINQ to Entities",
              "LINQ to XML"
            ],
            correctAnswer: "LINQ to Entities"
          },
          {
            question: "What are some other versions of LINQ?",
            options: [
              "LINQ to Dataset, LINQ to XML",
              "LINQ to SQL, LINQ to Objects",
              "LINQ to JSON, LINQ to CSV",
              "LINQ to HTML, LINQ to Text"
            ],
            correctAnswer: "LINQ to Dataset, LINQ to XML"
          },
          {
            question: "What is the order of the verbs in a standard LINQ query?",
            options: [
              "select from where",
              "from where select",
              "where from select",
              "select where from"
            ],
            correctAnswer: "from where select"
          },
          {
            question: "What object type did the first Linq query return?",
            options: [
              "List<Student>",
              "IQueryable<Student>",
              "IEnumerable<Student>",
              "Student[]"
            ],
            correctAnswer: "IQueryable<Student>"
          },
          {
            question: "What property of the object in the previous question was used to determine if the query returned any data?",
            options: [
              "Count",
              "Any",
              "Length",
              "Exists"
            ],
            correctAnswer: "Any"
          },
          {
            question: "T/F the var keyword indicates an \"implicit\" data type?",
            options: [
              "True",
              "False"
            ],
            correctAnswer: "True"
          },
          {
            question: "What type of project did we use to emulate the client side today?",
            options: [
              "Web Application",
              "Console Application",
              "Generic client/server project",
              "Windows Forms Application"
            ],
            correctAnswer: "Generic client/server project"
          }
        ]
      }
    ];