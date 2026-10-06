const posterData = [
  {
    tag: 'Night of Reverie',
    index: '01 / 04',
    poem: 'یہ آسمان\nلوگوں کے خوابوں سے گھرا ہوا ہے',
    poet: '— Mirza Ghalib',
    theme: 'poster-thumb--one'
  },
  {
    tag: 'Fading Echo',
    index: '02 / 04',
    poem: 'آج بھی شب کے دل میں\nکچھ خاموشی کی آواز ہے',
    poet: '— Faiz Ahmad Faiz',
    theme: 'poster-thumb--two'
  },
  {
    tag: 'Testimony of the Heart',
    index: '03 / 04',
    poem: 'دل کی گواہی\nیہاں ہر لمحہ زبان بن جاتا ہے',
    poet: '— Allama Iqbal',
    theme: 'poster-thumb--three'
  },
  {
    tag: 'Colour of Night',
    index: '04 / 04',
    poem: 'رنگِ شب\nمستقبل کے خواب میں ڈھلتا ہے',
    poet: '— Parveen Shakir',
    theme: 'poster-thumb--four'
  }
];

const cards = [...document.querySelectorAll('.poster-card')];
const dialog = document.getElementById('poster-dialog');
const dialogVerse = document.getElementById('dialog-verse');
const dialogPoet = document.getElementById('dialog-poet');
const dialogTag = document.getElementById('dialog-tag');
const dialogIndex = document.getElementById('dialog-index');
const dialogArt = document.getElementById('dialog-art');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const closeBtn = document.querySelector('.dialog-close');

let currentIndex = 0;

function renderPoster(index) {
  const current = posterData[index];
  dialogArt.className = 'dialog-art';
  dialogArt.classList.add(current.theme);
  dialogTag.textContent = current.tag;
  dialogIndex.textContent = current.index;
  dialogVerse.textContent = current.poem;
  dialogPoet.textContent = current.poet;
}

function openPoster(index) {
  currentIndex = index;
  renderPoster(currentIndex);
  dialog.showModal();
}

function closePoster() {
  dialog.close();
}

cards.forEach((card) => {
  card.addEventListener('click', () => {
    openPoster(Number(card.dataset.index));
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPoster(Number(card.dataset.index));
    }
  });
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % posterData.length;
  renderPoster(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + posterData.length) % posterData.length;
  renderPoster(currentIndex);
});

closeBtn.addEventListener('click', closePoster);

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    closePoster();
  }
});

document.addEventListener('keydown', (event) => {
  if (!dialog.open) return;

  if (event.key === 'Escape') {
    closePoster();
  }

  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % posterData.length;
    renderPoster(currentIndex);
  }

  if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + posterData.length) % posterData.length;
    renderPoster(currentIndex);
  }
});
