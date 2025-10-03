const todos = require("./models/todos");



class Todos {
    // add a todo
    static async addTodo(data) {
        try {
            
            let data = await todos.create({
                task: data.task,
                description: data.description
            });
            return data;
           
           
        } catch (error) {
            throw new Error("Error Adding todos",+error);
        }
        
    }

    // get all todos
    static async getAllTodos() {
        try {
            let data = await todos.find();   
            return data; 
        } catch (error) {
            throw new Error("Error getting todos",+error);
        }
    }


    // get a single todo by id
    static async getTodoById(id){
        try {
            let todo = await todos.findById(id);
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