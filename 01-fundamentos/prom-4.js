function sumarLento(numero){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            // reject('Sumar lento fallo');
            resolve(numero + 1);
        }, 800);
    });
}

let sumarRapido = numero => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error en sumar rapido');
            //resolve(numero + 1)
        }, 300);
    }); 
}

// Solo muestra la promesa que responda primero
// Cuando una de las promesas da error cansela todo el proceso
Promise.race([sumarLento(5), sumarRapido(10)])
    .then(respuesta => console.log(respuesta))
    .catch(console.log);

