'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdvert = document.querySelectorAll('.promo__adv img'),
    promo = document.querySelector('.promo__bg'),
    genre = promo.querySelector('.promo__genre'),
    filmList = document.querySelector('.promo__interactive-list');

promoAdvert.forEach(elem => {
    elem.remove();
});

genre.textContent = 'драма';

promo.style.backgroundImage = 'url("img/bg.jpg")';

movieDB.movies.sort();
console.log(movieDB.movies);

filmList.innerHTML = '';

movieDB.movies.forEach((film, i) => {
    filmList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});
