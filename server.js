const express =  require('express');
const cors = require('cors');
const dotEnv =  require('dotenv');
const mongoose =  require('mongoose');



//initialize expresss
const app = express();

//config dotEnv
dotEnv.config();

//config cors
app.use(cors());

// allow express to handle with json file
app.use(express.json());


const port = process.env.PORT  || 5000;


mongoose.connect(process.env.MONGO_DB_CLOUD_URL).then((response)=>{
  console.log("mongoDB cloud connected succesfully..........");
}).catch((error)=>{
  console.error(error);
  process.exit(1);
});

//config router

// router configuration
app.use('/api/users' , require('./router/userRouter'));
 app.use('/api/products' , require('./router/productRouter'));
 app.use('/api/orders' , require('./router/orderRouter'));
app.use('/api/payments' , require('./router/paymentRouter'));


//simple request
app.get('/',(request , response)=>{
  response.send(`<h2>Welcome to Online Shopping Application Backend</h2>`);
});



app.listen(port , ()=>{
  console.log(`Express Server is started at PORT : ${port}`);
});
