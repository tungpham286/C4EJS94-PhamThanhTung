let movie = {
    title: 'The dark knight rise',
    year: 2012,
    imdb: 8.4
}
console.log(movie);
let prop = prompt("What prop do you want to update?");
let name = prompt("What is the update?");

movie[`${prop}`] = name;
console.log(movie);