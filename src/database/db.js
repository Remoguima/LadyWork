const Database = require('sqlite-async')

function execute(db){
    //criando as tabelas do banco
    return db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        whatsapp TEXT,
        bio TEXT
    );

    CREATE TABLE IF NOT EXISTS classes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject INTEGER,
        cost TEXT,
        proffy_id INTEGER
    );

    CREATE TABLE IF NOT EXISTS class_schedule(
        id  INTEGER PRIMARY KEY,
        class_id INTEGR,
        weekday INTEGER,
        time_from INTEGER,
        time_to INTEGER
    )
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // usa o 'then' para seguir a proxima instução apenas depoius de abrir o BD