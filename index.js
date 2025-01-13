import sequelize from './config/connectionDb';
import Users from './models/Users';

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

app.get('/', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});
