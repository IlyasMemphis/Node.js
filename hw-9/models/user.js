// models/user.js

'use strict';

import { Model } from 'sequelize';  // Для использования ES модулей

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Здесь можно настроить ассоциации
    }
  }

  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      mustChangePassword: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
