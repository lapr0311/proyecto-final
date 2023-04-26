const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const authRouter = require('./src/routes/auth.routes')

const pool = require('../server/src/database/db')

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(authRouter)


app.use((err, req, res, next) => {
	return res.json({
		message:err.message
	})
})


app.listen(8001, () => {
    console.log(`Server is running on the port : 8001`);
  });