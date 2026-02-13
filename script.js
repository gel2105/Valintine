const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.getElementById('question-container');
const flowersContainer = document.getElementById('flowers-container');
const envelopeWrapper = document.getElementById('envelope-wrapper');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const closeLetter = document.getElementById('close-letter');
const galleryBtn = document.getElementById('gallery-btn');
const galleryModal = document.getElementById('gallery-modal');
const closeGallery = document.getElementById('close-gallery');

let noBtnSize = 1;

yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    flowersContainer.classList.add('show');
    
    // Show envelope after photo appears (1.5 seconds delay)
    setTimeout(() => {
        envelopeWrapper.classList.add('show');
    }, 1500);
});

// Click envelope to open and show letter
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        letter.classList.add('show');
    }, 600);
});

// Close letter
closeLetter.addEventListener('click', (e) => {
    e.stopPropagation();
    letter.classList.remove('show');
    setTimeout(() => {
        envelope.classList.remove('open');
    }, 300);
});

// Open gallery
galleryBtn.addEventListener('click', () => {
    galleryModal.classList.add('show');
});

// Close gallery
closeGallery.addEventListener('click', () => {
    galleryModal.classList.remove('show');
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
