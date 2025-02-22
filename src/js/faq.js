document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.question');

    question.addEventListener('click', () => {
      faqItems.forEach(el => {
        if (el !== item) {
          el.classList.remove('open');
        }
      });

      item.classList.toggle('open');
    });
  });
});
