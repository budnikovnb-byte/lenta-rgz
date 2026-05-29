const buttons = document.querySelectorAll('.show-button');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        const card = button.parentElement;

        const fullText = card.querySelector('.full-text');

        fullText.classList.toggle('active');

        if(fullText.classList.contains('active')){
            button.textContent = 'Скрыть';
        }
        else{
            button.textContent = 'Показать полностью';
        }

    });

});