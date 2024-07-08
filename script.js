document.addEventListener('DOMContentLoaded', function() {
  const imageContent = document.querySelector('.image_content');
  const elt = document.querySelector('.icon_texts');
  const images = imageContent.querySelectorAll('img');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      imageContent.classList.add('scrolled');
      elt.classList.add('scrolled');
      images.forEach(img => img.classList.add('fade-in'));
    } else {
      imageContent.classList.remove('scrolled');
      elt.classList.remove('scrolled');
      images.forEach(img => img.classList.remove('fade-in'));
    }
  });

  const sections = document.querySelectorAll('.image_content, .ELT, .icon_texts, .main_div, .RBP, .HC, .customers, .TD');

  window.addEventListener('scroll', function() {
    sections.forEach(function(section) {
      if (isInViewport(section)) {
        section.classList.add('scrolled');
      }
    });
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
