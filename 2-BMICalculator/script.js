const form= document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(height,weight);
    if(height === '' || isNaN(height) || height <= 0){
        results.innerHTML='<span>Please enter a valid height</span>';
        alert('Please enter a valid height');
        return;
    }
    else if(weight === '' || isNaN(weight)) {
        results.innerHTML='<span>Please enter a valid weight</span>';
        alert('Please enter a valid weight');
        return;
    }
    const BMI = (weight / ((height * height) / 10000)).toFixed
    (2);
    if(BMI < 18.5){
        alert('You are underweight');
    }
    else if(BMI >= 18.5 && BMI <= 24.9){
        alert('You are normal weight');
    }
    else if(BMI >= 25 && BMI <= 29.9){
        alert('You are overweight');
    }
    else if(BMI >= 30){
        alert('You are obese');
    }

    const results = document.querySelector('#results');
    alert(`Your BMI is ${BMI}`);
    results.innerHTML = `Your BMI is ${BMI}`;
});