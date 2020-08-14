$("#contactsForm").validate({
	rules: {
		'contacts-mail': {
			required: true,
			email: true,
		},
		'contacts-phone': {
			required: true,
			mobileRU: true,
		}
	},
	messages: {
		'contacts-mail': {
			email: "Мы не сможем прислать письмо по этому адресу",
			required: "Мы не сможем прислать письмо по этому адресу",
		},
		'contacts-phone': {
			mobileRU: "Мы не сможем дозвониться по этому номеру",
			required: "Мы не сможем дозвониться по этому номеру",
		},
		contacts: {
			onsubmit: "Отправлено",
		}
	}
});