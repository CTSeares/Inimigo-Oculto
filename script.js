const images = [
    'Imagens/Imagem01.jpg',
    'Imagens/Imagem02.jpg',
    'Imagens/Imagem03.jpg',
    'Imagens/Imagem04.jpg',
    'Imagens/Imagem05.jpg',
    'Imagens/Imagem06.jpg',
    'Imagens/Imagem07.jpg',
    'Imagens/Imagem08.jpg',
    'Imagens/Imagem09.jpg',
    'Imagens/Imagem10.jpg'
    // Adicione mais caminhos para suas imagens aqui
];

let shuffledImages = [...images];  // Copia o array original para embaralhar

function shuffleArray(array) {
    // Embaralha o array de forma aleatória usando o algoritmo de Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
}

function getNextImage() {
    if (shuffledImages.length === 0) {
        // Se todas as imagens foram mostradas, reembaralha o array
        shuffledImages = [...images];
        shuffleArray(shuffledImages);
    }
    // Pega a próxima imagem e remove ela do array
    return shuffledImages.pop();
}

function updateImage() {
    const imgElement = document.getElementById('randomImage');
    imgElement.src = getNextImage();
}

document.getElementById('newImageButton').addEventListener('click', updateImage);

// Carregar uma imagem aleatória ao iniciar
updateImage();
