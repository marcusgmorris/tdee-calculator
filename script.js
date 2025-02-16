function calculateTDEE() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let activity = document.getElementById("activity").value;

    weight = parseFloat(weight);
    height = parseFloat(height);
    age = parseFloat(age);
    activity = parseFloat(activity);

    if (!weight || !height || !age) {
        document.getElementById("result").innerHTML = "Please enter all values!";
        return;
    }

    let BMR;
    if (gender === "male") {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    let TDEE = BMR * activity;

    document.getElementById("result").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories/day";
}