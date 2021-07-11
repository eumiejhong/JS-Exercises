/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

function generateText(text) {
    let markovMachine = new markov.MarkovMachine(text);
    console.log(markovMachine.makeText());
}

function makeText(path) {
    fs.readFile(path, 'utf8', function cb(err, data) {
        if(err) {
            console.error(`Cannot read file: ${path}: ${err}`);
            process.exit(1);
        } else {
            generateText(data);
        }
    })
}

async function makeURLText(url) {
    let resp;

    try {
        response = await axios.get(url);
    } catch (err) {
        console.error(`Cannot read URL: ${url}: ${err}`);
        process.exit(1);
    }
    generateText(response.data);
}

let [method, path] = process.argv.slice(2);

if(method === 'file') {
    makeText(path)
}
else if (method === 'url') {
    makeURLText(path);
}
else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}