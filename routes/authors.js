const express =require('express')
const Author = require('../models/author')
const router = express.Router()




router.get('/',async (req,res)=>{
    const search={}
    
        if(req.query.name != null && req.query.name !=='')
          
        search.name = new RegExp(req.query.name , 'i')

        try{
    
        const authors = await Author.find(search)
        res.render('authors/index',{authors:authors , search:req.query.name })
    }
        
     catch (error) {
        res.redirect('/')
    }
   
})




router.get('/new',(req,res)=>{
       res.render('authors/new',{author:new Author()})
})

router.post('/',async(req,res )=>{
   try {
      const myAuthor = await Author.create({name:req.body.name})
    //    res.redirect(`authors/${myAuthor._id}`)
      res.redirect('authors')
   } catch (error) {
    console.log(error)
   }
})
module.exports = router