'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    var minimumBribes = 0;

    // loop through the array.  
    for(var i = q.length -1; i > -1; i--) {
        // set the position variables (use zero index to avoid confusion)
        var originalPosition = q[i] - 1;
        var currentPosition = i;

        // If it would take more than two bribes it is too chaotic, exit function.
        if(originalPosition - currentPosition > 2) {
            console.log("Too chaotic");
            return;
        } else {
            // increment the bribes for each person who would have to 
            // bribe this person to get ahead of them.
            for(var c = originalPosition -1;c <= currentPosition-1; c++) {
                if(c < 0) {
                    continue;
                }

                if(q[c]-1 > originalPosition) {
                    minimumBribes++;
                }
            }
        }
    }

    // print the final value.
    console.log(minimumBribes);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
