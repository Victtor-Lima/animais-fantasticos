export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-scroll="anime-scroll"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVsible = (sectionTop - windowMetade) < 0;
      if (isSectionVsible)
        section.classList.add('ativo');
      else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if(sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  };
}
