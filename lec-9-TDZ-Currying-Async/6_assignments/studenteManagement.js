/*
**Student Management System**
This project is a simple **Student Management System** implemented in JavaScript using closures. The system allows you to:
- Retrieve students by section
- Calculate the average marks of a section
- Add a new student
- Update a student's marks

*/

function studentManager() {
    let students = []

    return {
        addStudent: function(name, marks, section){
            students.push({name:name,marks:marks,section:section})
            return students

        },
        getStudents: function(section) {
           return students.filter(students=>students.section === section)
        },
        getAllStudents: function() {
           return students
        },
        getAvg: function(section){
            const s = students.filter(student=>student.section === section)
            // console.log(s);
            if(s.length===0) return 0

            const sum = s.reduce((acc,student)=>acc+student.marks ,0)
            // console.log(sum);
            return sum/s.length

        },
        updateMarks: function(name,newMarks){
            const s = students.find(student=>student.name === name)
            if(name){
                s.marks = newMarks 
            }
            return s
        }
    }

}


//1. Initialing Student manager
const manager = studentManager();


//2. adding students
manager.addStudent("Aryan",91,"CSE")
manager.addStudent("Priya",88,"IT")
manager.addStudent("Rakesh",86,"ECE")
manager.addStudent("John",84,"IT")
manager.addStudent("Kunal",95,"CSE")
manager.addStudent("Harsh",92,"ECE")


//getAllStudents
// console.log(manager.getAllStudents());


//3. getStudents by section
// console.log(manager.getStudents('ECE'));


//4. Calculate average marks of a section
console.log(manager.getAvg("IT"));


//5. Update student marks
manager.updateMarks("Aryan",57)
console.log(manager.getAllStudents());