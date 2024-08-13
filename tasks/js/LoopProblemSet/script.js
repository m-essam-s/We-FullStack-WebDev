function solveTasks() {
    // Task 1: Print all numbers between -10 and 19
    console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
    for (let i = -10; i <= 19; i++) {
        console.log(i);
    }

    // Task 2: Print all even numbers between 10 and 40
    console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
    for (let i = 10; i <= 40; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    // Task 3: Print all odd numbers between 300 and 333
    console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
    for (let i = 300; i <= 333; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }

    // Task 4: Print all numbers divisible by 5 AND 3 between 5 and 50
    console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
    for (let i = 5; i <= 50; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(i);
        }
    }
}
