'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {

    // console.log(inputStdin);

    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));


    main();
});

function readLine() {
    var line = inputString[currentLine++];
    console.log(line);


    return line;
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    var position = 0;
    var jumpCount = 0;

    while (position < c.length - 1) {
        if (position + 2 < c.length) {
            if (c[position + 2] == 0) {
                jumpCount++;
                position = position + 2;
            } else if (c[position + 1] == 0) {
                jumpCount++;
                position++;
            }
        } else if (position + 1 < c.length) {
            if (c[position + 1] == 0) {
                jumpCount++;
                position++;
            }
        }
    }

    return jumpCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);
    console.log(n);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
