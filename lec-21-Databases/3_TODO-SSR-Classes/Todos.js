const fs = require("node:fs/promises");
const path = require("path");
const filePath = path.join(__dirname, 'database' ,"todos.json");
const { v4: uuidv4 } = require("uuid");


// read todos from fileīī
async function readTodo() {
    try {
        let data = await fs.readFile(filePath, { encoding: "utf-8" });
        
        //parsing the data to convert string to an object
        //string example: '[{"id":1,"task":"Coding"}]'
        //object example: [{id:1, task:"Coding"}]
        return JSON.parse(data) // returning the parsed data

    } catch (error) {
        console.log(error);
        throw new Error("Error reading todo",+error);

    }

}
// write todos to fileīīī
async function writeTodo(todos) {
    try {
        await fs.writeFile(filePath, JSON.stringify(todos) ,{ encoding: "utf-8" });
        console.log("Task Added successfully");
        return { message: "Task added successfully" };
    } catch (error) {
        console.log(error);
        throw new Error("Error writing todos",+error);
        
    }
}

// writeFile correct syntax:




class Todos {
    // add a todo
    static async addTodo(data) {
        try {
            console.log(data);
            let todos = await readTodo();
            const {task, description} = data;
            todos.push({
                id: uuidv4(),
                task,
                description
            })
            // write to file
            // why do we stringify? because we are writing to a file
            // and file can only store string data, data was in object format
            await writeTodo(todos)
        } catch (error) {
            throw new Error("Error Adding todos",+error);
        }
        
    }

    // get all todos
    static async getAllTodos() {
        try {
            let todos = await readTodo();    
            return todos; 
        } catch (error) {
            throw new Error("Error getting todos",+error);
        }
    }


    // get a single todo by id
    static async getTodoById(id){
        try {
            let todos = await readTodo();
            let todo = todos.filter(t=> t.id == id);
            return todo;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting todo by id",+error);
        }
    }


    // delete todo by id
    static async deleteTodo(id){
        let todos = await readTodo();
        todos = todos.filter(t=> t.id != id)
        await writeTodo(todos);
        console.log(`Deleted todo with id: ${id}`);
    }

}


module.exports = Todos;