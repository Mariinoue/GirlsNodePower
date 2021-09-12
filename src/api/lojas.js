const express=require('express');
const router=express.Router();
const {lojas} = require('../models');
const LojaService = require("../services/lojas");

const lojaService = new LojaService(lojas);

router.get('/',async (req,res) => {
    const lojasFisicas = await lojaService.get();
    res.status(200).json(lojasFisicas);
});

router.post('/',async(req,res)=>{
    const{nome,endereco}=req.body
    try{
        await lojaService.adicionar({nome,endereco})
        res.status(201).send('loja registrada')
    }catch(erro){
        res.status(400).send('não foi cadastrar loja')
    }
})

module.exports=router