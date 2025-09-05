
// Scroll-to-top button
const topBtn = document.querySelector('.scroll-top');
topBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

// Intersection Observer to animate elements on scroll
const reveal = (el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(12px)';
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        el.style.transition = 'opacity .6s ease, transform .6s ease';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        observer.unobserve(el);
      }
    });
  }, {threshold: .08});
  observer.observe(el);
};

document.querySelectorAll('.section, .card, .timeline-item, .project').forEach(reveal);

// Keyboard skip links
document.addEventListener('keydown', (e) => {
  if(e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey)){
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  }
});
