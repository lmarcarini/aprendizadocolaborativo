Parse.serverURL = 'https://parseapi.back4app.com';
Parse.initialize('CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G', 'ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV', '9k1iodclsR5coYpKfKOhusJEKCaf3qZTqpEnri4h');

const Perguntas = Parse.Object.extend('Perguntas');
const query = new Parse.Query(Perguntas);
query.find().then((results) => {
  // You can use the "get" method to get the value of an attribute
  // Ex: response.get("<ATTRIBUTE_NAME>")
  if (typeof document !== 'undefined') document.write(` ${JSON.stringify(results)}`);
}, (error) => {
  if (typeof document !== 'undefined') document.write(`Error while fetching Perguntas: ${JSON.stringify(error)}`);
  console.error('Error while fetching Perguntas', error);
});