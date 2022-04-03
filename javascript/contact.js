let btn = document.querySelector('.inputBoton');
document.getElementById('form').addEventListener('submit', function (event) {
	emailjs.init('-e47niS5ubsKQvh4x');
	event.preventDefault();
	btn.value = 'SENDING..'
	emailjs.sendForm('service_2hevfag', 'template_my076za', this)
		.then(function () {
			Toastify({
                text: "EMAIL SENT SUCCESFULLY",
                close: true,
                duration: 2000,
                gravity: "top",
                className: "styleToastify",
                style: {
                    background: "black",
                }
            }).showToast()
			btn.value = 'SUBMIT';
			console.log('Mail status: success');
		}, function (error) {
			console.log('Mail status: failed', error);
		});
});