//my server will live here - yohuu

//crete a referecnce to the connect module and store a pointer
//to the connect module in a connect variable
let connect = require('connect');

//create an instance of the connect on server
let app = connect();

//represnts the port address
//const port = 3000;

//listen for requires on a specific
app.listen(4000);
console.log("Server listening at http://localhost:3000");

//route for hello
