const clientes = (sequelize, DataTypes) => {
  const Clientes = sequelize.define(
    "Clientes",
    {
      nome: {
        type: DataTypes.STRING,
        //unique:true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      endereço: {
        type: DataTypes.STRING,
      },
      telefone: {
        type: DataTypes.NUMBER,
      },
    },
    {
      tableName: "Cliente",
    }
  );
  return Clientes;
};

module.exports = clientes;
