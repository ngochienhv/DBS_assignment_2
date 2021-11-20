const product = require('../model/Product');

module.exports = (app) => {

    app.get('/product' , (req , res)=>{
    
       product.get(result => {

            res.send(result.data);
       })
    
    });

    app.post('/add-product' , (req , res)=>{
        
        console.log(req.body);
        const shopOwnerID = req.body.shopOwnerID;
        const data = {
            amount: req.body.amount,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            type: req.body.type,
            imageURL: req.body.imageURL
        }
        
    })



}