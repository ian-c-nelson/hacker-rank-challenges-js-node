'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    console.log(inputString[currentLine++]);
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    var pairCount = 0;
    var colors = new Set();
    ar.forEach(sock => {
        if (colors.has(sock)) {
            pairCount++;
            colors.delete(sock);
        } else {
            colors.add(sock);
        }
    });

    console.log(colors);
    console.log(pairCount);
    return pairCount;
}

function main() {


    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
