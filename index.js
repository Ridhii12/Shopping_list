const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const Product=require('./models/product')
const methodOverride=require('method-override')

// MongoDB connection - works for both local and cloud deployment
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/farmStand';

mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log("MongoDB connection successful");
})
.catch((err)=>{
    console.log("MongoDB connection error:");
    console.log(err);
}); 
 

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(express.urlencoded({}))
app.use(methodOverride('_method'));

const categories=['fruit','vegetable','dairy']


app.get('/products',async(req,res)=>{
    const {category}=req.query;
    if(category){
     const products=await Product.find({category})
     res.render('products/index',{products,category})
    }
    else{
         const products=await Product.find({})
         res.render('products/index',{products,category:'All'})  

    }
    //  const products=await Product.find()
    //  console.log(products)
    // res.render('products/index',{products})  
})


app.get('/products/new',(req,res)=>{
    res.render('products/new',{categories})
})


app.post('/products',async(req,res)=>{
   const newProduct= new Product(req.body)
   await newProduct.save();
  console.log(newProduct)
  res.redirect(`/products/${newProduct._id}`)
})


app.get('/products/:id',async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id)
    console.log(product)
    res.render('products/show',{product})

})


app.get('/products/:id/edit',async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id);
    res.render('products/edit',{product,categories})
})

app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { 
            runValidators: true, 
            new: true 
        });
        res.redirect(`/products/${updatedProduct._id}`);
    } catch (e) {
        console.log(e);
        res.redirect(`/products/${req.params.id}/edit`);
    }
});

app.delete('/products/:id',async(req,res)=>{
    const {id}=req.params;
    const deletedProduct=await Product.findByIdAndDelete(id)
    res.redirect('/products');
})

app.get('/', (req, res) => {
    res.redirect('/products');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`App is listening on port ${PORT}!`);

})
    
