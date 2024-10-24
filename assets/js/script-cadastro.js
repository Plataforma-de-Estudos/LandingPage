// Dark mode
const themeToggle = document.getElementById('theme-toggle');
const logoIcon = document.querySelectorAll('.logoPaulo'); // Ajustado para selecionar a imagem da logo

const darkThemeClass = 'darkmode';
const darkIconSrc = '../assets/img/Imgs_Navbar/Sol.svg';
const lightIconSrc = '../assets/img/Imgs_Navbar/Lua.svg'; // Corrigido para corresponder ao que está no HTML
const paulaoEscuroSrc = '../assets/img/Imgs_Navbar/logoPauloDark.svg'; // Adicione a extensão do arquivo se for SVG
const paulaoClaroSrc = '../assets/img/Imgs_Navbar/logoPaulo.svg';

themeToggle.addEventListener('click', function() {
    if (document.body.classList.contains(darkThemeClass)) {
    themeToggle.src = lightIconSrc;
    logoIcon.forEach((e) => e.src = paulaoClaroSrc);
    } else {
    themeToggle.src = darkIconSrc;
    logoIcon.forEach((e) => e.src = paulaoEscuroSrc);
    }

    // Alternar a classe dark-theme para os elementos especificados
    // document.querySelector('html').classList.add(darkThemeClass);

    document.querySelectorAll('html, h1, body').forEach((e) => {
    if(e.classList.contains(darkThemeClass)) e.classList.remove(darkThemeClass);
    else e.classList.add(darkThemeClass); 

    // console.log(e.classList.contains(darkThemeClass));
    });

});