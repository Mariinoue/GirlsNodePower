const express=require('express')
const router=express.Router()

router.get('/:id/compras',(req,res)=>{
    res.send('Lista de Compras')
})

router.post('/',(req,res)=>{
    
})

module.exports=router