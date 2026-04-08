document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Reveal Animations
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // 2. High-Speed Typewriter
    const typewriter = document.getElementById('typewriter');
    if (typewriter) {
        new Typewriter(typewriter, {
            strings: [
                'Scalable AI Solutions', 
                'Modern Full-Stack Apps', 
                'Future-Ready Systems at RNSIT',
                'Clean & Efficient Code'
            ],
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 20
        });
    }

    // 3. Magnetic Hover Effect (Basic Version)
    const items = document.querySelectorAll('.project-item, .social-dock a');
    items.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Optional: Add haptic feedback or sound effects here
        });
    });

    // 4. Navbar Transparency
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.background = "rgba(3, 3, 3, 0.9)";
            nav.style.backdropFilter = "blur(10px)";
        } else {
            nav.style.background = "transparent";
            nav.style.backdropFilter = "none";
        }
    });
});