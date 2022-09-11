(async () => {
    const db = require("../../assets/db/db");
    console.log("Começou")
    
    const agenda = await db.selectAgendamento();
    console.log(agenda)

})();


