const express=require('express');
const router=express.Router();
const {lojas} = require('../models');
const LojaService = require("../services/lojas");

const lojaService = new LojaService(lojas);

router.get('/',async (req,res) => {
    const lojasFisicas = await lojaService.get();
    res.status(200).json(lojasFisicas);
});

module.exports=router