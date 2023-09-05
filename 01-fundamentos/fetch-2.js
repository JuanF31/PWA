// Peticion GET
//'https://reqres.in/api/users'


// fetch('https://reqres.in/api/users')
//     .then(resp => resp.json())
//     .then(respObj => console.log(respObj.data));


// No se hace
// Activar la extensio de Allow Cors Domain de Google
// fetch('https://www.wikipedia.org')
//     .then(resp => resp.text())
//     .then(html  => {
//         document.open();
//         document.write(html);
//         document.close();
//     });

fetch('https://vmcorrea.com')
    .then(resp => resp.text())
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    });