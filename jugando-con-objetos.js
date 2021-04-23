let users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//¿Cómo harías print/log de la edad de John?
console.log("Edad de John");
console.log(`La edad de John es ${users[1].age}`)

//¿Cómo harías print/log del nombre del primer objeto?
console.log("Nombre del primer objeto");
console.log(`El nombre del primer usuario es ${users[0].name}`);

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
console.log("Nombre y la edad de cada usuario");
for(let i=0; i<users.length; i++){
console.log(`El nombre del usurio ${i} es ${users[i].name} y su edad es ${users[i].age}`);
}

//¿Cómo harías para imprimir el nombre de los mayores de edad?
console.log("Nombre de los mayores de edad");
for(let i=0; i<users.length; i++){
        if(users[i].age>18){
        console.log(`${users[i].name} es mayor de 18 años, su edad es ${users[i].age}`);
        }
}