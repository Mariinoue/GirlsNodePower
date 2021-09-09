class LojaService {
    constructor(LojaModel) {
      this.lojas = LojaModel;
    }
    async get() {
      const lojas = await this.lojas.findAll();
      console.log("aqui irei mostrar lojas");
      return lojas;
    }
  }
  module.exports = LojaService;