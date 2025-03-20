document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('#big-sidebar li');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = '#' + link.getAttribute('id').replace('-link', '');
      scrollToSection(href);
    });
  });

  const audioWave = document.querySelector('.audio-wave');
  setTimeout(() => {
    const bars = document.querySelectorAll('.audio-wave .bar');
    audioWave.classList.remove('playing');
    bars.forEach((bar) => (bar.style.animationPlayState = 'paused'));
  }, 700);

  addLinkBehavior('meeitContent', 'https://www.mee-it.pt');
  addLinkBehavior('adentisContent', 'https://www.adentis.pt/');
  addLinkBehavior('degreeContent', 'https://www.isec.pt/EN/');
  addLinkBehavior('projectWeather', 'https://filipeansilva.github.io/Weather/');
  addLinkBehavior(
    'projectPizzaStore',
    'https://filipeansilva.github.io/PizzaStore'
  );
  addLinkBehavior(
    'projectLibrary',
    'https://filipeansilva.github.io/LibraryVueProject'
  );
  addLinkBehavior(
    'projectRentACar',
    'https://github.com/FilipeanSilva/RentaCar'
  );
  addLinkBehavior(
    'projectVotingDAPP',
    'https://github.com/FilipeanSilva/VotingDApp'
  );

  isIOS();
});

function addLinkBehavior(elementId, link) {
  const element = document.getElementById(elementId);
  element.style.cursor = 'pointer';
  element.addEventListener('click', () => {
    window.open(link);
  });
}

function toggleAnimation() {
  var bars = document.querySelectorAll('.audio-wave .bar');
  bars.forEach(function (bar) {
    var animationPaused =
      window.getComputedStyle(bar).getPropertyValue('animation-play-state') ===
      'paused';
    bar.style.animationPlayState = animationPaused ? 'running' : 'paused';
  });
}

let isPlaying = false;
let audio;
function togglePlay(language) {
  const audioWave = document.querySelector(`#${language}`);
  const bars = audioWave.querySelectorAll('.bar');

  if (!isPlaying) {
    audio = new Audio(`data/Audio/Languages/${language}.m4a`);
    audio.addEventListener('ended', () => {
      audioWave.classList.remove('playing');
      bars.forEach((bar) => (bar.style.animationPlayState = 'paused'));
      isPlaying = false;
    });

    audio.play();
    isPlaying = true;

    audioWave.classList.add('playing');
    bars.forEach((bar) => (bar.style.animationPlayState = 'running'));
  } else {
    if (audioWave.classList.contains('playing')) {
      audio.pause();
      isPlaying = false;

      audioWave.classList.remove('playing');
      bars.forEach((bar) => (bar.style.animationPlayState = 'paused'));
    }
  }
}

function scrollToSection(id) {
  var section = document.querySelector(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
  console.log('isMobile: ', isMobile);
  return isMobile;
};

function isIOS() {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  console.log(`Is iOS? ${isIOS ? 'Yes' : 'No'}`);

  if (isIOS) {
    const elems = document.querySelectorAll('#home, #resume, #contact');
    elems.forEach((elem) => {
      elem.style.backgroundAttachment = 'scroll';
    });
  }
}
