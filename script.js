document.addEventListener('DOMContentLoaded', function() {
    
    const navbar = document.getElementById('navbar');

    
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }

    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    
    const menuItems = document.querySelectorAll('#navbar ul li a');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#555';
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});
