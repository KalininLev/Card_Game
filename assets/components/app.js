const startBtn = document.querySelector('.first_page__start-btn');
const chooseDiff = document.getElementsByName('difficult');
const pageTitle = document.querySelector('.first_page__title');
const pageDiff = document.querySelector('.first_page__difficulties-options');


startBtn.addEventListener('click', ()=>{
    for (let i = 0; i < chooseDiff.length; i++){
        if(chooseDiff[i].checked == true){
            console.log(chooseDiff[i]);
            window.currentDiff = {difficult: chooseDiff[i].id}

            pageTitle.innerHTML = `Выбрана сложность: ${window.currentDiff.difficult}`
            
            pageDiff.classList.add('hidden')
            startBtn.classList.add('hidden')
        }
    }
})