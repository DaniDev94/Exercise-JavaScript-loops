const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];


//Failure of execution
/* let test = [];
for (let toy of toys){
    if(!toy.name.includes('gato')){
        test.push(toy);
    }
}
console.log(test)

 */
//Failure of execution
/* for (let toy of toys){
    if(toy.name.includes('gato')){
      toys.pop() && toys.pop()
    }
}
console.log(toys)
 */



//Failure of execution
/* for (let toy of toys){
    if(toy.name.includes('gato')){
      let test = toys.indexOf(toy)
      toys.splice(test)
    };
};
console.log(toys)

 */

let index  = [];
for(let toy of toys){
    if(toy.name.includes('gato')){
        index.push(toys.indexOf(toy));
      };
};

for(let i = index.length-1 ; i >= 0; i--){
     toys.splice(index[i],1);
}
console.log(toys);