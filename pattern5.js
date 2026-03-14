// JAVASCRIPT TEST 0005: Incremental Number Triangle
// Author: Your Name
// Description: Prints numbers in a triangle pattern increasing row-wise

const TOTAL_ROWS = 5; // Total rows of the triangle
let num = 1; // Starting number

for (let row = 1; row <= TOTAL_ROWS; row++) {
    let line = '';
    for (let col = 1; col <= row; col++) {
        line += num + ' ';
        num++; // Increment number for next position
    }
    console.log(line.trim()); // Remove trailing space for clean formatting
}
