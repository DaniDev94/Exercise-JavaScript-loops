const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let element in alien){
    console.log(`Key: ${element}`)
    console.log(`Value: ${alien[element]}`)
};