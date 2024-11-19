import TelefonoArgentino from "./telefonos_argentinos.js";
import pl from 'nodejs-polars';
import Database from 'better-sqlite3'



const phoneAnalyzer = (phoneNumber) =>{
    const tel = new TelefonoArgentino(phoneNumber);
    const db = new Database('telefonos.db');
    const { area_code, number } = tel.getData();
    const insert = db.prepare('INSERT INTO telefonos (areaCode, rawNumber) VALUES (?, ?)')
    insert.run(area_code, number)
    console.log('DONE!');
    db.close();
}

const runner = async () =>{
    const df = await pl.readCSV('telefonos.csv');
    const telefono = df.select("Telefono")
    telefono.map(x=>{phoneAnalyzer(x)})

}

runner();





