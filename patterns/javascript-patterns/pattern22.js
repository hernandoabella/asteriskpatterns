// Pattern 22: ...

// EEEEE
// DDDD*
// CCC**
// BB***
// A****

const n = 4;

for (let i = n; i >= 0; i--) {
    let row = '';

    for (let j = 0; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(i + 65);
        }
    }

    console.log(row);
}
