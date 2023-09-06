
// Evento de peticiones
self.addEventListener('fetch', event => {

    const resp = fetch(event.request)
    .then(resp => {
        return resp.ok ? resp : fetch('img/main.jpg');
        // if( resp.ok ){
        //     return resp;
        // }else{
        //     return fetch('img/main.jpg');
        // }
    })
    event.respondWith(
        // respondWith() debe de regresar una promesa
        // O una promesa que regrese una respuesta
        resp
    );

    // if(event.request.url.includes('main.jpg')){

    //     let patasArriba = fetch('img/main-patas-arriba.jpg');
    //     event.respondWith(patasArriba);

    // }


    // if(event.request.url.includes('style.css')){
    //     event.respondWith( null );
    // }else{
    //     event.respondWith( fetch(event.request) );
    // }
    //console.log(event.request)

    // if(event.request.url.includes('.jpg')){
    //     console.log(event.request.url);

    //     //let fotoReq = fetch('img/main.jpg');
    //     //let fotoReq = fetch(event.request.url);
    //     //let fotoReq = fetch(event.request);
    //     event.respondWith( fotoReq );
    // }

    // if(event.request.url.includes('style.css')){
    //     let respuesta = new Response(`
    //         body{
    //             background-color: red !important;
    //             color: pink;
    //         }
    //     `, {
    //         headers: {
    //             'Content-Type' : 'text/css'
    //         }
    //     });
    //     event.respondWith(respuesta);
    // }
});