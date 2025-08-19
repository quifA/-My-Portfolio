// Smooth scroll
const lenis = new Lenis({ smoothWheel: true });
function raf(time){ lenis.raf(time); requestAnimationFrame(raf) }
requestAnimationFrame(raf);

// GSAP scroll animations
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray("[data-anim]").forEach((el, i) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: i * 0.05,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",   // يبدأ لما يدخل 20% من تحت الشاشة
      toggleActions: "play none none reverse"
    }
  });
});

// شريط التنقل: تفعيل الرابط الحالي عند التمرير
document.querySelectorAll('header nav a').forEach(a=>{
  const id = a.getAttribute('href');
  if(!id.startsWith('#')) return;
  const sec = document.querySelector(id);
  if(!sec) return;
  ScrollTrigger.create({
    trigger: sec,
    start: "top center",
    end: "bottom center",
    onEnter: ()=>a.classList.add('active'),
    onLeave: ()=>a.classList.remove('active'),
    onEnterBack: ()=>a.classList.add('active'),
    onLeaveBack: ()=>a.classList.remove('active'),
  });
});
