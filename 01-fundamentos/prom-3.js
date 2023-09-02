function sumarLento(numero){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero + 1);
        }, 800);
    });
}

let sumarRapido = numero => {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(numero + 1);
        }, 800);
    }); 
}