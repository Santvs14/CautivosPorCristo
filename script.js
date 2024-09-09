
//Desahabita los click derecho para proteger el codigo
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        return false;
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Ctrl+Shift+I
        return false;
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});





        document.addEventListener("DOMContentLoaded", function() {
            var menuItems = document.querySelectorAll('nav ul li a');

            menuItems.forEach(function(item) {
                item.addEventListener('click', function() {
                    // Remove active class from all menu items
                    menuItems.forEach(function(item) {
                        item.classList.remove('active');
                    });

                    // Add active class to the clicked menu item
                    this.classList.add('active');
                });
            });
        });
    