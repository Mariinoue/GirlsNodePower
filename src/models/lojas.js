const lojas = (sequelize, DataTypes) => {
  const Lojas = sequelize.define(
    "Lojas",
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endereco: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "loja",
    }
  );
  return Lojas;
};

module.exports = lojas;
