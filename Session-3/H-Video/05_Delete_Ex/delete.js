movie = ['Spiderman', 'Slenderman','Lmao','Haha','Run','Cute butt'];
movie.push('Hai Vu');
let i = prompt("Thich xoa phim so may?");
movie.splice(i,1);
console.log(movie);

let pos = prompt('Thich xoa phim bat dau tu vi tri so may?');
let num = prompt('Tu vi tri day thi thich xoa them may phim')
movie.splice(pos,num);