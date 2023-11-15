const express = require('express');
const app = express();

//app.get('/', (request, response) => {
//   response.send('Voce acessou o servidor.')
//})

app.use(express.json());

app.get('/', (request, response) => {
    response.json({
        name:'Daniel',
        age:44
    })
})

app.post('/userdata', (request, response) => {
    console.log(request.body)
    response.status(200).json({success: true})
})

//app.get()
//app.post()
//app.patch()


//Este é o endpoint
app.listen(4000);