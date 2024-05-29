window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) { // Exibir o botão quando a rolagem atingir uma certa altura
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
