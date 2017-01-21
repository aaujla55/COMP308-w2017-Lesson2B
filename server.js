//my server will live here - yohuu

//crete a referecnce to the connect module and store a pointer
//to the connect module in a connect variable
let connect = require('connect');

//create an instance of the connect on server
let app = connect();

//represnts the port address
const port = 4000;

//listen for requires on a specific
app.listen(port);
console.log(`Server listening at http://localhost:${port}`);

//route for hello
app.use('/hello',(req,res,next) =>
{
    res.setHeader('Content-Type','text/plain');
    res.end("Hello World!!");
    next();
});

//routing - defalut for website '/'
app.use('/',(req,res,next) =>
{
    res.setHeader('Content-Type','text/plain');
    res.end("Welcome!!");
    next();
});