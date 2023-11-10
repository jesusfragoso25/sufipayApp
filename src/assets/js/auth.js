import Swal from 'sweetalert2';

const userTest = 'usuario1@gmail.com'
const passTest = '12345'


export function authUser(username, password) {
    let isValid = true; 

    if (username.trim() === '' || password.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, llena todos los campos correctamente",
            customClass: 'mi-swal2-popup',
        });
        isValid = false; 
    }

    if (isValid && (username !== userTest || password !== passTest)) {
        Swal.fire({
            icon: "error",
            title: "Usuario y/o contraseña no válidos",
            text: "Por favor, verifica la informacion digitada",
            customClass: 'mi-swal2-popup',
        });
        isValid = false; 
    }

    return isValid;
}
