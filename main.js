console.log('Pizza place');
var dataStore = new DataStore();
dataStore.add('valor1', 'esta es una cadena');
dataStore.add('valor2', 20);
console.log(dataStore);
console.log(dataStore.getAll());
console.log(dataStore.get('valor2'));

console.log(DataStore.prototype === dataStore.__proto__);
