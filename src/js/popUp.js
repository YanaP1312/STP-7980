document.addEventListener('DOMContentLoaded', function () {
  const cookiesOverlay = document.querySelector('.cookies-overlay');
  const acceptBtn = document.querySelector('.cookies-yes');
  const declineBtn = document.querySelector('.cookies-no');

  function showCookiesPopup() {
    if (!localStorage.getItem('cookiesAccepted')) {
      setTimeout(() => {
        cookiesOverlay.classList.add('show');
      }, 1500);
    }
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiesOverlay.classList.remove('show');
  });

  declineBtn.addEventListener('click', () => {
    cookiesOverlay.classList.remove('show');
  });

  showCookiesPopup();
});
