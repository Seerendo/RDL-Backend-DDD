const container = require('./infraestructure/container');
const app = container.resolve('start');
const db = container.resolve('db');

app.start().then(
    async () => {
        await db.sequelize.sync();
    }
).catch((err) =>{
    console.log(err);
    process.exit();
});