const fs = require('fs');
const axios = require('axios');

function webCat(URL) {
    axios.get(URL).then(function(err, response) {
        if(err) {
            console.error(`Error fetching ${URL}: ${err}`)
            process.exit(1);
        }
        console.log(response.data)
    })
}


function writeOutput(text, output) {
    if(output) {
        fs.writeFile(out, text, 'utf8', function(err) {
            if(err) {
                console.error(`Couldn't write ${out}: ${err}`)
            }
            consolelog(text);
        })
    }
}

let path = process.arg[2];
if(path.slice(0,4) === 'http') {
    webCat(path);
} else {
    cat(path);
}

if(process.arg[2] === '--out') {
    output = process.argv[3];
    path = process.argv[4];
}
path = process.arg[2]; 
