class LojaService {
    constructor(LojaModel) {
      this.lojas = LojaModel;
    }
    async get() {
      const lojas = await this.lojas.findAll();
      return lojas;
    }
    async adicionar(lojasMGL){
      try{
        await this.lojas.create(lojasMGL)
      }catch(erro){
        console.erro(erro.mensagem)
        throw erro
      }
    }
  }
  module.exports = LojaService;