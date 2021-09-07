const clientes=(sequelize,DataTypes)=>{
    const Clientes=sequelize.define('Clientes',{
        nome:{
            type:DataTypes.STRING,
            //unique:true,
            allowNull:false
        }

    })
    return Clientes
}

module.exports=clientes
