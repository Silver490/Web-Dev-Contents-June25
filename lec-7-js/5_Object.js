let obj = {
    a: 1, //key: value
    b: true,
    c: [1,2,3],
    '':"Emplty String",
    ' ':"I am a space key's value",
    'Hello World': "Learning String"
}

console.log(obj); // Outputs the object

//to access the vlaues of keys of the object
console.log(obj.c);
console.log(obj["c"]);
console.log(obj['']);
console.log(obj[' ']);
console.log(obj['Hello World']);



for (let i = 0; i < obj.c.length; i++) {
    console.log(obj.c[i]);;

}