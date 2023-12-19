const { promises: fs } = require("fs");

const fileData = require('./test.json');

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

async function main() {
    fileData.mainScreenContent.mainListView.forEach((item) => {
        if (item.isShuffle) {
            let data = item.songs
            shuffle(data);
        }
    });
    if (fileData.isWallpaperShuffle) {
        let data = fileData.wallpapers;
        shuffle(data);
    }
    await fs.writeFile("test.json", JSON.stringify(fileData));
}

main(); 
