
// Ciclo de vida del SW
// S edispara al momento de instalar el SW
self.addEventListener('install', event => {
    // Descargar assets
    // Crear un cache
    
    console.log('SW: Instalando service worker');

    const instalacion = new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminada');
            self.skipWaiting();
            resolve();
        });
    });

    // Recibe una promesa
    event.waitUntil(instalacion);
    
});



// Cuando el SW toma cl control de la aplicación
// Se dispara una vez que el SW esta activo
self.addEventListener('activate', event => {
    // Borrar cache viejo

    console.log('SW: Activo y listo para controlar la app')
});


// FECTH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    // // Aplicar estrategias de Cache
    // console.log('SW', event.request.url);

    // if(event.request.url.includes('https://reqres.in/')){
    //     const resp = new Response(`{ok: false, mensaje: 'Hola Mundo'}`);
    //     event.respondWith(resp);
    // }

});

// SYNC: Recuperamos la conexion a internet 
self.addEventListener('sync', event => {
    console.log('Tenemos conexion');
    console.log(event);
    console.log(event.tag);
});


// PUSH: Manejar las push notifications
self.addEventListener('push', event => {
    console.log('Notificacion recibida');
});