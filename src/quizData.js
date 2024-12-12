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
      },
      {
        source: 'Lab 3',
        questions: [
          {
            question: "What was different about the return type when returning a single value in the first example, than in previous examples?",
            options: [
              "Student? vs var",
              "Explicit vs Implicit",
              "Both of the above",
              "None of the above"
            ],
            correctAnswer: "Both of the above"
          },
          {
            question: "What is a lambda expression sometimes known as?",
            options: [
              "Anonymous function",
              "Named function",
              "Arrow function",
              "Callback function"
            ],
            correctAnswer: "Anonymous function"
          },
          {
            question: "What character(s) do we use to represent a lambda in C#?",
            options: [
              "->",
              "=>",
              "::",
              "==>"
            ],
            correctAnswer: "=>"
          },
          {
            question: "What do we place on the left side of a lambda expression?",
            options: [
              "Return type",
              "Parameters",
              "Expression",
              "Statement block"
            ],
            correctAnswer: "Parameters"
          },
          {
            question: "What do we place on the right side of a lambda expression?",
            options: [
              "Return type",
              "Parameters",
              "Expression or statement block",
              "Function name"
            ],
            correctAnswer: "Expression or statement block"
          },
          {
            question: "What context collection method did we use to filter data? Hint we pass the lambda expression to it.",
            options: [
              "Select",
              "Where",
              "OrderBy",
              "GroupBy"
            ],
            correctAnswer: "Where"
          },
          {
            question: "What character(s) do we represent an OR with in a lambda expression?",
            options: [
              "&&",
              "||",
              "^^",
              "=="
            ],
            correctAnswer: "||"
          },
          {
            question: "What does 'Division' in the following lambda expression represent? stu => stu.Division.Name == trimmedName",
            options: [
              "The entire division object that relates to that student",
              "The name of the division",
              "The ID of the division",
              "The department of the division"
            ],
            correctAnswer: "The entire division object that relates to that student"
          },
          {
            question: "What do the characters ? and ! represent when dealing with nulls in C#?",
            options: [
              "? means it's a nullable property (can hold nulls), ! gets rid of the warnings, tells compiler it WON'T be null",
              "? means it's a non-nullable property, ! means it can hold nulls",
              "? means it's a nullable property, ! means it can hold nulls",
              "? means it can hold nulls, ! means it's a non-nullable property"
            ],
            correctAnswer: "? means it's a nullable property (can hold nulls), ! gets rid of the warnings, tells compiler it WON'T be null"
          },
          {
            question: "What context method do we utilize to persist updates to the database?",
            options: [
              "SaveChanges",
              "Update",
              "Commit",
              "Persist"
            ],
            correctAnswer: "SaveChanges"
          },
          {
            question: "To insert a new row into the database what context method do we utilize?",
            options: [
              "_db.Students.AddAsync",
              "_db.Students.Insert",
              "_db.Students.Add",
              "_db.Students.Create"
            ],
            correctAnswer: "_db.Students.AddAsync"
          },
          {
            question: "What context method do we use to update entities?",
            options: [
              "_db.Entry(currentStudent!).CurrentValues.SetValues(updatedStudent)",
              "_db.Students.Update",
              "_db.Students.Modify",
              "_db.Students.Edit"
            ],
            correctAnswer: "_db.Entry(currentStudent!).CurrentValues.SetValues(updatedStudent)"
          },
          {
            question: "What context method(s) do we use to delete an entity?",
            options: [
              "Remove",
              "Delete",
              "Destroy",
              "Erase"
            ],
            correctAnswer: "Remove"
          },
          {
            question: "Why do generated primary keys in SQL Server suddenly jump by 1000?",
            options: [
              "SQL Server increments autogenerated keys and to be efficient it pre-generates 1000 keys in a cache",
              "SQL Server has a bug that causes this behavior",
              "SQL Server uses a different algorithm for key generation",
              "SQL Server does this to avoid collisions"
            ],
            correctAnswer: "SQL Server increments autogenerated keys and to be efficient it pre-generates 1000 keys in a cache"
          },
          {
            question: "What 3 keywords are used to create a method that needs to make an asynchronous call in C#?",
            options: [
              "async, await, Task<returntype>",
              "async, await, Future",
              "async, await, Promise",
              "async, await, Deferred"
            ],
            correctAnswer: "async, await, Task<returntype>"
          }
        ]
      },
      {
        source: 'Lab 4',
        questions: [
          {
            question: "What are the 3 classical layers of a software application, describe each?",
            options: [
              "Presentation Layer - GUI, Business Layer - This is where all your logic goes, your rules, Data - Your Database/Datastore",
              "Frontend, Backend, Database",
              "Client, Server, Database",
              "UI, Logic, Data"
            ],
            correctAnswer: "Presentation Layer - GUI, Business Layer - This is where all your logic goes, your rules, Data - Your Database/Datastore"
          },
          {
            question: "Describe the software that will run in each of the 3 traditional layers for this course.",
            options: [
              "Presentation: bootstrap/jquery/.net core web apis, Business Layer: .net entity framework, C#, Data: LocalDB database",
              "Frontend: React, Backend: Node.js, Database: MongoDB",
              "Client: Angular, Server: Express, Database: MySQL",
              "UI: HTML/CSS, Logic: JavaScript, Data: SQLite"
            ],
            correctAnswer: "Presentation: bootstrap/jquery/.net core web apis, Business Layer: .net entity framework, C#, Data: LocalDB database"
          },
          {
            question: "Describe the difference between a 'logical' layer and a 'physical' layer.",
            options: [
              "Logical layer just describes where each piece of logic is going, Physical layer is the actual hardware it's running on",
              "Logical layer is the software, Physical layer is the hardware",
              "Logical layer is the frontend, Physical layer is the backend",
              "Logical layer is the database, Physical layer is the server"
            ],
            correctAnswer: "Logical layer just describes where each piece of logic is going, Physical layer is the actual hardware it's running on"
          },
          {
            question: "What is a 'Thick' or 'Intelligent' client?",
            options: [
              "Lots of logic on the front end",
              "Lots of logic on the back end",
              "A client with a lot of data",
              "A client with a lot of users"
            ],
            correctAnswer: "Lots of logic on the front end"
          },
          {
            question: "To whom does a 'Thick' client benefit?",
            options: [
              "The clients because it seems much faster",
              "The developers because it is easier to maintain",
              "The database because it reduces load",
              "The server because it reduces processing"
            ],
            correctAnswer: "The clients because it seems much faster"
          },
          {
            question: "To whom does a 'Thin' client benefit?",
            options: [
              "Us as the developers, we have more control over the data, security",
              "The clients because it seems much faster",
              "The database because it reduces load",
              "The server because it reduces processing"
            ],
            correctAnswer: "Us as the developers, we have more control over the data, security"
          },
          {
            question: "How many 'logical' layers does the proposed course architecture have?",
            options: [
              "5",
              "3",
              "4",
              "6"
            ],
            correctAnswer: "5"
          },
          {
            question: "What does the acronym DAL stand for? What is the purpose?",
            options: [
              "Data Access Layer - Uses entity framework to allow us to code against our database using POCOs (plain old c# object)",
              "Data Abstraction Layer - Provides an abstraction over the database",
              "Database Access Layer - Manages database connections",
              "Data Application Layer - Handles data processing"
            ],
            correctAnswer: "Data Access Layer - Uses entity framework to allow us to code against our database using POCOs (plain old c# object)"
          },
          {
            question: "What is the purpose for having a database context class?",
            options: [
              "Holds all the rules for interacting with the database",
              "Manages database connections",
              "Handles database migrations",
              "Generates SQL queries"
            ],
            correctAnswer: "Holds all the rules for interacting with the database"
          },
          {
            question: "What is a DAO class?",
            options: [
              "A manager that defines the methods we'll use to interact with that entity",
              "A class that handles database connections",
              "A class that manages data access",
              "A class that provides data abstraction"
            ],
            correctAnswer: "A manager that defines the methods we'll use to interact with that entity"
          },
          {
            question: "What projects made up the VS2022 solution for both the exercises and case study projects after completing today’s lab, and what did each project compile to (assembly)?",
            options: [
              "xUnit test project - .exe, C# client libraries (DAL, ViewModel) - .dll, .Net Core Web API - .exe",
              "xUnit test project - .dll, C# client libraries (DAL, ViewModel) - .exe, .Net Core Web API - .dll",
              "xUnit test project - .exe, C# client libraries (DAL, ViewModel) - .exe, .Net Core Web API - .dll",
              "xUnit test project - .dll, C# client libraries (DAL, ViewModel) - .dll, .Net Core Web API - .exe"
            ],
            correctAnswer: "xUnit test project - .exe, C# client libraries (DAL, ViewModel) - .dll, .Net Core Web API - .exe"
          },
          {
            question: "What #’s are typically returned from a DAO’s Add, Update, and Delete methods?",
            options: [
              "Add - You'd want to return the new Id, Update - the number of entities updated, Delete - You'd return a success/failure",
              "Add - the number of entities added, Update - the number of entities updated, Delete - the number of entities deleted",
              "Add - the new Id, Update - the updated Id, Delete - the deleted Id",
              "Add - the new Id, Update - the number of entities updated, Delete - the number of entities deleted"
            ],
            correctAnswer: "Add - You'd want to return the new Id, Update - the number of entities updated, Delete - You'd return a success/failure"
          }
        ]
      },
      {
        source: 'Lab 5',
        questions: [
          {
            question: "What is a ViewModel?",
            options: [
              "A representation of the data we want our clients to see (safe data)",
              "A model of the database",
              "A view of the user interface",
              "A controller for the application"
            ],
            correctAnswer: "A representation of the data we want our clients to see (safe data)"
          },
          {
            question: "How many .dlls does our current solution have?",
            options: [
              "2 (vm, dal)",
              "1 (vm)",
              "3 (vm, dal, api)",
              "4 (vm, dal, api, test)"
            ],
            correctAnswer: "2 (vm, dal)"
          },
          {
            question: "T/F - by adding a using for ExercisesDAL we can start using DAO classes in a ViewModel class?",
            options: [
              "True",
              "False"
            ],
            correctAnswer: "False"
          },
          {
            question: "What is different about the Timer property in the ViewModel layer vs the DAL?",
            options: [
              "It's turned into a base64 string",
              "It's converted to a JSON object",
              "It's serialized to XML",
              "It's stored as a plain text"
            ],
            correctAnswer: "It's turned into a base64 string"
          },
          {
            question: "What is the return type for the ViewModel’s GetAll method, why is it different than the DAO’s GetAll return type?",
            options: [
              "ViewModel returns a list of ViewModel objects to the client, DAO returns the DB entities",
              "ViewModel returns a JSON object, DAO returns a list of entities",
              "ViewModel returns a string, DAO returns a list of entities",
              "ViewModel returns an XML object, DAO returns a list of entities"
            ],
            correctAnswer: "ViewModel returns a list of ViewModel objects to the client, DAO returns the DB entities"
          },
          {
            question: "T/F the Testing project has a reference for the ViewModel’s .dll?",
            options: [
              "True",
              "False"
            ],
            correctAnswer: "True"
          },
          {
            question: "T/F the Testing project has a reference for the DAL’s .dll?",
            options: [
              "True",
              "False"
            ],
            correctAnswer: "True"
          },
          {
            question: "T/F the Testing project breaks the hierarchy for the course’s framework?",
            options: [
              "True",
              "False"
            ],
            correctAnswer: "True"
          },
          {
            question: "Why should the Add test be ran before Update and Delete tests?",
            options: [
              "You can't update data, that doesn't exist yet",
              "To ensure data integrity",
              "To avoid conflicts",
              "To maintain consistency"
            ],
            correctAnswer: "You can't update data, that doesn't exist yet"
          },
          {
            question: "How many GetXXX methods are there in the StudentViewModel class?",
            options: [
              "Just two",
              "Three",
              "Four",
              "Five"
            ],
            correctAnswer: "Just two"
          },
          {
            question: "What C# operator did we use on the phone property in the update tests?",
            options: [
              "The inline if statement",
              "The ternary operator",
              "The conditional operator",
              "The logical operator"
            ],
            correctAnswer: "The inline if statement"
          },
          {
            question: "Why did we use the operator in Q11 on the update tests?",
            options: [
              "So we can rerun the tests over and over again",
              "To simplify the code",
              "To improve performance",
              "To ensure accuracy"
            ],
            correctAnswer: "So we can rerun the tests over and over again"
          }
        ]
      },
      {
        source: 'Lab 6',
        questions: [
          {
            question: "What does the acronym REST stand for?",
            options: [
              "Representational State Transfer",
              "Remote Execution Standard Transfer",
              "Real-time Event Stream Transfer",
              "Reliable Event Stream Transfer"
            ],
            correctAnswer: "Representational State Transfer"
          },
          {
            question: "What is REST?",
            options: [
              "It relies on a stateless, client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol is used. REST is an architecture style for designing networked applications.",
              "It is a protocol for real-time data transfer.",
              "It is a framework for building desktop applications.",
              "It is a method for encrypting data."
            ],
            correctAnswer: "It relies on a stateless, client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol is used. REST is an architecture style for designing networked applications."
          },
          {
            question: "What are the 4 common Verbs the REST protocol specifies?",
            options: [
              "GET, DELETE, PUT, POST, PATCH",
              "GET, POST, UPDATE, DELETE",
              "FETCH, SEND, RECEIVE, DELETE",
              "CONNECT, TRACE, OPTIONS, HEAD"
            ],
            correctAnswer: "GET, DELETE, PUT, POST, PATCH"
          },
          {
            question: "If I get an error making a REST call and it starts with a 4, where should I look for the problem?",
            options: [
              "400 - Client side error",
              "500 - Server side error",
              "300 - Redirection error",
              "200 - Success"
            ],
            correctAnswer: "400 - Client side error"
          },
          {
            question: "If I get an error making a REST call and it starts with a 5, where should I look for the problem?",
            options: [
              "500 - Server side",
              "400 - Client side",
              "300 - Redirection",
              "200 - Success"
            ],
            correctAnswer: "500 - Server side"
          },
          {
            question: "What part of the architecture will generate an error starting with 5xx?",
            options: [
              "Server side",
              "Client side",
              "Network",
              "Database"
            ],
            correctAnswer: "Server side"
          },
          {
            question: "What software will our website be based on to provide REST services for our client?",
            options: [
              ".NET Core WEB API",
              "Node.js",
              "Django",
              "Ruby on Rails"
            ],
            correctAnswer: ".NET Core WEB API"
          },
          {
            question: "Give an example of an 'attribute' on an API Controller method to specify the HTTP verb that is called by a client’s fetch call?",
            options: [
              "HttpPut, HttpGet",
              "HttpPost, HttpDelete",
              "HttpPatch, HttpOptions",
              "HttpHead, HttpTrace"
            ],
            correctAnswer: "HttpPut, HttpGet"
          },
          {
            question: "What syntax do I add to the attribute in the previous question to use a student's last name?",
            options: [
              "[HttpGet(\"{lastname}\")]",
              "[HttpPost(\"{lastname}\")]",
              "[HttpPut(\"{lastname}\")]",
              "[HttpDelete(\"{lastname}\")]"
            ],
            correctAnswer: "[HttpGet(\"{lastname}\")]"
          },
          {
            question: "What does the attribute class=\"col-5\" mean?",
            options: [
              "5 columns worth of width in the bootstrap grid system",
              "5 rows worth of height in the bootstrap grid system",
              "5 pixels of margin",
              "5 pixels of padding"
            ],
            correctAnswer: "5 columns worth of width in the bootstrap grid system"
          },
          {
            question: "What version of jQuery are we using in this class?",
            options: [
              "jQuery v3.6.4",
              "jQuery v2.2.4",
              "jQuery v1.12.4",
              "jQuery v4.0.0"
            ],
            correctAnswer: "jQuery v3.6.4"
          },
          {
            question: "Explain this line of code: $( ()=> { alert('cake'); });",
            options: [
              "Just the short form of the old document ready event. The event is triggered when the page is fully loaded.",
              "It sets a timeout to show an alert after the page is loaded.",
              "It binds a click event to the document.",
              "It sends an AJAX request when the page is loaded."
            ],
            correctAnswer: "Just the short form of the old document ready event. The event is triggered when the page is fully loaded."
          },
          {
            question: "When should you use a ...val(...) function vs a ...text(...) function in jQuery programming?",
            options: [
              ".val() for inputs, .text() for html elements",
              ".val() for html elements, .text() for inputs",
              ".val() for div elements, .text() for span elements",
              ".val() for span elements, .text() for div elements"
            ],
            correctAnswer: ".val() for inputs, .text() for html elements"
          },
          {
            question: "What API are we using to call the server?",
            options: [
              "fetch",
              "axios",
              "XMLHttpRequest",
              "jQuery.ajax"
            ],
            correctAnswer: "fetch"
          },
          {
            question: "If the call to the server fails, how did we handle it?",
            options: [
              "We're passing it off to the errorRoutine so that it can parse the error message and put it in the console",
              "We retry the call",
              "We show an alert to the user",
              "We log the error to the server"
            ],
            correctAnswer: "We're passing it off to the errorRoutine so that it can parse the error message and put it in the console"
          },
          {
            question: "What was returned from the call?",
            options: [
              "A response object (body is a readableStream, statusCode = 200 for success)",
              "A JSON object",
              "An HTML document",
              "A plain text response"
            ],
            correctAnswer: "A response object (body is a readableStream, statusCode = 200 for success)"
          },
          {
            question: "How many times did we use the await keyword in the client script when the call worked?",
            options: [
              "2 once for fetch and once for response.json()",
              "1 for fetch",
              "3 for fetch, response.json(), and another async function",
              "4 for fetch, response.json(), and two other async functions"
            ],
            correctAnswer: "2 once for fetch and once for response.json()"
          },
          {
            question: "Why should we be using === or !== in JavaScript and not == and !=?",
            options: [
              "It's just a safer check",
              "It's faster",
              "It's more readable",
              "It's more compatible"
            ],
            correctAnswer: "It's just a safer check"
          },
          {
            question: "What is the significance of the # in the following jQuery code? $('#someElement')",
            options: [
              "It selects an element by its ID",
              "It selects an element by its class",
              "It selects an element by its tag name",
              "It selects an element by its attribute"
            ],
            correctAnswer: "It selects an element by its ID"
          }
        ]
      },
      {
        source: 'Lab 7',
        questions: [
          {
            question: "What 2 bootstrap components did we utilize this class?",
            options: [
              "Menu, and the modal",
              "Navbar, and the carousel",
              "Dropdown, and the tooltip",
              "Alert, and the button"
            ],
            correctAnswer: "Menu, and the modal"
          },
          {
            question: "In addition to the bootstrap.min.css file, what other bootstrap file is required for the 2 components from q1 to work correctly?",
            options: [
              "Bootstrap javascript file",
              "Bootstrap theme file",
              "Bootstrap grid file",
              "Bootstrap utilities file"
            ],
            correctAnswer: "Bootstrap javascript file"
          },
          {
            question: "Explain this html: <button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#myModal\">",
            options: [
              "data-bs-toggle tells bootstrap we're going to be doing a toggle whenever this element is triggered, \"modal\" tells it the type of toggle, data-bs-target tells bootstrap which id we're looking for on the page",
              "data-bs-toggle tells bootstrap we're going to be doing a toggle whenever this element is triggered, \"collapse\" tells it the type of toggle, data-bs-target tells bootstrap which id we're looking for on the page",
              "data-bs-toggle tells bootstrap we're going to be doing a toggle whenever this element is triggered, \"dropdown\" tells it the type of toggle, data-bs-target tells bootstrap which id we're looking for on the page",
              "data-bs-toggle tells bootstrap we're going to be doing a toggle whenever this element is triggered, \"tooltip\" tells it the type of toggle, data-bs-target tells bootstrap which id we're looking for on the page"
            ],
            correctAnswer: "data-bs-toggle tells bootstrap we're going to be doing a toggle whenever this element is triggered, \"modal\" tells it the type of toggle, data-bs-target tells bootstrap which id we're looking for on the page"
          },
          {
            question: "Explain the data-bs-backdrop=\"static\" attribute on the modal’s <div> element",
            options: [
              "Prevents users from accidentally closing without hitting the 'X'",
              "Allows users to close the modal by clicking outside of it",
              "Makes the modal draggable",
              "Adds a background image to the modal"
            ],
            correctAnswer: "Prevents users from accidentally closing without hitting the 'X'"
          },
          {
            question: "What can the user do if we take the attribute in q4 off the <div>?",
            options: [
              "Can accidentally close the modal",
              "Can resize the modal",
              "Can move the modal",
              "Can change the modal's content"
            ],
            correctAnswer: "Can accidentally close the modal"
          },
          {
            question: "What was unique about the menu button we used in the bootstrap navbar last class?",
            options: [
              "It collapses as the page gets thinner for mobile devices",
              "It changes color when clicked",
              "It has a dropdown menu",
              "It has an icon"
            ],
            correctAnswer: "It collapses as the page gets thinner for mobile devices"
          },
          {
            question: "If the menu button does appear, what does it look like?",
            options: [
              "Hamburger button (three horizontal lines)",
              "Arrow button",
              "Plus button",
              "Circle button"
            ],
            correctAnswer: "Hamburger button (three horizontal lines)"
          },
          {
            question: "What standard html element(s) make up the menu?",
            options: [
              "<ul class=\"navbar-nav mx-3\"><li class=\"nav-item\">",
              "<div class=\"navbar-nav mx-3\"><span class=\"nav-item\">",
              "<nav class=\"navbar-nav mx-3\"><a class=\"nav-item\">",
              "<section class=\"navbar-nav mx-3\"><p class=\"nav-item\">"
            ],
            correctAnswer: "<ul class=\"navbar-nav mx-3\"><li class=\"nav-item\">"
          },
          {
            question: "What does the attribute data-bs-toggle=\"collapse\" on the menu button allow for?",
            options: [
              "Just means when you click the button the \"target\" html element will expand or collapse",
              "Just means when you click the button the \"target\" html element will change color",
              "Just means when you click the button the \"target\" html element will move",
              "Just means when you click the button the \"target\" html element will disappear"
            ],
            correctAnswer: "Just means when you click the button the \"target\" html element will expand or collapse"
          },
          {
            question: "How did we combine our lookup process and the modal example in lab 7?",
            options: [
              "You take your student card and stuff it in the modal-body, Or you can take your student card header, body, footer and put it in the modal header, body, footer",
              "You take your student card and stuff it in the modal-footer, Or you can take your student card header, body, footer and put it in the modal header, body, footer",
              "You take your student card and stuff it in the modal-header, Or you can take your student card header, body, footer and put it in the modal header, body, footer",
              "You take your student card and stuff it in the modal-content, Or you can take your student card header, body, footer and put it in the modal header, body, footer"
            ],
            correctAnswer: "You take your student card and stuff it in the modal-body, Or you can take your student card header, body, footer and put it in the modal header, body, footer"
          },
          {
            question: "What does this line of html do? <link rel=\"icon\" href=\"data:;base64,iVBORw0KGgo=\">",
            options: [
              "Controls the \"favicon\" at the top of the page in the tab",
              "Sets the page title",
              "Links to an external stylesheet",
              "Embeds a base64 image in the page"
            ],
            correctAnswer: "Controls the \"favicon\" at the top of the page in the tab"
          }
        ]
      },
      {
        source: 'Lab 8',
        questions: [
          {
            question: "According to the StackOverflow article what type of architecture is utilized with pessimistic locking?",
            options: [
              "Pessimistic locking: To use pessimistic locking you need either a direct connection to the database (as would typically be the case in a two tier client server application)",
              "Optimistic locking: To use optimistic locking you need either a direct connection to the database (as would typically be the case in a two tier client server application)",
              "Pessimistic locking: To use pessimistic locking you need either a direct connection to the database (as would typically be the case in a three tier client server application)",
              "Optimistic locking: To use optimistic locking you need either a direct connection to the database (as would typically be the case in a three tier client server application)"
            ],
            correctAnswer: "Pessimistic locking: To use pessimistic locking you need either a direct connection to the database (as would typically be the case in a two tier client server application)"
          },
          {
            question: "What type of architecture is used with Optimistic Locking?",
            options: [
              "This strategy is most applicable to high-volume systems and three-tier architectures where you do not necessarily maintain a connection to the database for your session.",
              "This strategy is most applicable to low-volume systems and two-tier architectures where you do not necessarily maintain a connection to the database for your session.",
              "This strategy is most applicable to high-volume systems and two-tier architectures where you do not necessarily maintain a connection to the database for your session.",
              "This strategy is most applicable to low-volume systems and three-tier architectures where you do not necessarily maintain a connection to the database for your session."
            ],
            correctAnswer: "This strategy is most applicable to high-volume systems and three-tier architectures where you do not necessarily maintain a connection to the database for your session."
          },
          {
            question: "What do you need to be careful of when using a pessimistic strategy?",
            options: [
              "Deadlocks",
              "Data loss",
              "Performance issues",
              "Security vulnerabilities"
            ],
            correctAnswer: "Deadlocks"
          },
          {
            question: "What does optimistic strategy depend on in the individual row/record of the database?",
            options: [
              "RowVersion column",
              "Primary key",
              "Foreign key",
              "Index"
            ],
            correctAnswer: "RowVersion column"
          },
          {
            question: "What strategy are we employing in this course?",
            options: [
              "Optimistic",
              "Pessimistic",
              "Hybrid",
              "None"
            ],
            correctAnswer: "Optimistic"
          },
          {
            question: "Which field in each domain class are we utilizing to setup the optimistic strategy?",
            options: [
              "Timer",
              "Id",
              "Name",
              "DateCreated"
            ],
            correctAnswer: "Timer"
          },
          {
            question: "What data type does the Timer property have in the database?",
            options: [
              "RowVersion, could use timestamp, or possibly the entire rows data",
              ".NET DateTime",
              ".NET TimeSpan",
              ".NET DateTimeOffset"
            ],
            correctAnswer: "RowVersion, could use timestamp, or possibly the entire rows data"
          },
          {
            question: "What data type does the Timer property have in the domain class?",
            options: [
              ".NET byte[]",
              ".NET DateTime",
              ".NET TimeSpan",
              ".NET DateTimeOffset"
            ],
            correctAnswer: ".NET byte[]"
          },
          {
            question: "What exception is thrown when we attempt to update the database with stale data?",
            options: [
              ".NET DbUpdateConcurrencyException",
              ".NET InvalidOperationException",
              ".NET ArgumentNullException",
              ".NET SqlException"
            ],
            correctAnswer: ".NET DbUpdateConcurrencyException"
          },
          {
            question: "What C# keyword do we use to define an enumerator?",
            options: [
              ".NET enum",
              ".NET class",
              ".NET struct",
              ".NET interface"
            ],
            correctAnswer: ".NET enum"
          },
          {
            question: "How many enumerated values did we add to the UpdateStatus enumerator and what were they?",
            options: [
              "3: -1 for failed, -2 for data stale, 1 for success",
              "2: -1 for failed, 1 for success",
              "4: -1 for failed, -2 for data stale, 0 for pending, 1 for success",
              "5: -1 for failed, -2 for data stale, 0 for pending, 1 for success, 2 for completed"
            ],
            correctAnswer: "3: -1 for failed, -2 for data stale, 1 for success"
          },
          {
            question: "What is the new SchoolEntity.cs file known as? Why is it known as this?",
            options: [
              "Base Class",
              "Derived Class",
              "Abstract Class",
              "Interface"
            ],
            correctAnswer: "Base Class"
          },
          {
            question: "What property(s) was/were removed from all the entity classes and moved to the SchoolEntity class?",
            options: [
              "Id, Timer",
              "Name, Description",
              "DateCreated, DateModified",
              "Status, Type"
            ],
            correctAnswer: "Id, Timer"
          },
          {
            question: "What 3 steps are there to set up a repository?",
            options: [
              "Define an interface for the repository, which declares the database operations. Create a class which implements the above interface and provides the implementation for the interface methods. Access the repository from the business layer (in our case the DAO) through the interface.",
              "Create a class which implements an interface. Define the database operations. Access the repository from the business layer.",
              "Define the database operations. Create a class which implements the database operations. Access the repository from the business layer.",
              "Create a class which implements the database operations. Define an interface for the repository. Access the repository from the business layer."
            ],
            correctAnswer: "Define an interface for the repository, which declares the database operations. Create a class which implements the above interface and provides the implementation for the interface methods. Access the repository from the business layer (in our case the DAO) through the interface."
          },
          {
            question: "If I have code such as: List<T> GetAll(); What is T known as?",
            options: [
              "Generic Type",
              "Template",
              "Type Parameter",
              "Type Argument"
            ],
            correctAnswer: "Generic Type"
          },
          {
            question: "What 2 characteristics do generic parameters have?",
            options: [
              "T must be a class (reference type) and must have a public parameter-less default constructor",
              "T must be a value type and must have a public parameter-less default constructor",
              "T must be a class (reference type) and must have a public parameter-less constructor",
              "T must be a value type and must have a public parameter-less constructor"
            ],
            correctAnswer: "T must be a class (reference type) and must have a public parameter-less default constructor"
          },
          {
            question: "What is the only base type allowed in the SomeSchoolRepository?",
            options: [
              "SchoolEntity",
              "BaseEntity",
              "Entity",
              "RepositoryEntity"
            ],
            correctAnswer: "SchoolEntity"
          },
          {
            question: "What return type does the GetSome method have?",
            options: [
              "Task<List<T>>",
              "List<T>",
              "IEnumerable<T>",
              "IQueryable<T>"
            ],
            correctAnswer: "Task<List<T>>"
          },
          {
            question: "What business layer object instantiates the repository?",
            options: [
              "DAO, Manager",
              "Service, Controller",
              "Repository, Context",
              "Entity, Model"
            ],
            correctAnswer: "DAO, Manager"
          },
          {
            question: "T/F - the DAO class still communicates with the context class after implementing a Repository pattern?",
            options: [
              "False",
              "True"
            ],
            correctAnswer: "False"
          },
          {
            question: "Describe 2 benefits of using generics",
            options: [
              "Scalable, code reuse, performance",
              "Easy to use, flexible",
              "Secure, maintainable",
              "Fast, reliable"
            ],
            correctAnswer: "Scalable, code reuse, performance"
          }
        ]
      },
      {
        source: 'Lab 9',
        questions: [
          {
            question: "T/F – The StudentViewModel.Update method will return an enumerated value to its caller?",
            options: [
              "True",
              "False"
            ],
            correctAnswer: "False"
          },
          {
            question: "How many StudentViewModel instances were created in the new concurrency test?",
            options: [
              "1: one for each \"client\"",
              "2: one for each \"client\"",
              "3: one for each \"client\"",
              "4: one for each \"client\""
            ],
            correctAnswer: "2: one for each \"client\""
          },
          {
            question: "How many buttons were in the Lab9a.html file? What was the purpose of each button?",
            options: [
              "3, get button, close modal, and update button",
              "2, get button, update button",
              "4, get button, close modal, update button, delete button",
              "5, get button, close modal, update button, delete button, add button"
            ],
            correctAnswer: "3, get button, close modal, and update button"
          },
          {
            question: "If I search on a student who does not exist, where will the not found message appear?",
            options: [
              "Modal (is this good????)",
              "Console",
              "Alert box",
              "Notification area"
            ],
            correctAnswer: "Modal (is this good????)"
          },
          {
            question: "What jQuery syntax did we use to invoke the modal, when the button was clicked?",
            options: [
              "$(\"#id\").modal(\"toggle\");",
              "$(\"#id\").modal(\"show\");",
              "$(\"#id\").modal(\"hide\");",
              "$(\"#id\").modal(\"open\");"
            ],
            correctAnswer: "$(\"#id\").modal(\"toggle\");"
          },
          {
            question: "After retrieving the student data from the server, what properties did we place in session storage? Why did we pick those?",
            options: [
              "The entire student object, then you pull it back out and overwrite the values in the update",
              "Only the student ID and name",
              "Only the student grades",
              "Only the student address"
            ],
            correctAnswer: "The entire student object, then you pull it back out and overwrite the values in the update"
          },
          {
            question: "What syntax do you use to place an item in sessionStorage?",
            options: [
              "setItem(key,value)",
              "putItem(key,value)",
              "addItem(key,value)",
              "storeItem(key,value)"
            ],
            correctAnswer: "setItem(key,value)"
          },
          {
            question: "What syntax do you use to retrieve an item from sessionStorage?",
            options: [
              "getItem(key)",
              "fetchItem(key)",
              "retrieveItem(key)",
              "loadItem(key)"
            ],
            correctAnswer: "getItem(key)"
          },
          {
            question: "What HTTP verb did the fetch api utilize to send the changed student information back to the server?",
            options: [
              "Update - PUT New Data - POST",
              "Update - POST New Data - PUT",
              "Update - PATCH New Data - POST",
              "Update - DELETE New Data - PUT"
            ],
            correctAnswer: "Update - PUT New Data - POST"
          },
          {
            question: "What was the name of the StudentController method on the server that received the updated student information?",
            options: [
              "Put (Doesn't matter what the name of the method is)",
              "Post",
              "Update",
              "Save"
            ],
            correctAnswer: "Put (Doesn't matter what the name of the method is)"
          },
          {
            question: "What did we do to the student object prior to sending it to the server?",
            options: [
              "json.stringify",
              "xml.serialize",
              "binary.encode",
              "base64.encode"
            ],
            correctAnswer: "json.stringify"
          },
          {
            question: "What does server send back because of the update operation?",
            options: [
              "OkObjectResult (has a string message inside the body)",
              "CreatedResult",
              "AcceptedResult",
              "NoContentResult"
            ],
            correctAnswer: "OkObjectResult (has a string message inside the body)"
          }
        ]
      },
      {
        source: 'Lab 10',
        questions: [
          {
            question: "What did we replace the student lookup page with, in this class?",
            options: [
              "A list",
              "A table",
              "A form",
              "A modal"
            ],
            correctAnswer: "A list"
          },
          {
            question: "What did the list consist of?",
            options: [
              "Buttons (each is a list-group-item)",
              "Links",
              "Images",
              "Text"
            ],
            correctAnswer: "Buttons (each is a list-group-item)"
          },
          {
            question: "What html element was the list contained in?",
            options: [
              "div (list-group)",
              "ul (unordered list)",
              "ol (ordered list)",
              "section"
            ],
            correctAnswer: "div (list-group)"
          },
          {
            question: "Where was the original update message posted, and where did we move it to for this lab?",
            options: [
              "The status label used to be in the modal. We moved it to the top of the list in the dynamic html",
              "The status label used to be in the header. We moved it to the footer",
              "The status label used to be in the sidebar. We moved it to the main content area",
              "The status label used to be in the footer. We moved it to the header"
            ],
            correctAnswer: "The status label used to be in the modal. We moved it to the top of the list in the dynamic html"
          },
          {
            question: "What jQuery syntax did we use to invoke the modal when the list was clicked?",
            options: [
              "$(\"#theModal\").modal(\"toggle\");",
              "$(\"#theModal\").modal(\"show\");",
              "$(\"#theModal\").modal(\"hide\");",
              "$(\"#theModal\").modal(\"open\");"
            ],
            correctAnswer: "$(\"#theModal\").modal(\"toggle\");"
          },
          {
            question: "How did we determine what student was selected by the end user?",
            options: [
              "As assign the id of the button to the id of the student",
              "By checking the name attribute of the button",
              "By checking the value attribute of the button",
              "By checking the data-id attribute of the button"
            ],
            correctAnswer: "As assign the id of the button to the id of the student"
          },
          {
            question: "What syntax do you use to place an item in sessionStorage?",
            options: [
              "sessionStorage.setItem(key, value)",
              "sessionStorage.putItem(key, value)",
              "sessionStorage.addItem(key, value)",
              "sessionStorage.storeItem(key, value)"
            ],
            correctAnswer: "sessionStorage.setItem(key, value)"
          },
          {
            question: "What syntax do you use to retrieve an item from sessionStorage?",
            options: [
              "sessionStorage.getItem(key)",
              "sessionStorage.fetchItem(key)",
              "sessionStorage.retrieveItem(key)",
              "sessionStorage.loadItem(key)"
            ],
            correctAnswer: "sessionStorage.getItem(key)"
          },
          {
            question: "What did we do to the JSON array returned from the controller before placing it in sessionStorage?",
            options: [
              "We stringify it using JSON.stringify()",
              "We parse it using JSON.parse()",
              "We encode it using base64.encode()",
              "We compress it using gzip"
            ],
            correctAnswer: "We stringify it using JSON.stringify()"
          },
          {
            question: "Why did we put the JSON array in sessionStorage?",
            options: [
              "Because we need it for the setupForUpdate",
              "Because we need it for validation",
              "Because we need it for authentication",
              "Because we need it for logging"
            ],
            correctAnswer: "Because we need it for the setupForUpdate"
          },
          {
            question: "Before searching for the selected user, what did we do with the JSON array after retrieving it from sessionStorage?",
            options: [
              "We dynamically build the html for the list",
              "We dynamically build the html for a table",
              "We dynamically build the html for a form",
              "We dynamically build the html for a modal"
            ],
            correctAnswer: "We dynamically build the html for the list"
          },
          {
            question: "What JavaScript array method was used to iterate through the JSON array?",
            options: [
              ".forEach(",
              ".map(",
              ".filter(",
              ".reduce("
            ],
            correctAnswer: ".forEach("
          },
          {
            question: "Describe how to implement custom styling 2 ways into the case study project.",
            options: [
              "inline stylings or adding a .css file and adding those classes to your work",
              "using JavaScript or adding a .css file and adding those classes to your work",
              "using HTML attributes or adding a .css file and adding those classes to your work",
              "using external libraries or adding a .css file and adding those classes to your work"
            ],
            correctAnswer: "inline stylings or adding a .css file and adding those classes to your work"
          }
        ]
      },
      {
        source: 'Lab 11',
        questions: [
          {
            question: "Explain this line of code? let data = JSON.parse(sessionStorage.getItem('allstudents'))",
            options: [
              "Pulling all the student data out of session storage",
              "Storing all the student data into session storage",
              "Deleting all the student data from session storage",
              "Updating all the student data in session storage"
            ],
            correctAnswer: "Pulling all the student data out of session storage"
          },
          {
            question: "How was the 'id' variable utilized to determine if the user wanted to do add or an update?",
            options: [
              "If it's 0 we do an add and if it's > 0 we're doing an update",
              "If it's 1 we do an add and if it's 0 we're doing an update",
              "If it's -1 we do an add and if it's > 0 we're doing an update",
              "If it's > 0 we do an add and if it's 0 we're doing an update"
            ],
            correctAnswer: "If it's 0 we do an add and if it's > 0 we're doing an update"
          },
          {
            question: "How did the user set the value of 'id' variable when doing an add?",
            options: [
              "We set it to -1 on the new object",
              "We set it to 0 on the new object",
              "We set it to 1 on the new object",
              "We set it to null on the new object"
            ],
            correctAnswer: "We set it to -1 on the new object"
          },
          {
            question: "What http method supports the add process?",
            options: [
              "POST for new data PUT for update",
              "GET for new data POST for update",
              "PUT for new data POST for update",
              "DELETE for new data PUT for update"
            ],
            correctAnswer: "POST for new data PUT for update"
          },
          {
            question: "What is sent to the server when issuing the method from the previous question?",
            options: [
              "A new javascript object we create that represents a StudentViewModel",
              "A JSON string representing a StudentViewModel",
              "An XML string representing a StudentViewModel",
              "A plain text string representing a StudentViewModel"
            ],
            correctAnswer: "A new javascript object we create that represents a StudentViewModel"
          },
          {
            question: "What is different from the object sent in question 5 and an object sent with a PUT in an update scenario?",
            options: [
              "The update object is coming from sessionStorage because it already exists The new object is created by us",
              "The update object is created by us The new object is coming from sessionStorage because it already exists",
              "The update object is coming from localStorage because it already exists The new object is created by us",
              "The update object is created by us The new object is coming from localStorage because it already exists"
            ],
            correctAnswer: "The update object is coming from sessionStorage because it already exists The new object is created by us"
          },
          {
            question: "How was a Division Id value selected when adding a Student?",
            options: [
              "Originally it was hard-coded Replace it with a dropdownlist",
              "Originally it was hard-coded Replace it with a textbox",
              "Originally it was hard-coded Replace it with a radio button",
              "Originally it was hard-coded Replace it with a checkbox"
            ],
            correctAnswer: "Originally it was hard-coded Replace it with a dropdownlist"
          },
          {
            question: "Once we've determined the user is doing an Add, what syntax did we use to change the caption of the actionbutton button?",
            options: [
              "$(\"#actionBtn\").val(\"Add\");",
              "$(\"#actionBtn\").text(\"Add\");",
              "$(\"#actionBtn\").html(\"Add\");",
              "$(\"#actionBtn\").attr(\"value\", \"Add\");"
            ],
            correctAnswer: "$(\"#actionBtn\").val(\"Add\");"
          },
          {
            question: "What does the controller return to the client after the add has completed?",
            options: [
              "A response object with the message of whether or not it succeeded inside",
              "A JSON string with the message of whether or not it succeeded inside",
              "An XML string with the message of whether or not it succeeded inside",
              "A plain text string with the message of whether or not it succeeded inside"
            ],
            correctAnswer: "A response object with the message of whether or not it succeeded inside"
          },
          {
            question: "Upon receiving the data from q9, what does the client do next?",
            options: [
              "Refresh the page so the list always contains the newest data (and sessionStorage)",
              "Display a success message",
              "Display an error message",
              "Log the response to the console"
            ],
            correctAnswer: "Refresh the page so the list always contains the newest data (and sessionStorage)"
          },
          {
            question: "If the add was successful, what 2 updates should a user see on the page?",
            options: [
              "You should see the successful message And the new user in the list",
              "You should see an error message And no changes in the list",
              "You should see a success message And no changes in the list",
              "You should see no message And no changes in the list"
            ],
            correctAnswer: "You should see the successful message And the new user in the list"
          },
          {
            question: "What is the return type for the StudentViewModel.Add method?",
            options: [
              "null or Task",
              "void or Task",
              "string or Task",
              "int or Task"
            ],
            correctAnswer: "null or Task"
          }
        ]
      },
      {
        source: 'Lab 12',
        questions: [
          {
            question: "What did we need to include in the html to enable jQuery validation?",
            options: [
              "<script src=\"lib/js/jquery.validate.min.js\"></script>",
              "<script src=\"lib/js/jquery.min.js\"></script>",
              "<script src=\"lib/js/validation.min.js\"></script>",
              "<script src=\"lib/js/jquery.validation.min.js\"></script>"
            ],
            correctAnswer: "<script src=\"lib/js/jquery.validate.min.js\"></script>"
          },
          {
            question: "What is the order of .js files if you want to do validation in the case study?",
            options: [
              "Always start with jQuery, then add your own or anything that relies on it",
              "Always start with your own, then add jQuery or anything that relies on it",
              "Always start with validation, then add jQuery or anything that relies on it",
              "Always start with jQuery, then add validation or anything that relies on it"
            ],
            correctAnswer: "Always start with jQuery, then add your own or anything that relies on it"
          },
          {
            question: "What 2 attributes did we need to ensure were present on each field in the html for that field to be validated?",
            options: [
              "name and id",
              "class and id",
              "name and class",
              "type and id"
            ],
            correctAnswer: "name and id"
          },
          {
            question: "What other html construct needs to be present for jQuery validation to work?",
            options: [
              "<form id=\"EmployeeForm\">",
              "<div id=\"EmployeeForm\">",
              "<input id=\"EmployeeForm\">",
              "<button id=\"EmployeeForm\">"
            ],
            correctAnswer: "<form id=\"EmployeeForm\">"
          },
          {
            question: "What are the 3 properties in the validation JSON that we coded to enable validation?",
            options: [
              "Rules, errorElement, Messages",
              "Rules, errorClass, Messages",
              "Rules, errorContainer, Messages",
              "Rules, errorLabel, Messages"
            ],
            correctAnswer: "Rules, errorElement, Messages"
          },
          {
            question: "T/F – we can place multiple validators on the same field",
            options: [
              "True",
              "False"
            ],
            correctAnswer: "True"
          },
          {
            question: "What data do we set the standard html validation rules (e.g. required) to if we want jQuery to include those rules in the validation process?",
            options: [
              "true",
              "false",
              "null",
              "undefined"
            ],
            correctAnswer: "true"
          },
          {
            question: "What element name gets created for us to supply custom styling",
            options: [
              "label/div",
              "span/div",
              "p/div",
              "h1/div"
            ],
            correctAnswer: "label/div"
          },
          {
            question: "What method do you invoke if you want to include custom rules in jQuery validation?",
            options: [
              "$.validator.addMethod(\"validTitle\", (value) => {",
              "$.validator.addRule(\"validTitle\", (value) => {",
              "$.validator.addValidation(\"validTitle\", (value) => {",
              "$.validator.addCustom(\"validTitle\", (value) => {"
            ],
            correctAnswer: "$.validator.addMethod(\"validTitle\", (value) => {"
          },
          {
            question: "What method gets invoked to initiate the validation process?",
            options: [
              "$(\"#EmployeeForm\").valid()",
              "$(\"#EmployeeForm\").validate()",
              "$(\"#EmployeeForm\").check()",
              "$(\"#EmployeeForm\").verify()"
            ],
            correctAnswer: "$(\"#EmployeeForm\").valid()"
          },
          {
            question: "Name 3 standard validation rules.",
            options: [
              "maxlength, required, email",
              "minlength, required, url",
              "maxlength, optional, email",
              "minlength, optional, url"
            ],
            correctAnswer: "maxlength, required, email"
          }
        ]
      },
      {
        source: 'Lab 13',
        questions: [
          {
            question: "What type of html control will house the search bar?",
            options: [
              "Form - Doesn't matter, it's just a text input",
              "Div",
              "Span",
              "Section"
            ],
            correctAnswer: "Form - Doesn't matter, it's just a text input"
          },
          {
            question: "What event do we handle on the control from Q1?",
            options: [
              "keyup",
              "click",
              "change",
              "focus"
            ],
            correctAnswer: "keyup"
          },
          {
            question: "Once we retrieve the data from session storage what do we do with it in the function that is called from the handling code from Q2?",
            options: [
              "We pass it to the buildStudentList function",
              "We store it back in session storage",
              "We log it to the console",
              "We display it in an alert"
            ],
            correctAnswer: "We pass it to the buildStudentList function"
          },
          {
            question: "What does the string match function expect as a parameter?",
            options: [
              "a RegExp",
              "a string",
              "a number",
              "an object"
            ],
            correctAnswer: "a RegExp"
          },
          {
            question: "What does the ‘i’ represent in this partial line of code: RegExp($(\"#srch\").val(), 'i')",
            options: [
              "case sensitivity",
              "global search",
              "multiline search",
              "unicode"
            ],
            correctAnswer: "case sensitivity"
          },
          {
            question: "What does the filteredData variable actually contain?",
            options: [
              "the filtered student data",
              "the original student data",
              "the sorted student data",
              "the paginated student data"
            ],
            correctAnswer: "the filtered student data"
          },
          {
            question: "T/F – the filteredData variable gets written to sessionStorage?",
            options: [
              "TRUE",
              "FALSE"
            ],
            correctAnswer: "FALSE"
          },
          {
            question: "How many arguments does the buildStudentList function take after implementing the search bar?",
            options: [
              "2 if based on PDF and you're setting sessionStorage in that function 1 if you're setting the sessionStorage elsewhere",
              "1 if based on PDF and you're setting sessionStorage in that function 2 if you're setting the sessionStorage elsewhere",
              "3 if based on PDF and you're setting sessionStorage in that function 2 if you're setting the sessionStorage elsewhere",
              "4 if based on PDF and you're setting sessionStorage in that function 3 if you're setting the sessionStorage elsewhere"
            ],
            correctAnswer: "2 if based on PDF and you're setting sessionStorage in that function 1 if you're setting the sessionStorage elsewhere"
          },
          {
            question: "What’s different about the second argument?",
            options: [
              "default parameter = True",
              "default parameter = False",
              "default parameter = Null",
              "default parameter = Undefined"
            ],
            correctAnswer: "default parameter = True"
          },
          {
            question: "What is the purpose of each argument in buildStudentList?",
            options: [
              "One is the data (can't build the list without it, the other is the boolean to determine if we store that data in sessionStorage)",
              "One is the data (can't build the list without it, the other is the boolean to determine if we store that data in localStorage)",
              "One is the data (can't build the list without it, the other is the boolean to determine if we store that data in a variable)",
              "One is the data (can't build the list without it, the other is the boolean to determine if we store that data in an array)"
            ],
            correctAnswer: "One is the data (can't build the list without it, the other is the boolean to determine if we store that data in sessionStorage)"
          },
          {
            question: "Which function calls buildStudentList with a false Boolean?",
            options: [
              "That's the keyup event for the search field",
              "That's the click event for a button",
              "That's the change event for a dropdown",
              "That's the focus event for an input field"
            ],
            correctAnswer: "That's the keyup event for the search field"
          },
          {
            question: "Which function calls buildStudentList without a Boolean?",
            options: [
              "GetAll()",
              "GetById()",
              "GetByName()",
              "GetByEmail()"
            ],
            correctAnswer: "GetAll()"
          }
        ]
      },
      {
        source: 'Lab 14',
        questions: [
          {
            question: "For every 3 bytes in binary how many characters will I see in my encoded64 string?",
            options: [
              "4",
              "3",
              "2",
              "1"
            ],
            correctAnswer: "4"
          },
          {
            question: "What 2 special characters will I typically see in encoded strings?",
            options: [
              "+ / AND =",
              "* & AND %",
              "# @ AND $",
              "! ^ AND ~"
            ],
            correctAnswer: "+ / AND ="
          },
          {
            question: "What format does C# store binary data in?",
            options: [
              "byte[]",
              "string",
              "int",
              "float"
            ],
            correctAnswer: "byte[]"
          },
          {
            question: "What 2 formats does SQL Server store binary data in?",
            options: [
              "binary, varbinary(max)",
              "binary, varchar(max)",
              "varbinary, varchar(max)",
              "varbinary, text"
            ],
            correctAnswer: "binary, varbinary(max)"
          },
          {
            question: "Which format are we using?",
            options: [
              "varbinary(max)",
              "binary",
              "varchar(max)",
              "text"
            ],
            correctAnswer: "varbinary(max)"
          },
          {
            question: "What column in the database will store binary data for our application(s)",
            options: [
              "Picture/StaffPicture, and Timer",
              "Name, and Address",
              "Email, and PhoneNumber",
              "DateOfBirth, and Gender"
            ],
            correctAnswer: "Picture/StaffPicture, and Timer"
          },
          {
            question: "How did we get the binary data into the database?",
            options: [
              "We use the tests from the PDF to store the data for the original 10 employees/students",
              "We manually entered the data into the database",
              "We used a script to insert the data into the database",
              "We imported the data from a CSV file"
            ],
            correctAnswer: "We use the tests from the PDF to store the data for the original 10 employees/students"
          },
          {
            question: "What format will the student/employee pictures be in SessionStorage on the client?",
            options: [
              "Base64 string",
              "Binary string",
              "Hexadecimal string",
              "ASCII string"
            ],
            correctAnswer: "Base64 string"
          },
          {
            question: "What syntax does the <img tag’s src attribute have when storing student/employee pictures?",
            options: [
              "src=\"data:img/png;base64,${encodedString}\"",
              "src=\"data:image/jpeg;base64,${encodedString}\"",
              "src=\"data:image/gif;base64,${encodedString}\"",
              "src=\"data:image/svg+xml;base64,${encodedString}\""
            ],
            correctAnswer: "src=\"data:img/png;base64,${encodedString}\""
          },
          {
            question: "What JavaScript object did we use to process the student graphic files?",
            options: [
              "const reader = new FileReader();",
              "const reader = new ImageReader();",
              "const reader = new BinaryReader();",
              "const reader = new DataReader();"
            ],
            correctAnswer: "const reader = new FileReader();"
          },
          {
            question: "What method on the object from Q10 did we execute to read the graphic files?",
            options: [
              ".readAsBinaryString",
              ".readAsDataURL",
              ".readAsArrayBuffer",
              ".readAsText"
            ],
            correctAnswer: ".readAsBinaryString"
          },
          {
            question: "What event is fired when the file is read?",
            options: [
              ".onload",
              ".onread",
              ".oncomplete",
              ".onfinish"
            ],
            correctAnswer: ".onload"
          },
          {
            question: "Explain this code and output written in the browser’s console:",
            options: [
              "\"converting \\\"evan\\\" to a base 64 string\"",
              "\"encoding \\\"evan\\\" to a base 64 string\"",
              "\"decoding \\\"evan\\\" from a base 64 string\"",
              "\"converting \\\"evan\\\" from a base 64 string\""
            ],
            correctAnswer: "\"converting \\\"evan\\\" to a base 64 string\""
          }
        ]
      },
      {
        source: 'Lab 15',
        questions: [
          {
            question: "What two new tables were added to the exercises project?",
            options: [
              "Courses, Grades",
              "Students, Courses",
              "Grades, Instructors",
              "Departments, Courses"
            ],
            correctAnswer: "Courses, Grades"
          },
          {
            question: "What new switch was added to the scaffolding command that allows the command to overwrite the existing context and domain classes?",
            options: [
              "-force",
              "-overwrite",
              "-replace",
              "-update"
            ],
            correctAnswer: "-force"
          },
          {
            question: "What change was made to the Context class after executing the new scaffolding?",
            options: [
              "Re-enable lazyloading: optionsBuilder.UseLazyLoadingProxies();",
              "Disable lazyloading: optionsBuilder.UseLazyLoadingProxies(false);",
              "Enable eager loading: optionsBuilder.UseEagerLoading();",
              "Disable eager loading: optionsBuilder.UseEagerLoading(false);"
            ],
            correctAnswer: "Re-enable lazyloading: optionsBuilder.UseLazyLoadingProxies();"
          },
          {
            question: "How many domain classes make up the exercises DAL now?",
            options: [
              "4",
              "2",
              "3",
              "5"
            ],
            correctAnswer: "4"
          },
          {
            question: "What change was made to all the domain classes?",
            options: [
              "Remove Id/Timer, add : SchoolEntity",
              "Add Id/Timer, remove : SchoolEntity",
              "Remove Id/Timer, add : BaseEntity",
              "Add Id/Timer, remove : BaseEntity"
            ],
            correctAnswer: "Remove Id/Timer, add : SchoolEntity"
          },
          {
            question: "How many new files were created in the exercises project for lab 15?",
            options: [
              "8 on Server side (not counting html/js)",
              "6 on Server side (not counting html/js)",
              "10 on Server side (not counting html/js)",
              "12 on Server side (not counting html/js)"
            ],
            correctAnswer: "8 on Server side (not counting html/js)"
          },
          {
            question: "What were they?",
            options: [
              "Two DAOs, two ViewModels, two Controllers, 2 Entities (Course, Grade)",
              "Two DAOs, one ViewModel, one Controller, 4 Entities (Course, Grade)",
              "One DAO, two ViewModels, two Controllers, 3 Entities (Course, Grade)",
              "Three DAOs, two ViewModels, one Controller, 2 Entities (Course, Grade)"
            ],
            correctAnswer: "Two DAOs, two ViewModels, two Controllers, 2 Entities (Course, Grade)"
          },
          {
            question: "What was missing from the studentgrades.html that was in the studentcrud.html page and why?",
            options: [
              "The Add button from the list is gone",
              "The Delete button from the list is gone",
              "The Update button from the list is gone",
              "The Search button from the list is gone"
            ],
            correctAnswer: "The Add button from the list is gone"
          },
          {
            question: "How many fields make up the student grade update modal?",
            options: [
              "2 editable fields (Comments, Grade)",
              "3 editable fields (Comments, Grade)",
              "4 editable fields (Comments, Grade)",
              "5 editable fields (Comments, Grade)"
            ],
            correctAnswer: "2 editable fields (Comments, Grade)"
          },
          {
            question: "What are they?",
            options: [
              "Textbox for Grade, Textbox for Comments",
              "Textbox for Name, Textbox for Comments",
              "Textbox for Grade, Textbox for Name",
              "Textbox for Comments, Textbox for Address"
            ],
            correctAnswer: "Textbox for Grade, Textbox for Comments"
          },
          {
            question: "What jQuery element method can we use to show an element that was previously hidden?",
            options: [
              ".show()",
              ".hide()",
              ".toggle()",
              ".fadeIn()"
            ],
            correctAnswer: ".show()"
          },
          {
            question: "What jQuery element method can we use to hide an element?",
            options: [
              ".hide()",
              ".show()",
              ".toggle()",
              ".fadeOut()"
            ],
            correctAnswer: ".hide()"
          },
          {
            question: "What event changes the visibility of the hidden mark and comment fields?",
            options: [
              "$(\"#ddlCourses\").change(async () => {",
              "$(\"#ddlCourses\").click(async () => {",
              "$(\"#ddlCourses\").focus(async () => {",
              "$(\"#ddlCourses\").blur(async () => {"
            ],
            correctAnswer: "$(\"#ddlCourses\").change(async () => {"
          },
          {
            question: "How did we return the list of courses from the CoursesDAO using the Grades repository?",
            options: [
              "You have to get the Grades for the student first. Iterate over each Grade, pull the Course from that grade, and store it in a List",
              "You have to get the Courses for the student first. Iterate over each Course, pull the Grade from that course, and store it in a List",
              "You have to get the Grades for the course first. Iterate over each Grade, pull the Student from that grade, and store it in a List",
              "You have to get the Courses for the grade first. Iterate over each Course, pull the Student from that course, and store it in a List"
            ],
            correctAnswer: "You have to get the Grades for the student first. Iterate over each Grade, pull the Course from that grade, and store it in a List"
          },
          {
            question: "What are the only 2 properties you need to expose in the CourseViewModel?",
            options: [
              "Course Name and the Id",
              "Course Name and the Description",
              "Course Name and the Credits",
              "Course Name and the Instructor"
            ],
            correctAnswer: "Course Name and the Id"
          },
          {
            question: "Why isn’t Timer one of the properties in the CourseViewModel?",
            options: [
              "We're not going to update any Courses",
              "We're not going to delete any Courses",
              "We're not going to add any Courses",
              "We're not going to view any Courses"
            ],
            correctAnswer: "We're not going to update any Courses"
          }
        ]
      }
    ];