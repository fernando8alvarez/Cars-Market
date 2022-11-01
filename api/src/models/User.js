// Inicializamos sequelize

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    imgPerfil: {
      type: DataTypes.STRING(500),
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whatsApp: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    premium: { // Que debería hacer con esto
      type: DataTypes.BOOLEAN,
      //allowNull: false,
      defaultValue: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  }, { timestamps: false });
}
