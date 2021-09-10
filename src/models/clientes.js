
const clientes = (sequelize, DataTypes) => {
  const Clientes = sequelize.define("Clientes",{
      nome: {
        type: DataTypes.STRING,
        //unique:true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      endereco: {
        type: DataTypes.STRING,
      },
      telefone: {
        type: DataTypes.STRING,
      },
      observacao: {
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'clientes',
    }
  );
  return Clientes
}

module.exports = clientes
