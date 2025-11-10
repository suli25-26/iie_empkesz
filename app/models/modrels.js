import User from './user.js';
import sequelize from '../database/database.js'
import Employee from './employee.js';
import Rank from './rank.js';

const db = {};

db.User = User;
db.Employee = Employee
db.Rank = Rank

db.Employee.belongsTo(db.Rank)
db.Rank.hasMany(db.Employee)

await sequelize.sync({
    alter: true
})

export default db;
