const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.getElementById('question-container');
const flowersContainer = document.getElementById('flowers-container');

let noBtnSize = 1;

yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    flowersContainer.classList.add('show');
});

noBtn.addEventListener('click', () => {
    noBtnSize -= 0.1;
    noBtn.style.transform = `scale(${noBtnSize})`;
    
    const yesSize = 1 + (1 - noBtnSize);
    yesBtn.style.transform = `scale(${yesSize})`;
    
    if (noBtnSize <= 0.1) {
        noBtn.style.display = 'none';
    }
});
