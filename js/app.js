/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

document.querySelector('#btn__reset').addEventListener('click', (e) => {
    //resets all the list items back to empty.
     document.querySelector('#phrase ul').innerHTML = '';
    //clears styles to buttons
     document.querySelectorAll("#qwerty button").forEach((button) => {
        button.className = 'key';
        button.disabled = false;
     });
    //sets life to full.
    let images = document.querySelectorAll('.tries');
    for(let i=0; i< images.length; i++){
            images[i].firstElementChild.src = "images/liveHeart.png";
            images[i].firstElementChild.className = '';

     }



     game = new Game();
     game.startGame();

});

document.querySelector('#qwerty').addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON'){
        game.handleInteraction(e.target);
    }
});
