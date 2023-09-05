function retornaTrue(){
    return true;
}

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
        setTimeout(() =>resolve(numero + 1), 300);
    }); 
}

// sumarLento(5).then(console.log);
// sumarRapido(10).then(console.log);

let cosas = [sumarLento(5), sumarRapido(10), true, 'Hola Mundo', retornaTrue()];

//Responden las dos promesas en el oreden que se esta pasando el arreglo
// Si una de las promesas que se pasa como argumento en el arreglo falla toda la promesa
Promise.all( cosas )
    .then(respuestas => console.log(respuestas))
    .catch(console.log)