// dispara o que está dentro de {} depois de carregar a página (html, css...), executa depois de carregar a página
window.onload = () => {
    // ativa o modo estrito do javascript
    'use strict';

    // verifica se o navegador suporta o 'serviceWorker', se não suportar, não irá executar o pwa
    if ('serviceWorker' in navigator) {
        // registra o serviceWorker no navegador, localizado em 'sw/js'
        navigator.serviceWorker
                    .register('.sw/js');
    }
}