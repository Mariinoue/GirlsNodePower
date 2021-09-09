class LojaService {
    constructor(LojaModel) {
      this.lojas = LojaModel;
    }
    async get() {
      const lojas = await this.lojas.findAll();
      return lojas;
    }
  }
  module.exports = LojaService;