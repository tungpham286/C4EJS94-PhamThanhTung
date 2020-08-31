
let goods = ['Jeans', 'T-shirt', 'Socks'];
let choose;
while (true) {
    choose = String(prompt('Hi there, welcome to shop admin panel, what do you want(C,R,U,D)'));
    if (choose=='c' || choose=='r' || choose=='u' || choose=='d'||choose=='C' || choose=='R' || choose=='U' || choose=='D') {
        break;
    } else {
        alert('This command is not supported!');
    }
}

while (true) {
    if (choose == 'c') {
        let newItem = prompt('Enter the name of new item: ');
        goods.push(newItem);
        alert('Done!');
    } else if (choose == 'r') {
        let strItem;
        for (let i = 0; i < goods.length; i++) {
            strItem += `${i}. ${goods[i]} \n`
        }
        alert('The current items are: \n' + strItem);
    }else if(choose =='u'){
        while(true){
            let pos = parseInt(prompt('Enter the position you want to update: '));
            if(Number.isInteger(pos)){
                if(pos>=goods.length){
                    alert('we dont reach to this positon yet!');
                }else{
                    break;
                }
            }else{
                alert('wrong input mate!');
            }
        }
        let name = prompt('Enter the new name: ');
        goods[pos] = name;
        alert('Done');
    }else{
        while(true){
            let pos2 = prompt('Enter the position you want to delete: ');
            if(Number.isInteger(pos)){
                if(pos>=goods.length){
                    alert('we dont reach to this positon yet!');
                }else{
                    break;
                }
            }else{
                alert('wrong input mate!');
            }
        }
        goods.splice(pos,1);
        alert('Done!');
    }

}
