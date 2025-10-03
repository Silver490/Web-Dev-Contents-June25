const fs = require("node:fs/promises");
const path = require("path");
const filePath = path.join(__dirname, "todos.json");


// read todos from file
async function readTodo() {
    try {
        let data = await fs.readFile(filePath, { encoding: "utf-8" });
        return JSON.parse(data);
    } catch (error) {
        throw new Error("Error reading todos");
    }
}
// write todos to file
async function writeTodo() {
    try {
        let data = await fs.writeFile("todos.json", { encoding: "utf-8" });
        return JSON.parse(data);
    } catch (error) {
        throw new Error("Error reading todos");
        
    }
}




class Todos {
    static async addTodo(data) {
        // await
    }
}
