const mongoose=require('mongoose');
const Product=require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')//,{useNewParser:true})
.then(()=>{
    console.log("connection open");
})
.catch((err)=>{
    console.log("error occured");
    console.log(err);
});

// const p=  new Product({
//     name:'Ruby Grapefruit',
//     price:1.99,
//     category:'Fruit'
// })
 
// p.save().then(p=> {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })

const seedProducts=[
    {
        name:'Fairy Eggplant',
        price: 1.00,
        category:'vegetable'  
    },
    {
        name:'organic goddess melon',
        price: 4.99,
        category:'fruit'  
    },
    {
        name:'organic mini seedless watermelon',
        price: 3.99,
        category:'fruit'  
    },
    {
        name:'organic celery',
        price: 1.50,
        category:'vegetable'  
    },
    {
        name:'chocolate whole milk',
        price: 2.69,
        category:'dairy'  
    }, 
    

]
Product.insertMany(seedProducts) 
.then(res =>{
    console.log(res)
})
.catch(err => {
console.log(err)
})