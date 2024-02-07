import express from 'express';
import { exec } from 'child_process';
const app = express();
const port = 3000;

app.get('/ltl3ba/:formula', (req, res) => {
    const formula = req.params.formula;
    console.log(`LTL Formula: ${formula}`);
    exec(`./src/ltl3ba-service/osx/ltl3ba -T3 -f "${formula}"`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            res.status(500).send({status: 'error', message: error.message});
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.send({status: 'error', message: stderr});
            return;
        }
        res.send({status: 'ok', automata: stdout});
    });
});

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

server.on('error', (err) => {
    console.error('Server error:', err.message.substring(0, 100) + '...');
    server.close();
});