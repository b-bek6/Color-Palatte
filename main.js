const refreshBtn = document.querySelector(".refresh-btn");

const generatePalette = () => {
    for (let i = 0; i < rray.length; i++){
        const element = array[i];
    }
}
// generating a ramdom hex color code
const generatePalette = () => {
    let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
    randomHex = `#${randomHex.padStar(6,"0")}`;
    console.log(randomHex);
}

refreshBtn.addEventListener("click", generatePalette);