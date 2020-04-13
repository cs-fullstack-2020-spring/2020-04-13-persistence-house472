let express =require('express')
let app=express();



let port= 2112;
app.use(express.json());
// database setup
const mongoose = require('mongoose');
const mongoDB ='// mongodb+srv://student:C0d3Cr3w@cluster0-sq2pi.mongodb.net/cs_database?retryWrites=true&w=majority';

//connect to the database
console.log(`connecting to mongo at ${mongoDB}`); //sanity check
mongoose.connect(mongoDB, {useNewUrlParser: true,  useUnifiedTopology: true });
let db = mongoose.connection
//sanity check
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//mount the routes
// let api = require('./routes/api.js')
// app.use('/api', api)


app.listen(port, ()=>{
    console.log('listening on port 8000')
})




// let productArray=[{
    
//         "productID": 12345,
//         "productName": "New Product",
//         "price": 4567,
//         "quantity": 38
    
// }];
// app.get('/', (req, res)=>{
//     res.send("this is a get all request")
// })



// app.get('/:id', (req, res)=>{
//     res.send(`this is a get by id request ${req.params.id}`)
// })

// app.post('/', (req, res)=>{
//     res.send(productArray)
// })


//setup mount point