(function() {
    emailjs.init('dt5AyzrUwLzMnkrYs');
})();

document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let feedback = document.querySelector('.feedback');

    emailjs.sendForm('service_hedz', 'template_hedz', this)
        .then(function() {
            feedback.textContent = 'Mensagem enviada com sucesso!';
        }, function(error) {
            feedback.textContent = 'Falha ao enviar a mensagem. Tente novamente.';
        });
});