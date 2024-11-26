const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    createUser: async (username, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        return db.promise().execute(query, [username, email, hashedPassword]);
    },

    findUserByEmail: (email) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        return db.promise().query(query, [email]);
    },

    findUserById: (id) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        return db.promise().query(query, [id]);
    }
};

module.exports = User;
