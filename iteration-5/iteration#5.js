const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'},
];


let newPlaces = [];
for(let places of placesToTravel){
   if((places.id !== 11) && (places.id !== 40)){
    newPlaces.push(places)
   };
};
console.log(newPlaces);




console.log('Prueba 2________________________________________________________');



let deletPlaces = [11, 40];
for (let i = 0; i < placesToTravel.length; i++) {
    let element = placesToTravel[i];
  if(deletPlaces.includes(element.id)){
    placesToTravel.splice(i,1);
  };
};
console.log(placesToTravel)





