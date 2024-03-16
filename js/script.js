"use strict";

const personalMovieDB = {
		count: 0,
		movies: {},
		actors: {},
		genres: [],
		privat: false,
		start: function() {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
			while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
				personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
			}
		},
		rememberMyFilms: function() {
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
		},
		detectPersonalLevel: function() {
			if (personalMovieDB.count < 10) {
				alert("Просмотрено довольно мало фильмов");
			} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
				alert("Вы классический зритель");
			} else if (personalMovieDB.count >= 30) {
				alert("Вы киноман");
			} else {
				alert("Произошла ошибка");
			}
		},
		showMyDB: function(hidden) {
			if(!hidden) {
				console.log(personalMovieDB);
			}
		},
		writeYourGenres: function() {
			for(let i = 0; i < 3; i++) {
				let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
				if (genre != '' && genre != null) {
					personalMovieDB.genres[i] = genre;
				} else {
					console.log('error');
					i--;
				}
			}
			personalMovieDB.genres.forEach((item, i) => {
				console.log(`Любимый жанр #${i + 1} - это ${item}`);
			});
		},
		toggleVisibleMyDB: function() {
			personalMovieDB.privat = !personalMovieDB.privat;
		}
	};

// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();


// // // Задачи и их решения

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
//         return result.trim();
// }

// // Задача на возврат перевернутой строки

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (str.length > 0) {
//         let newStr = ''
//         for (let i = 0; i < str.length; i++) {
//             newStr += str[str.length - i - 1];
//         }
//         return newStr;
//     } else {
//         return "Ошибка!";
//     }
// }

// console.log(reverse(someString));