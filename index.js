const express = require('express');
const router = require('./routes/routes.js');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { DB_URI } = require('./constants.js');
const options = {
    useNewUrlParser: true,
    dbName: 'forum',
};

mongoose.set('strictQuery', false); // For older versions of mongoose
mongoose.connect(DB_URI, options).then(() => {
    console.log('DB connected');
}).catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.json({ message: 'Server hello' });
});
app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
