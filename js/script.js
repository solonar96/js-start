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

// // Задача на числа Фибоначчи

// function fib(num) {
//     if (parseInt(num) !== num || isNaN(num) || num === '') {
//         return '';
//     } else {
//         const first = 0,
//               second = 1,
//               arr = [];
//         let result = '';
//         for (let i = 0; i < num; i++) {
//             const next = arr[i - 2] + arr[i - 1];
//             if (i === 0) {
//                 arr[i] = first;
//             } else if (i === 1) {
//                 arr[i] = second;
//             } else {
//                 arr[i] = next;
//             }
//         }
//         for (let j = 0; j < num; j++) {
// 			result += " ";
//             result += arr[j];
//         }
//         return result.slice(1);
//     }
// }