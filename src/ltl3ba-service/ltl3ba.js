import os from 'os';
import express from 'express';
import { exec } from 'child_process';
const app = express();
const port = 3000;

app.get('/ltl3ba/:formula', (req, res) => {
    const formula = req.params.formula;
    console.log(`LTL Formula: ${formula}`);
    
    const platform = os.platform();
    let ltl3ba;
    if (platform === 'darwin') {
        ltl3ba = './src/ltl3ba-service/exe/darwin/ltl3ba';
    } else if (platform === 'linux') {
        ltl3ba = './src/ltl3ba-service/exe/linux/ltl3ba';
    } else if (platform === 'win32') {
        ltl3ba = './src/ltl3ba-service/exe/win32/ltl3ba.exe';
    }

    exec(`${ltl3ba} -T3 -f "${formula}"`, (error, stdout, stderr) => {
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