var bodyElement;

document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o elemento <body>
    bodyElement = document.body;
});

const btnMenu = document.getElementById('btn-menu');
const menuDiv = document.getElementById('menu-mobile');

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('x');
    menuDiv.classList.toggle('abrir');
    
    if (menuDiv.classList.contains('abrir')) {
        // Aplica overflow: hidden ao corpo da página quando o menu é aberto
        bodyElement.style.overflow = "hidden";
    } else {
        // Remove overflow: hidden do corpo da página quando o menu é fechado
        bodyElement.style.overflow = "";
    }
});

menuDiv.addEventListener('click', function() {
    btnMenu.classList.remove('x');
    menuDiv.classList.remove('abrir');
    
    // Remove overflow: hidden do corpo da página quando o menu é fechado
    bodyElement.style.overflow = "";
});

// Efeito da chama do Foguete :)
function goTop(){
    document.querySelector('.flame').style.display = 'block'; 
    setTimeout(function() {
        document.querySelector('.flame').style.display = 'none';
    }, 700);

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// Adiciona um evento para garantir que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Obtém a referência ao elemento da logo pelo ID
    const logo = document.getElementById('logo');
    // Verifica se a logo existe
    if (logo) {
        // Adiciona um evento de clique à logo
        logo.addEventListener('click', () => {
            // Recarrega a página
            window.location.reload();
        });
    }
});