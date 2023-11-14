const express = require('express');
const { exec } = require('child_process');
const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));



app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`)
});
