const onePlayerBtn = document.getElementById("one-player");
const twoPlayerBtn = document.getElementById("two-player");

onePlayerBtn.addEventListener('click', () => {
    window.location = "./one_player.html";
});

twoPlayerBtn.addEventListener('click', () => {
    window.location = "./two_player.html";
});
