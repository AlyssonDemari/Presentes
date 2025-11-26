async function loadContainer() {
    const response = await fetch('./JSON/data.json');
    const dados = await response.json();

    const container = document.querySelector('.container');

    container.innerHTML = '';

    dados.forEach(user => {

        const containerUser = `
                    <div class="container__user">
                <div class="container__front">
                    <img class="container__img--avatar" src="${user.avatar_img}" alt="Foto ${user.name}">
                    <div class="container__text">
                        <h2>${user.name}</h2>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container__down">
                    <div class="container__item">
                        <img class="container__img" src="${user.item_img1}" alt="${user.item_descrition1}">

                        <div class="container__desc">
                            <h3>${user.item_title1}</h3>
                            <p>${user.item_descrition1}</p>
                            <a class="container__link" target="_blank" href="${user.item_link1}">Link</a>
                        </div>
                    </div>
                    <hr>
                    <div class="container__item">
                        <img class="container__img" src="${user.item_img2}" alt="${user.item_descrition2}">

                        <div class="container__desc">
                            <h3>${user.item_title2}</h3>
                            <p>${user.item_descrition2}</p>
                            <a class="container__link" target="_blank" href="${user.item_link2}">Link</a>
                        </div>
                    </div>
                    <hr>
                    <div class="container__item">
                        <img class="container__img" src="${user.item_img3}" alt="${user.item_descrition3}">

                        <div class="container__desc">
                            <h3>${user.item_title3}</h3>
                            <p>${user.item_descrition3}</p>
                            <a class="container__link" target="_blank" href="${user.item_link3}">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        `

        container.innerHTML += containerUser;
    });


    initializeAccordion(); 
}

document.addEventListener('DOMContentLoaded', loadContainer);

function initializeAccordion() {
    const dropdownButtons = document.querySelectorAll('.container__front');
    const allDownContainers = document.querySelectorAll('.container__down');
    const allArrows = document.querySelectorAll('.container__front .fa-solid');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const down = button.parentNode.querySelector('.container__down');
            const arrow = button.querySelector('.fa-solid');
            const isOpen = down.classList.contains('is_open');

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

            down.classList.toggle('is_open', !isOpen);
            arrow.classList.toggle('fa-angle-down', isOpen);
            arrow.classList.toggle('fa-angle-up', !isOpen);
        });
    });
}
