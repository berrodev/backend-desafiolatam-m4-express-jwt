import express from 'express';
import 'dotenv/config';
import sequelize from './config/connectionDb.js';
import Users from './models/Users.js';

const app = express();

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

connectDb();

app.get('/', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
