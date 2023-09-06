// if('serviceWorker' in navigator){
//     console.log('I can use')
// }

// Confirmar si podemos usar el SW
if( navigator.serviceWorker ){
    // Instalar el SW
    // Si ya se instalo el SW no lo vuelve a instalar
    // Todas la paginas deben de estar enlazadas a la referencia del SW
    navigator.serviceWorker.register('/sw.js')
}