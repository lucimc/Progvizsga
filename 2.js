// A primitív adatok érték szerint adódnak át míg az olyanok mint az objetek pedig referencia szerint.
// Példa referencia:
const x = 3;
const object = { name: 'Tati', gender: 'male', age: 25, characteristics: { eyes: 'blue', legs: 2, favoriteNumbers: [1, 5] } };
// Mik ezek?
console.log(typeof (object));
console.log(typeof (x));
// Ha el akarjuk érni a nevét az objectnek akkor nem tudunk rá magára hivatkozni csak így:
console.log(object.name);
// De egy "mezei" primitív adatra, legyen at boolean, szám, null, akármi, le tudunk így hivatkozni
console.log(x);
// Az objectet így lehivatkozva az egész objetet kapjuk vissza.
console.log(object);
