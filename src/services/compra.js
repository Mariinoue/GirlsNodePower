class CompraService {
  constructor(CompraModel) {
    this.compra = CompraModel;
  }
  async get() {
    const compras = await this.compra.findAll();
    return compras;
  }
}
module.exports = CompraService;
