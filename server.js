const express = require('express')
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const app = express();

//JWT token is set
const secretKey = 'mysecretKey';

app.use(express.json());

let contacts = [
     {
          id: "1",
          username:"Fabrice",
          email: "fabrice@gmail.com",
          password:""
     },
     {
          id: "2",
          username: "Elissa",
          email:"elissa@gmail.com",
          password:""
     },
     {
          id: "3",
          username: "Kalisa",
          email:"kalisa@gmail.com",
          password:""

     },
     {
          id:"4",
          username:"Divin",
          email: "divin@gmail.com",
          password:""
     },
     {
          id:"5",
          username:"Hugues",
          email:"hugues@gmail.com",
          password:""
     },
     {
          id:"6",
          username:"Tresor",
          email:"tresor@gmail.com",
          password:""

     }
]

app.post('/contact', (req, res) => {
     const { name, password } = req.body;
   
     if (name === 'admin' && password === 'password') {
       
       const token = jwt.sign({ name }, secretKey, { expiresIn: '1h' });
       res.json({
         success: true,
         message: 'Authentication successful!',
         token
       });
     } else {
       res.status(401).json({
         success: false,
         message: 'Incorrect name or password'
       });
     }
   });

   app.get('/contact', (req, res) => {
     res.json({
       success: true,
       message: 'Data fetched successfully',
       data: contacts
     });
   });
   app.put('/contact/:id', (req, res) => {

     let id = req.params.id
     let name = req.body.name
     
     if(name){
          let index = contacts.findIndex(el => el.id == id)

          contacts[index] = {
               ...contacts[index],
               name:name
          } 
          res.send({
               success:true,
               message:"data updated successfully"
          })
     }
     else{
          res.send({
               success:false,
               message:"validation error",
               errors:[
                    {
                         field:"name",
                         message:"cannot be null"
                    }
               ]
              }) ;
     }
   });
   app.delete('/contact/:id', (req, res) => {
   let id = req.params.id
   let newContacts = contacts.filter(el => el.id !== id )
   contacts = newContacts

   res.send({
           success:true,
           message:"data deleted successfully"
   });
   });
  
app.listen(7000, ()=>{
     console.log('server is running on port 7000');
});

