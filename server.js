const express = require('express');
const app = express();
const port = 8000; 
const cors = require('cors');

require('./server/config/mongoose.config');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({extended: true}));
const allMyPetsRoutes = require('./server/routes/pet.routes');

allMyPetsRoutes(app);
app.listen(port, () => console.log(`Ey ninjas the server is running in the port ${port}`))



/* const cookieParser = require('cookie-parser');
require('dotenv').config()
process.env
console.log("🚀 ~ file: server.js ~ line 9 ~ process.env", process.env.SECRET_KEY)
require('./server/config/mongoose.config');
app.use(cookieParser())
const userRoutes = require('./server/routes/user.routes');
userRoutes(app); */
