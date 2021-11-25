const product = require('../model/Product');

module.exports = (app) => {

    app.get('/product-by-shop/:ownerID' , (req , res)=>{
        
        
       product.get(req.params.ownerID, result => {
            
            // console.log(result.data);
            
            res.send(result);
       })
    
    });

    app.post('/add-product' , (req , res)=>{
        
        console.log(req.body);
        const data = {
            ownerID: req.body.ownerID,
            amount: req.body.amount,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            type: req.body.type,
            imageURL: req.body.imageURL
        }
        product.add(data, result => res.send(result));
    })

    app.get('/product-by-id/:shopID/:id' , (req , res)=>{
        
        let shopID = req.params.shopID;
        let id = req.params.id;
        product.getByID(shopID, id, result => {

            res.send(result);
        })
    
    }),
    app.post('/update-product' , (req , res)=>{
        
        const data = {
            ownerID: req.body.ownerID,
            amount: req.body.amount,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            type: req.body.type,
            imageURL: req.body.imageURL
        }
        product.update(req.body, result => res.send(result));
    
    })

    app.get('/delete-product/:ownerID/:id' , (req , res)=>{
        
        const data = {
            id: req.params.id,
            ownerID: req.params.ownerID
        };

        console.log(data);

        product.deleteProduct(data, result => {

            console.log("!11");
            res.send(result);
        });
     
     });

}