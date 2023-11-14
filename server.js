const express = require('express');
const { exec } = require('child_process');
const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', { filepath: null, stdout: null });
});

app.post('/execute', (req, res) => {
    const filepath = req.body.filepath
    exec(`ls ${filepath}`, (error, stdout, stderr) => {
        console.log(stdout)
        res.render('index', { filepath, stdout: stdout.split('\n')});
    });
});


app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`)
});
