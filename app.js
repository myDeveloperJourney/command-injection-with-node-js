const express = require("express");
const { execFile } = require("child_process");
const path = require("path");
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
    let filepath = req.body.filepath;

    // Simple Validation/Sanitization
    // This is a basic example, adjust the regex according to your filepath rules
    if (!/^[a-zA-Z0-9_\-./]+$/.test(filepath)) {
        return res.render("index", {
            filepath: null, 
            stdout: null, 
            error: "Invalid filepath entered"
        });
    }

    // Normalize and restrict the filepath to a specific directory
    filepath = path.normalize(`/home/kali/acme-ftp-server/${filepath}`).replace(/^(\.\.(\/|\\|$))+/, '');

    execFile('ls', [filepath], (err, stdout, stderr) => {
        let error = null;
        stdout = stdout.split("\n").filter(n => n.length > 1);

        if (err || stderr) {
            error = "Something went wrong, please try again later";
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
