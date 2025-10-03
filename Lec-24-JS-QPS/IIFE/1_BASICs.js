let student = (function x(name, newMarks){
    let name = name;
    let marks;
    function updateMarks(newMarks){
        marks = newMarks;
    }

    return{
        getName : function(){
            return name;
        },
        getMarsks : function(){
            return updateMarks;
        }
    }
})("Arjun", 90);
console.log(student.getName());
console.log(student.getMarsks());
student.updateMarks(95);
console.log(student.getMarsks());