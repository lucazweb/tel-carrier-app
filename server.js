const app = require('./config/express')();
const port = 3001;
app.listen(port, () => console.log(`⚡️ server is running in ${port}`));
