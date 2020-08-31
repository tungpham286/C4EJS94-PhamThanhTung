let movie1 = {
    title: 'The dark knight rise',
    year: 2012,
    imdb: 8.4,
}
let movie2 = {
    title: 'Run for your life',
    year: 2013,
    imdb: 7.4,
}

let art =[];
art.push(movie1);
art.push(movie2);

console.log(art[0]);
console.log(art[0].title);

for(let i = 0; i<art.length; i++){
    console.log(art[i]);
}