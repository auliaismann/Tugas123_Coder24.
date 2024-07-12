const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const btnLogin = document.querySelector('#btnLogin');
const message = document.querySelector('#message');

let database = [
    {
        'email': 'ismanaulia6@gmail.com', 
        'password': 'password'
    },
    {
        'email': 'admin@gmail.com', 
        'password': 'password'
    }
]
btnLogin.addEventListener('click', (event) => {
    event.preventDefault(); // Menambahkan preventDefault untuk menghentikan refresh halaman

    let email = emailInput.value; 
    let password = passwordInput.value;

    if (email === ''){
        alert('Email tidak boleh kosong'); 
    }
    if (password === ''){
        alert('Password tidak boleh kosong'); 
    }
    if (email !== '' && password !== '') {
        let user = database.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Login berhasil');
        } else {
            alert('Email atau password salah');
        }
    }
});
