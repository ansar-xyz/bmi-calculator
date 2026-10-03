const personName = document.getElementById('name');
const personHeight = document.getElementById('height');
const personWeight = document.getElementById('weight');
const bmi = document.getElementById('bmi');
const bmiOutput = document.getElementById('bmiOutput');

function calculateBMI() {
    const name = personName.value.trim();
    const height = personHeight.value;
    const weight = personWeight.value;

    // checks whether the input has any empty values
    if (name === "" || weight === "" || height === "") {
        bmi.innerHTML = 'Values cannot be empty.'
        bmi.style.color = '#f4b7bb';
    }
    else {
        //checks if the value of the height and weight is zero
        if (weight > 0 && height > 0) {
            let result = Number(weight) / ((Number(height) / 100) * (Number(height) / 100));
            result = Math.round((result + Number.EPSILON) * 100) / 100;
            bmi.innerHTML = `Hi ${name}, based on your height and weight, your BMI is ${result}.`
            if (result < 18.5) {
                bmiOutput.innerHTML = 'This is below the typical healthy range. You may benefit from gradual weight gain.';
                bmi.style.color = '#8bb8ff';
            }
            else if (result >= 18.5 && result <= 24.9) {
                bmiOutput.innerHTML = 'This falls within the generally healthy range. Keep up the good habits.';
                bmi.style.color = '#8fd6b2';
            }
            else if (result >= 25 && result <= 29.9) {
                bmiOutput.innerHTML = 'This is slightly above the standard range. Small lifestyle changes can make a difference.';
                bmi.style.color = '#f2c879';
            }
            else if (result >= 30) {
                bmiOutput.innerHTML = 'This is well above the healthy range. Long-term lifestyle changes can significantly improve health.';
                bmi.style.color = '#f09a9e';
            }
        }
        else {
            bmi.innerHTML = 'Height and weight must be greater than zero.'
        }
    }
}