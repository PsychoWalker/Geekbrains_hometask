var chess = document.querySelector('.chess');

for (var i=0; i < 8; i++) {
    for (var j=0; j<8; j++) {
        var item = document.createElement('div');
        item.classList.add('chess_item');
        chess.appendChild(item);
        if (j % 2 !== i % 2) {
            item.classList.add('chess_black');
        }
    }
}



