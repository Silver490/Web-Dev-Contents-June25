# To Connect to a mongodb in nodejs
1. npm init -y
2. npm install mongodb express
3. Create a file app.js
4. inside app.js write the following code

```js   
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
let dbName = 'mydb'; // database name
let db; // database object


client.connect().then(() => {
    db = client.db(dbName);
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:` + PORT);
    });
});
```

5. this will connect to the mongodb server and create a database named mydb if it does not exist





# mongoose 
1. it is a layer on top of mongodb
2. it is an ODM (Object Data Modeling) library for MongoDB and Node.js
3. it provides a schema-based solution to model your application data
4. it includes built-in type casting, validation, query building, business logic hooks and more
5. steps to use mongoose
   1. npm install mongoose
   2. require mongoose in your app.js file
   3. connect to the database using mongoose.connect() method
   4. define a schema using mongoose.Schema() method
   5. create a model using mongoose.model() method
   6. use the model to perform CRUD operations



