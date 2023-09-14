

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

// Revisar si soporta el cache
if(window.caches){

    //Crearc cache
    caches.open('prueba-1');
    caches.open('prueba-2');

    // // Comprueba si existe el cache
    // caches.has('prueba-2')
    //     .then(existe => console.log(existe));

    // // Eliminar un cache
    // caches.delete('prueba-1')
    //     .then(console.log);

    caches.open('cache-v1.1')
        .then( cache => {
            cache.add('/index.html');

            cache.addAll([
                '/index.html',
                '/css/style.css',
                'img/main.jpg'
            ]).then(() => {
                //cache.delete('/css/style.css');
                cache.put('index.html', new Response('Hola Mundo'))
            });


            // cache.match('/index.html')
            //     .then(resp => {
            //         resp.text().then(console.log)
            //     });

            cache.keys().then(keys => {
                console.log(keys);
            });

        });



}