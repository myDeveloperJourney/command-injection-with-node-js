const express = require("express");
const { exec } = require("child_process");
const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index", { 
        filepath: null, 
        stdout: null,
        error: null 
    });
});

app.post("/execute", (req, res) => {
    const filepath = req.body.filepath;
    exec(`ls /home/kali/acme-ftp-server${filepath}`, (err, stdout, stderr) => {
        
        let error = null;
        stdout = stdout.split("\n").filter(n => n.length > 1);
        
        if(err || stderr) {
            error = "Something went wrong, please try again later"
        }

        res.render("index", { 
            filepath, 
            stdout,
            error  
        });
    });
});


app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});