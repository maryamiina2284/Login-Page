document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const closeModal = document.getElementsByClassName('close')[0];
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Open the modal when "Forgot Password?" is clicked
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        forgotPasswordModal.style.display = 'block';
    });

    // Close the modal
    closeModal.addEventListener('click', () => {
        forgotPasswordModal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target == forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });

    // Handle forgot password form submission
    forgotPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Password reset link sent to ' + document.getElementById('reset-email').value);
        forgotPasswordModal.style.display = 'none';
    });

    // Handle login form submission (example)
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
    });
});
