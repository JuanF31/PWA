//1. Se descarga
//2. Se instala
//3. Se activa
// Pasos que suceden cuando no existe ningun service worker

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {

            // setTimeout(() => {

            //     reg.sync.register('posteo-anime');
            //     console.log('Se enviaron fotos de animes al servidor');
            
            // }, 7000);
            Notification.requestPermission().then(result => {
                console.log(result);
                reg.showNotification('Hola Mundo');
            }); 
        });
}

// if( window.SyncManager ){

// }

// fetch('https://reqres.in/api/users')
//     .then(resp => resp.text())
//     .then(console.log);
