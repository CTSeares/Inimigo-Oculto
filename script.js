const images = [
    'Imagens/imagem01.jpg',
    'Imagens/imagem02.jpg',
    'Imagens/imagem03.jpg',
    'Imagens/imagem04.jpg',
    'Imagens/imagem05.jpg',
    'Imagens/imagem06.jpg',
    'Imagens/imagem07.jpg',
    'Imagens/imagem08.jpg',
    'Imagens/imagem09.jpg',
    'Imagens/imagem10.jpg'
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
