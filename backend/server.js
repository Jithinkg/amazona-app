import express from "express";
import mongoose from "mongoose";
// import data from "./data.js";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona"); 
// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreatedIndex: true,
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "product not found..." });
//   }
// });

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);

app.get('/',(req, res)=>{
    res.send('server is ready')
})
const port =process.env.PORT || 5000;
app.listen(port, () => {
  console.log("5000 server");
});
