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
    filmList = document.querySelector('.promo__interactive-list'),
    addFilmForm = document.querySelector('form.add'),
    newFilmInput = addFilmForm.querySelector('.adding__input'),
    bestFilmCheckbox = addFilmForm.querySelector('[type="checkbox"]');


promoAdvert.forEach(elem => {
    elem.remove();
});

genre.textContent = 'драма';

promo.style.backgroundImage = 'url("img/bg.jpg")';

function showMovies(data) {
    data.sort();

    filmList.innerHTML = '';

    data.forEach((film, i) => {
        filmList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((elem, i) => {
        elem.addEventListener('click', () => {    
            movieDB.movies.splice(i, 1);
            showMovies(data);
        });
    });
}

showMovies(movieDB.movies);

addFilmForm.addEventListener('submit', event => {
    event.preventDefault();

    let newFilm = newFilmInput.value;
    const isFavourite = bestFilmCheckbox.checked;

    event.target.reset();

    if (newFilm) {

        if (isFavourite) {
            console.log('Добавляем любимый фильм!');
        }

        if (newFilm.length > 21) {
            newFilm = newFilm.slice(0,21) + '...';
        }
    
        movieDB.movies.push(newFilm);
        showMovies(movieDB.movies);
    }
});