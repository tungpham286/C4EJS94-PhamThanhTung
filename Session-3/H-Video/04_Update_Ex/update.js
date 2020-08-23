movie = ['Spiderman', 'Slenderman'];
movie.push('Hai Vu');
let change = prompt("Ten phim la gi co?");
movie[0] = change;
console.log(movie);

let index = prompt('Ban thich thay doi o vi tri so may?');
let change2 = prompt('B thich doi ten phim thanh gi?');
movie[index] = change2;
console.log(movie);