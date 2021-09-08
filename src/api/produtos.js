const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const { produto } = require("../models");
const ProdutoService = require("../services/produtos");
const { body, check, validationResult } = require("express-validator");

const produtoService = new ProdutoService(produto);

router.get("/produtos", async (req, res) => {
  const produtos = await produtoService.get();
  res.status(200).json(produtos);
});

/*router.post(
  "/",
  body("nome").not().isEmpty().trim().escape(),
  check('preco')
  .not()
  .isEmpty()
  .matches(/\d/)
  .withMessage('O preço deve ser um número'),
  async (req, res) => {
      const erros = validationResult(req)
      if(!erros.isEmpty()){
          return res.status(400).json({ erros: erros.array()})
      }
    const { nome, preco } = req.body;
    try {
      await produtoService.adicionar({ nome, preco });
      res.status(201).send("Produto adicionado com sucesso!");
    } catch (erro) {
      res.status(400).send("Não foi possivel adicionar o produto!");
    }
  }
);*/

module.exports = router;
