import express from 'express';
import data from './data.js';

const app=express();

app.get('/api/products/:id',(req,res)=>{
    const product=data.products.find((x)=>x._id===req.params.id);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message:'product not foundaa'});
    }
})

app.get('/api/products',(req,res)=>{
    res.send(data.products);
})




app.listen(5000,()=>{
    console.log('5000 server')
})