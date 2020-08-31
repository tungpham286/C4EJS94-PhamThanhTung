let movie = {
    title: 'The dark knight rise',
    year: 2012,
    imdb: 8.4
}

console.log(movie.title);
console.log(movie.year);
console.log(movie.imdb);

console.log(movie['title']);
console.log(movie['year']);
console.log(movie['imdb']);

console.log(movie.director);

console.log('as you see, the result is undifined if you log a non-existent property')