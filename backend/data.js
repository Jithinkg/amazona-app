import bcrypt from "bcryptjs";

const data={
    users:[
        {
            name:'Basir',
            email:'admin@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'John',
            email:'user@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false,
        },
    ],
    products:[
        {
           
            name:'Nike Slim Shirt',
            category:'shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:"nike",
            rating:4.6,
            numReviews:125,
            description:'high quality product'
        },
        {
            
            name:'Adidas fit Shirt',
            category:'shirts',
            image:'/images/p2.jpg',
            price:100,
            countInStock:20,
            brand:"Adidas",
            rating:3,
            numReviews:10,
            description:'high quality product'
        },
        {
         
            name:'Lacoste tee Shirt',
            category:'shirts',
            image:'/images/p1.jpg',
            price:170,
            countInStock:0,
            brand:"Lacoste",
            rating:4.5,
            numReviews:105,
            description:'high quality product'
        },
        {
          
            name:'puma Slim Shirt',
            category:'shirts',
            image:'/images/p2.jpg',
            price:160,
            countInStock:30,
            brand:"nike",
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
           
            name:'allen solly Slim Shirt',
            category:'shirts',
            image:'/images/p1.jpg',
            price:320,
            countInStock:0,
            brand:"nike",
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            
            name:'reebok Slim Shirt',
            category:'shirts',
            image:'/images/p2.jpg',
            price:170,
            countInStock:14,
            brand:"reebok",
            rating:4,
            numReviews:10,
            description:'high quality product'
        }
    ]
}
export default data;