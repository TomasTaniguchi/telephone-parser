import Database from 'better-sqlite3'

const db = new Database('telefonos.db');

const createTableQuery = `
                        CREATE TABLE telefonos (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            areaCode STRING NOT NULL,
                            rawNumber STRING NOT NULL
                        )
`;


//db.exec(createTableQuery);

const query = db.prepare('SELECT * FROM telefonos')
console.log(query.all());

