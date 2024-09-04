const cacheName = 'cartao-de-visita';

// arquivos que ficarão para cache
const filesToCache = [
    // colocando a raiz do projeto
    './',
    './index.html',
    './css/styles.css',
    './img/sasuke.jpg',
    './img/facebook.png',
    './img/instagram.png',
    './img/tik-tok.png',
    './js/main.js'
]

// instalar o service worker e armazenas em cache

self.addEventListener('install', event => {
    event.waitUntil(
        // adicionando arquivos para cache
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache);
        })
    )
})

// utiliza os arquivos de cache qunado estiver offline

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(Response => {
            return response || fetch(event.request);
        })
    )
})