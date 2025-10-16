// // Minimal, readable JS for:
// // - theme toggle (persisted)
// // - reveal-on-scroll animations
// // - nav active link highlight
// // - animate skill bars when visible
// // Also includes a small jQuery snippet (to satisfy assignment jQuery usage)

// (function(){
//   // jQuery usage: subtle nav hover and focus styling
//   if (window.jQuery) {
//     $(function(){
//       $('.main-nav a.nav-link').hover(
//         function(){ $(this).css({'transform':'translateY(-3px)','transition':'transform 160ms'}); },
//         function(){ $(this).css({'transform':'none'}); }
//       );
//       // add small aria helper on focus for keyboard users
//       $('.main-nav a.nav-link').on('focus', function(){ $(this).css('outline','2px solid rgba(124, 234, 189, 0.18)'); })
//                              .on('blur', function(){ $(this).css('outline','none'); });
//     });
//   }

//   // Vanilla JS core behavior
//   const toggles = document.querySelectorAll('#themeToggle, #themeToggle2, #themeToggle3');
//   const html = document.documentElement;
//   const THEME_KEY = 'site-theme';
//   const saved = localStorage.getItem(THEME_KEY);
//   if (saved === 'light') html.classList.add('light');

//   function toggleTheme(){
//     const isLight = html.classList.toggle('light');
//     localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
//     toggles.forEach(btn => btn.setAttribute('aria-pressed', isLight));
//   }
//   toggles.forEach(btn => btn.addEventListener('click', toggleTheme));

//   // set year placeholders
//   const y = new Date().getFullYear();
//   document.querySelectorAll('#year, #year2, #year3').forEach(el => el && (el.textContent = y));

//   // highlight nav link by current filename
//   (function highlightNav(){
//     const links = document.querySelectorAll('.main-nav a.nav-link');
//     const path = location.pathname.split('/').pop() || 'index.html';
//     links.forEach(a => {
//       a.classList.remove('active');
//       const href = a.getAttribute('href');
//       if (href === path) a.classList.add('active');
//     });
//   })();

//   // IntersectionObserver for reveal & skill bars
//   const observer = new IntersectionObserver((entries)=>{
//     entries.forEach(entry=>{
//       if (entry.isIntersecting){
//         entry.target.classList.add('is-visible');
//         const bars = entry.target.querySelectorAll('.bar span');
//         bars.forEach((s,i) => {
//           const pct = s.style.getPropertyValue('--pct') || s.getAttribute('data-pct') || '60%';
//           setTimeout(()=> s.style.width = pct, 120 * (i+1));
//         });
//       }
//     });
//   }, {threshold: 0.12});
//   document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

//   // fallback animate bars if already visible
//   document.querySelectorAll('.bar span').forEach(s=>{
//     const rect = s.getBoundingClientRect();
//     if (rect.top < window.innerHeight) {
//       const pct = s.style.getPropertyValue('--pct') || '60%';
//       s.style.width = pct;
//     }
//   });

//   // small keyboard nav helper
//   document.addEventListener('keydown', e => {
//     if (e.key === 'Tab') document.documentElement.classList.add('user-tab');
//   });
// })();


/*
* The original jQuery hover logic for the navigation was removed.
* CSS :hover is more performant for simple style changes.
*
* If you need a more complex animation or interactive feature, 
* add it here. For now, the file is empty as all requested features 
* (dark theme, modern style, simple animations) are covered by CSS.
*/
$(document).ready(function(){
  // Example for a more complex jQuery animation (optional)
  // $(".intro-text").hide().fadeIn(1500); 
});