# Web Development Concepts
CSR - Client side rendering
in this case, the server sends a barebones HTML file with a link to a JavaScript file
the JavaScript file is responsible for rendering the entire UI of the application

SSR - Server side rendering
in this case, the server sends a fully rendered HTML file to the client
the server is responsible for rendering the entire UI of the application

-> Chatty vs Chunky Server
    Chatty - many small requests
    in the beginning, many requests to load the app 
    Chunky - few large requests
    in the beginning, one request to load the app

-> SPA vs MPA
    SPA - Single Page Application
    MPA - Multi Page Application

-> Write my own command to start the server
put this inside scripts in package.json
   "start": "nodemon app.js -e js,hbs,json"
now, to start the server, we can simply run the command
    npm start
-e - to specify the file extensions to watch for changes


# How to use hbs with express
HBS - Handlebars is a templating engine for Node.js
Steps to use hbs with express
1. npm install hbs
2. set the view engine to hbs
   app.set('view engine', 'hbs');
3. create a folder named views in the root directory
4. create a file named index.hbs inside the views folder
5. render the index.hbs file in the route
   app.get('/', (req, res) => {
       res.render('index');
   });
6. start the server and visit http://localhost:4444
7. To pass data to the hbs file, we can pass an object as the second argument to the render method
   app.get('/', (req, res) => {
       res.render('index', { title: 'My Todo App', todos: ['Task 1', 'Task 2', 'Task 3'] });
   });
8. In the hbs file, we can access the data using the {{}} syntax
  e.g  <h1>{{title}}</h1>
    <ul>
         {{#each todos}}
              <li>{{this}}</li>
         {{/each}}
    </ul>

