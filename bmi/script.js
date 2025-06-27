document.getElementById("calculate").addEventListener("click", function () {
    const weightInput = document.getElementById("inputbtn-weight").value;
    const heightInput = document.getElementById("inputbtn-height").value;
    const result = document.getElementById("result");

    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput) / 100; // convert cm to meters

    // Input validation
    if (!weight || !height || weight <= 0 || height <= 0) {
        result.innerText = "Please enter valid weight and height.";
        
        result.style.color = "white";
        result.style.fontSize="20px";
        result.style.transition = "0.5s ease";

        result.classList.remove("hidden");
        result.classList.add("visible");
        return;
    }

    const bmi = weight / (height * height);
    displayBMI(bmi);
});

function displayBMI(bmi) {
    const result = document.getElementById("result");
    const roundedBMI = bmi.toFixed(2);

    let message = "";
    let color = "";

    if (bmi >= 30) {
        message = "Obese";
        color = "white";
    } else if (bmi >= 25) {
        message = "Overweight";
        color = "white";
    } else if (bmi >= 18.5) {
        message = "Normal";
        color = "white";
    } else {
        message = "Underweight";
        color = "white";
    }

    result.innerText = `Your BMI is ${roundedBMI} (${message})`;
    result.style.color = color;
    result.style.background="transparent";
    result.style.transition="0.5s ease";
    result.style.fontSize="30px";
   
    result.classList.remove("hidden");
    result.classList.add("visible");
}
