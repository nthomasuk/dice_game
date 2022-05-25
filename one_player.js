const createDiceElements = () => {
    const faces = [
        "./images/dice_d1.svg",
        "./images/dice_d2.svg",
        "./images/dice_d3.svg",
        "./images/dice_d4.svg",
        "./images/dice_d5.svg",
        "./images/dice_d6.svg",
    ];
    const diceElements = [];
    faces.forEach((face, index) => {
        const image = document.createElement("img");
        image.src = face;
        image.alt = `dice face ${index}`;
        diceElements.push(image);
    });
    return diceElements;
};

const faceElements = createDiceElements();
const rollArea = document.getElementsByClassName("roll-area")[0];
const rollBtn = document.getElementById("roll");

// let score = 0;

const rollDice = () => {
    let count = 0;        
    const interval = setInterval(() => {
        const randNum = Math.floor(Math.random() * 6);
        const faceElement = faceElements[randNum];
        rollArea.innerHTML = "";
        rollArea.append(faceElement);            
        count = count + 1;            
        if (count == 6) {
            count = 0;
            clearInterval(interval);
        }
    }, 100);
}

rollBtn.addEventListener('click', () => rollDice());

