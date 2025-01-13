import { DataTypes } from 'sequelize';
import sequelize from '../config/connectionDb';

const Users = sequelize.define('Users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Users;
