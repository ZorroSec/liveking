const express = require('express')
const app = express()
app.use('/scripts', express.static('./scripts'))
app.use('/view', express.static('./view'))
app.use('/styles', express.static('./styles'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/view/index.html')
})

app.get('/calculator', (req, res)=>{
    res.sendFile(__dirname + '/view/calculator.html')
})

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/view/login.html')
})

app.listen(3000, (err, done)=>{
    if(!err){
        console.log({ message: 'success' })
    }
})
