function handleLogin(event) {
    event.preventDefault(); 

   
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'admin' && password === 'password') { 
        
        window.location.href = 'index.html'; 
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
}