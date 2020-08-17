let edge = prompt("Enter number of edges: ");
let corner = 180 - (((edge - 2) * 180) / edge);
function polygon() {
    for (let i = 1; i <= edge; i++) {
        fd(100);
        rt(corner);
    }
}
polygon();