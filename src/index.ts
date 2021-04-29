import app from "./app"

const DEFAULT_PORT:number = 7874
app.set('port', process.env.PORT || DEFAULT_PORT)
const server = app.listen(app.get('port'), () => {
    console.log(`Express running ➡️ PORT ${app.get('port')}`);  
});