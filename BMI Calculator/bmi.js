const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const message = document.querySelector("#message");

    if(height ==="" || height < 0 || isNaN(height)){
        results.innerHTML = 'Please enter valid height'
    }
    else if(weight ==="" || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please enter valid weight'
    }
    else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI = ${BMI}`

        if(BMI < 18.6){
            message.innerHTML = "You are under weight"
        }
        else if(BMI >= 18.6 && BMI <= 24.9){
            message.innerHTML = "Your weight is in normal range"
        }
        else if(BMI > 24.9){
            message.innerHTML = "You are over weight"
        }
    }
})