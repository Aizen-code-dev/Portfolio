// Get all links
const links = document.querySelectorAll('#ul1 li a');

// Add event listener to each link
links.forEach((link) => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        links.forEach((otherLink) => {
            otherLink.classList.remove('active');
        });
        // Add active class to the clicked link
        link.classList.add('active');
        // Move the active link to the clicked link
        const activeLink = document.querySelector('#ul1 li a.active');
        const clickedLink = link;
        const activeLinkRect = activeLink.getBoundingClientRect();
        const clickedLinkRect = clickedLink.getBoundingClientRect();
        activeLink.style.left = `${clickedLinkRect.left - activeLinkRect.left}px`;
    });
});