let numberOfPoly = prompt("How many polygons?");
for (let i = 3; i < numberOfPoly; i++) {
    let corner = 180 - (((i - 2) * 180) / i);
    function polygon() {
        for (let j = 1; j <= i; j++) {
            fd(100);
            rt(corner);
        }
    }
    polygon();
}