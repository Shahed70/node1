const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
require('dotenv').config;
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors())

app.get('/', (req, res)=>{
    res.send('connected')
})




const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.em8kw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("emaJohnStore").collection("products");
    console.log('connected');
  
});

app.listen(port, ()=> {
    console.log('app is listening at '+ port);
})