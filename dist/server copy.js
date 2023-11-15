"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//app.get('/', (request, response) => {
//   response.send('Voce acessou o servidor.')
//})
app.use(express_1.default.json());
app.get('/', (request, response) => {
    response.json({
        name: 'Daniel Lima',
        age: 44
    });
});
/*
app.get('/users', (request, response) => {
    response.json([{name: 'Paulo', age: 22}, {name: 'Jose', age: 30}]);
})

app.get('/users/novo', (request, response) => {
    response.json([{name: 'Paulo', age: 22}, {name: 'Jose', age: 30}]);
})

app.post('/userdata/:id/:email', (request, response) => {
    console.log(request.body)
    console.log(request.params)
    console.log(request.query)
    console.log(request.headers)
    response.status(200).json({success: true})
})

//app.post('/userdata', (request, response) => {
//    console.log(request.body)
//    response.status(200).json({success: true})
//})

//app.get()
//app.post()
//app.patch()

*/
//Este é o endpoint
app.listen(4000);
