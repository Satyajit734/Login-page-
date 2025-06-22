 document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');

        
            const correctUsername = 'user';
            const correctPassword = 'password123'; 

            loginForm.addEventListener('submit', (event) => {
                event.preventDefault(); 

                const usernameInput = document.getElementById('username').value;
                const passwordInput = document.getElementById('password').value;

                if (usernameInput === correctUsername && passwordInput === correctPassword) {
                    alert('Login successful! Welcome!');
                    
                } else {
                    alert('Invalid username or password. Please try again.');
                }
            });
        });