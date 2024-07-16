// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section');
//     let isScrolling = false;

//     window.addEventListener('wheel', (event) => {
//         if (isScrolling) return;
//         isScrolling = true;

//         const direction = event.deltaY > 0 ? 1 : -1;
//         const currentSectionIndex = Math.round(window.scrollY / window.innerHeight);
//         let nextSectionIndex = currentSectionIndex + direction;

//         // Ensure the next section index is within bounds
//         if (nextSectionIndex < 0) nextSectionIndex = 0;
//         if (nextSectionIndex >= sections.length) nextSectionIndex = sections.length - 1;

//         // Scroll to the next section
//         window.scrollTo({
//             top: sections[nextSectionIndex].offsetTop,
//             behavior: 'smooth'
//         });

//         // Wait until the scrolling animation is complete before allowing another scroll
//         setTimeout(() => {
//             isScrolling = false;
//         }, 1000); // Adjust timeout to match the CSS scroll-behavior duration
//     });
// });