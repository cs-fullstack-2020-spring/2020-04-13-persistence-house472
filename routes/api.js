// mongodb+srv://student:C0d3Cr3w@cluster0-sq2pi.mongodb.net/cs_database?retryWrites=true&w=majority

let express=require('express')
let router =express.Router
router.use(express.json());
//get reference to the data model
let ProductCollection = require('../models/ProductSchema');


let productArray=[{
    
            "productID": 1,
            "productName": "New Product",
            "price": 4567,
            "quantity": 38
        
    },

    
];
router.get('/', (req , res)=> {
    res.send(`${req.params.id}`)
})
router.get('/:product', (req , res)=> {
    res.send(`this is a get by id ${req.params.id}`)
})
//add new product
router.post('/', (req, res)=>{
    // 
    //create instance of the product
//LONG WAY//////////////////////////////////
       ProductCollection.create({
            "productID": req.body.productID,
            "productName": req.body.productName,
            "price": req.body.price,
            "quantity":req.body.quantity
    });
    res.send('product ceated')
})

module.exports = router;