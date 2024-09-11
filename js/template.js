function runApp() {

    /* Oculta o menu na inicialização */
    resizeMenu();

    /* Quando a janela for redimensionada chama resizeMenu() */
    $(window).resize(resizeMenu);

    /* Quando do botão do menu for clicado chama a função toggleMenu() */
    $('#toggleMenu').click(toggleMenu);
}

function resizeMenu() {

    /*
    Se a largura da tela é maior que 639px, exibe 0 nemu (showMenu)
    e oculta o smoke (noSmoke = true).
    Se não (else), sempre oculta o menu (hideMenu)

    Resolve o dilerma da sanfona.
    */
    if (window.innerWidth >= 600) {
        showMenu(true);
    } else {
        hideMenu();
    }
}

function toggleMenu() {

    if ($('#wrap>nav').is(':visible')) {
        hideMenu();
    } else {
        showMenu();
    }
    return false;
}

/* Exibe o menu */
function showMenu(noSmoke) {
    $('#wrap>nav').show('fast');

    if (noSmoke) {
        $('#menuSmoke').hide('fast');
        $('body').css('overflow', 'auto');
    } else {
        $('#menuSmoke').show('fast');
        $('body').css('overflow', 'hidden');
    }

    
}

/* oculta o menu */
function hideMenu() {
    $('#wrap>nav').hide('fast');
    $('#menuSmoke').hide('fast');
    $('body').css('overflow', 'auto');
}

$(document).ready(runApp);