let ageVal = document.querySelector('#ageInp');
let ageButn = document.querySelector('.age2daysBtn');
let ageSpan = document.querySelector('.ageDays');


ageButn.addEventListener('click', ()=>{
    ageSpan.innerHTML = [(ageVal.value*365) ]
})