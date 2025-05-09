const navLinks = document.querySelectorAll('.navLink');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

//use e.preventdefault cuz they a tags default behaviour (jumping to a section or new URL)