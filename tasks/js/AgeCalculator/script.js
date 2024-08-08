function taskCalc() {
    while (true) {
        let age = prompt("Enter your age: ");
        let ageNumber = Number(age);

        // Check if the input is a valid number and is not NaN
        if (isNaN(ageNumber) || ageNumber <= 0) {
            alert("Please enter a valid positive integer number.");
        } else {
            let days= ageNumber * 365;
            alert("You have lived for " + days + " days.");
            break;
        }
    }
}

function realCalc() {
    let dob = document.getElementById("dob").value;
    let dobDate = new Date(dob);
    let today = new Date();
    let diff = today - dobDate;
    let diffDate = new Date(diff);
    let age = Math.abs(diffDate.getUTCFullYear() - 1970);
    let days = Math.abs(diffDate.getUTCDate() - 1);
    let months = Math.abs(diffDate.getUTCMonth());
    document.getElementById("result").innerHTML = "You are " + age + " years, " + months + " months and " + days + " days old.";
}