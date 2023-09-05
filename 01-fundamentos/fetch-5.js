fetch('https://reqres.in/api/users/10')
    .then(resp => { 
        // resp.clone().json()
        //     .then(usuario => {
        //         console.log(usuario.data);
        //     });
        // resp.clone().json()
        //     .then(usuario => {
        //         console.log(usuario.data);
        //     });
        // resp.json()
        //     .then(usuario => {
        //         console.log(usuario.data);
        //     });
        if(resp.ok){
            return resp.json();
        }else{
            //console.log('No existe el usuario');
            throw new Error('No existe el usuario')
        }
    })
    .then(console.log)
    .catch(error => {
        console.log('Error en la peticion');
        console.log(error);
    });