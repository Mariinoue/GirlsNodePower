const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const { produtos } = require("../models");
const ProdutoService = require("../services/produtos");
const { body, check, validationResult } = require("express-validator");

const produtoService = new ProdutoService(produtos);

router.get("/", async (req, res) => {
  const produtos = await produtoService.get();
  res.status(200).json(produtos);
});

module.exports = router;
