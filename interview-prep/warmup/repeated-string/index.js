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
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    if (s == "a") {
        return n;
    }

    if (s.indexOf("a") == -1) {
        return 0;
    }

    var arr = s.split("");
    var count = 0;
    var subCount = 0;

    arr.forEach(l => {
        console.log(l);
        if (l == "a") {
            subCount++;
        }
    })

    var iterations = Math.floor(n / s.length);
    var remainder = n % s.length;

    // console.log("SubCount: " + subCount);
    // console.log("Iterations: " + iterations);
    // console.log("Remainder: " + remainder);

    count = iterations * subCount;

    // console.log("Count: " + count);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
            if (i < remainder) {
                count++;
            }
        }
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
