const video = document.querySelector('.video');

function fadeOutEffect() {
  setTimeout(() => {
    video.style.opacity = '0';
    video.addEventListener('transitionend', () => {
      video.remove();
    })
  }, 1000)
}
window.onload = fadeOutEffect;

/*****************************************/

window.addEventListener('scroll', reveal);

function reveal() {

  let reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}