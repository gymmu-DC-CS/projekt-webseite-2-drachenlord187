


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        
        console.log("Navigiere zu: " + this.getAttribute('href'));
    });
});