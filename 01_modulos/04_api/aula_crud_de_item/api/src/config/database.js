const sqlit3 = require("sqlite3").verbose();

const db = new sqlit3.Database(
    "./src/database/db.db", (error) => {
        if (error) {
            console.error('Erro ao conectar ao banco de dados:', error.message);
        }
        else {
            console.log('Conectado ao banco de dados SQLite.');
        }
    }
);

db.serialize(
    () => {
        db.run(
            `CREATE TABLE IF NOT EXISTS profiles(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                age INT
            )`
        );
    }
);

module.exports = db;