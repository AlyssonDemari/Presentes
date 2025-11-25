const dropdownButtons = document.querySelectorAll('.container__front');
const allDownContainers = document.querySelectorAll('.container__down');
const allArrows = document.querySelectorAll('.container__front .fa-solid');


dropdownButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        
        const down = button.parentNode.querySelector('.container__down');
        const arrow = button.querySelector('.fa-solid'); 
        allDownContainers.forEach(container => {

            if (container !== down) {
                container.classList.remove('is_open');
            }
        });
        
        allArrows.forEach(currentArrow => {
             if (currentArrow !== arrow) {
                currentArrow.classList.remove('fa-angle-up');
                currentArrow.classList.add('fa-angle-down');
            }
        });

        down.classList.toggle('is_open'); 
        
        arrow.classList.toggle('fa-angle-down');
        arrow.classList.toggle('fa-angle-up');
    });
});