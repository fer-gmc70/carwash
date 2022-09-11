async function conexao() {
    const mysql2 = require('mysql2/promise')

    const con = await mysql2.createConnection({
        host:'localhost',
        user:'root',
        password:"G@bi_422#03!",
        database:"carwash",
    });

    con.connect(function(err){
        if(err) throw err;
        console.log('Conectado!!');
    });

    return con
}
module.exports = {conexao}
// export default conexao

async function selectAgendamento(){
    const conn = await conexao();
    // console.log(conn)
    const [rows] = await conn.query('SELECT * FROM agenda;');
    return rows;
}
 
module.exports = {selectAgendamento}
// export default selectAgendamento