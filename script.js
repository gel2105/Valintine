const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.getElementById('question-container');
const flowersContainer = document.getElementById('flowers-container');
const envelopeWrapper = document.getElementById('envelope-wrapper');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

let noBtnSize = 1;
let isEnvelopeOpen = false;

yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    flowersContainer.classList.add('show');
    
    // Show envelope after photo appears (2 seconds delay)
    setTimeout(() => {
        envelopeWrapper.classList.add('show');
    }, 2000);
});

// Click envelope to toggle open/close
envelope.addEventListener('click', () => {
    if (!isEnvelopeOpen) {
        // Open envelope
        envelope.classList.add('open');
        setTimeout(() => {
            letter.classList.add('show');
        }, 600);
        isEnvelopeOpen = true;
    } else {
        // Close envelope
        letter.classList.remove('show');
        setTimeout(() => {
            envelope.classList.remove('open');
        }, 300);
        isEnvelopeOpen = false;
    }
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
