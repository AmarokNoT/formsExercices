const username = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmP = document.querySelector('#confirmPassword')

// console.log(username.value)
function validerUsername(username) {
    // Vérifier si la longueur est entre 5 et 10 caractères
    if (username.length >= 5 && username.length <= 10) {
        // Vérifier si tous les caractères sont des lettres minuscules
        let regex = /^[a-z]+$/;  // Regex qui accepte uniquement les minuscules
        return regex.test(username);
    } else {
        return false;  // Si la longueur n'est pas respectée
    }
}

function validerEmail(email) {
    let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email)
}

function validatePassword(password) {
    if (password.length >= 8 && username.length <= 15) {
        return password
    } else {
        return false
    }
}


if (validerUsername(username.value)) {
    console.log('username valide')
} else {
    console.log('username invalide')
}

if (validerEmail(email.value)) {
    console.log('mail valide')
} else {
    console.log('mail invalide')
}

if (validatePassword(password.value)) {
    console.log('password valide')
} else {
    console.log('password invalide')
}

if (password.value === confirmP.value) {
    console.log('password confirm valide')
} else {
    console.log('password confirm invalide')
}
