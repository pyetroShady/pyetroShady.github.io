document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading para imagens
    document.addEventListener('lazybeforeunveil', function(e){
        var bg = e.target.getAttribute('data-bg');
        if(bg){
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    });

    // Funcionalidade do Modal de Projetos
    var projectModal = document.getElementById('projectModal');
    projectModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget; // Botão que acionou o modal
        var title = button.getAttribute('data-title');
        var description = button.getAttribute('data-description');

        var modalTitle = projectModal.querySelector('.modal-title');
        var modalDescription = projectModal.querySelector('#projectModalDescription');

        modalTitle.textContent = title;
        modalDescription.textContent = description;
    });

    // Animação da Navbar ao scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('navbar-scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('navbar-scrolled');
        }
    });
});


