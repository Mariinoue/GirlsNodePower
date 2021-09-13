const express=require('express');
const router=express.Router();
const {lojas} = require('../models');
const LojaService = require("../services/lojas");
const { body, validationResult } = require('express-validator');
const errorResponse = require('./erro/error-response')

const lojaService = new LojaService(lojas);

router.get('/',async (req,res) => {
    const lojasFisicas = await lojaService.get();
    res.status(200).json(lojasFisicas);
});

router.post('/', [
  body('nome').notEmpty().withMessage('O atributo nome é obrigatório!'),
  body('endereco').notEmpty().withMessage('O atributo endereco é obrigatório!'),
], async(req,res)=>{
    const{nome, endereco} = req.body
    const erros = validationResult(req)
    try{
        if (!erros.isEmpty()) {
            errorResponse(res, {message: erros.array()}, 400, 'Bad request')
        } else {
            const resposta = await lojaService.adicionar({nome,endereco})
            res.status(201).json(resposta)
        }
    }catch(e){
        errorResponse(res, e)
    }
})

module.exports=router