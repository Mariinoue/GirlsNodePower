const lojas=(sequelize, DataTypes)=>{
    const Lojas=sequelize.define('Lojas',{
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return Lojas
}

module.exports=lojas