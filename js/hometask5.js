var chess = document.querySelector('.chess');
let arrayM = [
    ['Л','К','С','К','Ф','С','К','Л'],
    ['П','П','П','П','П','П','П','П'],
    [],
    [],
    [],
    [],
    ['П','П','П','П','П','П','П','П'],
    ['Л','К','С','К','Ф','С','К','Л']
];

for (var i=0; i < 8; i++) {

    for (var j=0; j<8; j++) {
        var item = document.createElement('div');
        item.classList.add('chess_item');
        chess.appendChild(item);

        if (j % 2 !== i % 2) {
            item.classList.add('chess_black');
        }
        if( arrayM[i][j] ) {
            item.innerText = arrayM[i][j];
        }

        if( i >= 0 && i < 6 ) {
            item.classList.add('white');;
        }
    }
}



