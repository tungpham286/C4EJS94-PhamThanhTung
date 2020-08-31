console.log('b1');
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

let movie3 = {
    title: 'phimmoizzz',
    year: 2020,
    imdb: -0.5,
}

console.log('b2');
let art =[];
art.push(movie1);
art.push(movie2);
art.push(movie3);

console.log('b3');
console.log(art[2].title)

console.log('b4');
for(let i =0; i<art.length; i++){
    console.log(art[i]);
}

console.log('b5');
for(let i =0; i<art.length; i++){
    console.log(art[i].title);
    console.log(art[i].year);
    console.log(art[i].imdb);
    console.log('--------------------')
}

art[2].imdb += 0.7;