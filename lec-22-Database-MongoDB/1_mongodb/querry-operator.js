//find all students with age between 20 and 22
db.students.find({
    age:{$in:[20,21,22]}
})

//find all students with age between 20 and 22
db.students.find({
    age:{$in:[20,21,22]}
}).toArray() // to convert the iterator to array

//3. add city delhi all students documents
db.students.updateMany(
    {},
    {
        $set: {city:'Delhi'}
    }
)

// add 10 more students
db.students.insertMany([
    {name: "Student A", age: 20, city: "Delhi"},
    {name: "Student B", age: 21, city: "Delhi"},
    {name: "Student C", age: 22, city: "Delhi"},
    {name: "Student D", age: 23, city: "Delhi"},
    {name: "Student E", age: 24, city: "Delhi"},
    {name: "Student F", age: 25, city: "Delhi"},
    {name: "Student G", age: 26, city: "Delhi"},
    {name: "Student H", age: 27, city: "Delhi"},
    {name: "Student I", age: 28, city: "Delhi"},
    {name: "Student J", age: 29, city: "Delhi"},
])


//4. update city to mumbai for students with age between 20 and 22
db.students.updateMany(
    {
        age:{$in:[20,22]}
    },
    {
        $set: {city:'Mumbai'}
    }
)

// find all student with city mumbai and sort them by age in descending order
db.students.find({city:'Mumbai'}).sort({age:-1}).toArray()

//