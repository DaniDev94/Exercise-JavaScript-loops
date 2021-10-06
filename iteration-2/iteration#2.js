const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },//false
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },//true
  { name: "Juan Miranda", T1: false, T2: true, T3: true },//true
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },//false
  { name: "Raquel Benito", T1: true, T2: true, T3: true },//true
];

for (let alumn of alumns) {
    console.log(Object.entries(alumn))
  let counter = 0;
  Object.entries(alumn).forEach(([key, value]) => {
    if (value === true) counter++;
    counter >= 2 ? alumn.isApproved = true : alumn.isApproved = false;
  });
};
console.log(alumns);
