db.createCollection('querries')

db.students.insertOne({
    name: "John Doe",
    age: 21,
})

db.students.insertMany([
    {name: "Jane Smith", age: 22},
    {name: "Sam Brown", age: 20},
    {name: "Lucy White", age: 23},
    {name: "Mike Green", age: 21}
    
])

db.students.insertMany([
    {name: "Emily Clark", age: 19},
    {name: "Chris Evans", age: 24},
    {name: "Olivia Brown", age: 22},
    {name: "Liam Johnson", age: 20},
    {name: "Sophia Lee", age: 21},
    {name: "Noah Wilson", age: 23},
    {name: "Ava Martinez", age: 22},
    {name: "Mason Taylor", age: 20},
    {name: "Isabella Thomas", age: 21},
    {name: "Elijah Harris", age: 19},
    {name: "Mia Lewis", age: 24},
    {name: "Lucas Walker", age: 23},
    {name: "Charlotte Hall", age: 22},
    {name: "Benjamin Allen", age: 21},
    {name: "Amelia Young", age: 20},
    {name: "James King", age: 19},
    {name: "Harper Wright", age: 24},
    {name: "Henry Scott", age: 23},
    {name: "Evelyn Adams", age: 22},
    {name: "Alexander Baker", age: 21},
    {name: "Ella Gonzalez", age: 20},
    {name: "Daniel Nelson", age: 19},
    {name: "Scarlett Carter", age: 24},
    {name: "Matthew Mitchell", age: 23},
    {name: "Grace Perez", age: 22},
    {name: "Aiden Roberts", age: 21},
    {name: "Chloe Turner", age: 20},
])



// to find all students

db.students.find() // find() is an iterator and will show only the first 20 results

// to find one student
db.students.findOne() // findOne() will show first result

// to find students with specific criteria
db.students.find({age: 22}) // find students with age 22

// to find the students with age between 20 and 22