// // Using the set operator
// var o = { set value(val) { this.anotherValue = val; } };
// o.value = 5;
// console.log(o.value); // undefined
// console.log(o.anotherValue); // 5

// // Using Object.defineProperty
// var o = {};
// Object.defineProperty(o, 'value', {
//   set: function(val) {
//     this.anotherValue = val;
//   }
// });
// o.value = 5;
// console.log(o.value); // undefined
// console.log(o.anotherValue); // 5
// var o = {};
// o.__defineGetter__('gimmeFive', function() { return 5; });
// console.log(o.gimmeFive); // 5


// // Formas compatibles con el estándar

// // Usando el operador get
// var o = { get gimmeFive() { return 5; } };
// console.log(o.gimmeFive); // 5

// // Usando Object.defineProperty
// var o = {};
// Object.defineProperty(o, 'gimmeFive', {
//   get: function() {
//     return 5;
//   }
// });
// console.log(o.gimmeFive); // 5

// const Constructores = new Object({
//     Constructores_obj : function(){
//         this.name;
//         this.age;
//         return this;
//     }
// });
// const setters = new Object({
//     setters_obj : function(){
//         this.name;
//         this.age;
//         return this;
//     }
// });
// const Constructores_obj = Constructores.Constructores_obj.bind({name:"Diana", age:25});
// const obj = new Object();









// const Constructores = new Object({
//     Constructores_obj : function(){
//         this.name;
//         this.age;
//         return this;
//     }
// });

// const Constructores_obj = Constructores.Constructores_obj.bind({name:"Diana", age:25});
// const obj = new Object();
// obj.__proto__.constructor = Constructores_obj();
// console.log(obj);









const Constructores = new Object({
    Constructores_obj : function(nombre, edad){
        this.name = nombre;
        this.age = edad;
    }
});
const objinit = new Constructores.Constructores_obj("Diana",38 );
const obj = Object.assign(objinit);
obj.__proto__.constructor("Patricia", 25);
console.log(obj);

// const Constructores_obj = new Constructores.Constructores_obj.bind({name:"Diana", age:35});
// const obj = new Object();
// obj.__proto__.constructor = Constructores_obj();
// console.log(obj.__proto__.constructor.nombre);







// const obj = new Object({
//     //name: "Diana",
//     saludar: function(){
//         return `${this.name} ${this.age}`;
//     }
// });

// console.log(Object.keys(obj));

// Object.seal(obj);
// obj.saludar.call({age: 25, name: obj.name});
// obj.name="uuuuu";
// //console.log(obj);
// //console.log(Object.hasOwnProperty("apellido"));

// obj.__proto__.constructor= function(){
//     this.name;
//     this.age;
// }
// console.log(obj.__proto__.constructor);

// const obj = {
//     name: "Diana",
//     age: 38,
//     saludar(){
//         return this.name;
//     }
// };

// console.log(obj);

// const obj = {
//     name: "Diana",
//     age: 38,
//     saludar: function(p1){
//         this.age = p1;
//         return `${this.name} ${this.age}`;
//     }
// };

// console.log(obj.saludar(3));


// const obj = {
//     name: "Diana",
//     age: 38,
//     saludar: function(){
//         //this.age = p1;
//         return `${this.name} ${this.age}`;
//     }
// };


// console.log(obj.saludar.call({age: 45, name: obj.name}));

// console.log(Object.getOwnPropertyNames(obj));

// const obj2 = new Object({
//     nombre : "",
   
// });

// Object.defineProperty(obj2,"Curso",{
//     value: "Laurita",
//     writable: false  
// });
// obj2.nombre = "aaaa";
// console.log(obj2.nombre);


// const obj = {
//     name: "Diana",
//     age: 38,
//     saludar: function(p1){
//         this.age = p1;
//         return `${this.name} ${this.age}`;
//     }
// };

// console.log(obj.saludar(40));

// const constructores = () =>{
//     this.name;
//     this.maquina;
// };

// constructores.call(data);
// let obj = new constructores();
// console.log(obj);

//const Humanos = Object.create(obj)

