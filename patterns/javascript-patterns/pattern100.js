// Pattern 100: ...

// *
// **
// * *
// *  *
// * *
// **
// *

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= x; j++) {
        if (j === 1 || j === x) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);

    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }
}
