

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    console.log(height);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === ''|| height < 0 || isNaN(height)){
        result.innerHTML = `please enter valid height ${height}`
    }else if(weight === ''|| weight < 0 || isNaN(weight)){
        result.innerHTML = `please enter valid weight ${weight}`
    }else{

        const bmi = (weight / ((height*height)/ 10000)).toFixed(2);
        if (bmi <= 18.6) {
            result.innerHTML = `<span>under weight(poor) ${bmi}</span>`;
            result.style.color = 'crimson' 
        } else if(bmi <= 19.6 || bmi <= 24.9){
            result.innerHTML = `<span>Normal weight(good) ${bmi}</span>`;
            result.style.color = 'cornflowerblue' 

        } else{
            result.innerHTML = `<span>over weight(very bad) ${bmi}</span>`;
            result.style.color = 'hotpink' 

        }

    }

})