"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

const personalMovieDB = {
		  count: numberOfFilms,
		  movies: {},
		  actors: {},
		  genres: [],
		  privat: false
	  };

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Один из последних просмотренных фильмов?", ""),
			b = prompt("На сколько оцените его?", "");
		if (a != '' && b != '' && a != null && b != null && a.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			console.log('error');
			i--;
		}
	}
}

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
		alert("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		alert("Вы киноман");
	} else {
		alert("Произошла ошибка");
	}
}

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for(let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
	}
}

start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB(personalMovieDB.privat);
// writeYourGenres();

console.log(personalMovieDB);