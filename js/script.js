let currentSectionIndex = 0;
const sections = document.querySelectorAll('section');

function scrollToSection(index) {
    window.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
    });
}

// function handleScroll(event) {
//     if (event.deltaY > 0) {
//         // Scroll down
//         if (currentSectionIndex < sections.length - 1) {
//             currentSectionIndex++;
//         }
//     } else {
//         // Scroll up
//         if (currentSectionIndex > 0) {
//             currentSectionIndex--;
//         }
//     }
//     scrollToSection(currentSectionIndex);
// }

// window.addEventListener('wheel', handleScroll);


document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all tabs
            tabs.forEach(tab => tab.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Show clicked tab content
            const target = this.getAttribute('href');
            document.querySelector(target).classList.add('active');
        });
    });
});

