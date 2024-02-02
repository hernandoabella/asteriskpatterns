// Pattern 112: ...

// * * * * * * * *
// * * *   * * * *
// * *       * * *
// *           * *
// * *           *
// * * *       * *
// * * * *   * * *
// * * * * * * * *

let n = 8;
let c1 = (n - 1) / 2;
let c2 = 3 * n / 2 - 1;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        if (i + j <= c1 || i - j >= c1 || j - i >= c1 || i + j >= c2) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
