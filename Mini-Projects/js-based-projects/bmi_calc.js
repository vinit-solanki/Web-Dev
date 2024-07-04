// const form=document.querySelector('form')
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log(e.target);
//     const height=parseFloat(document.querySelector('#height').value)
//     console.log(height);
//     const weight=parseFloat(document.querySelector('#weight').value)
//     console.log(weight);
//     const bmi=weight/((height*height)/10000).toFixed(2)
//     console.log(bmi);
//     const result=document.querySelector('#results')
//     if(height===''||height<0||isNaN(height)){
//         result.textContent=`Please enter a valid height`;
//     }
//     if(weight===''||weight<0||isNaN(weight)){
//         result.textContent='Please enter a valid weight';
//     }
//     if(bmi<18.5){
//         result.textContent=`Underweight, \n Your Body Weight is ${bmi}`;
//     }
//     if(bmi>=18.5 || bmi < 24.9){
//         result.textContent=`Normal, \n Your Body Weight is ${bmi}`;
//     }
//     if(bmi>=25 || bmi < 29.9){
//         result.textContent=`Overweight, \n Your Body Weight is ${bmi}`;
//     }
//     if(bmi>=30){
//         result.textContent=`Obese, \n Your Body Weight is ${bmi}`;
//     }
// });
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const result = document.querySelector('#results');
    
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    
    if (isNaN(height) || height <= 0) {
        result.textContent = 'Please enter a valid height';
        return;
    }
    
    if (isNaN(weight) || weight <= 0) {
        result.textContent = 'Please enter a valid weight';
        return;
    }
    
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    
    let status;
    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi < 24.9) {
        status = 'Normal';
    } else if (bmi < 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obese';
    }
    
    result.textContent = `${status}, Your Body Weight is ${bmi}`;
});
