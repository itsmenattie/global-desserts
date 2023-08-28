window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 60) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });