class Modal {
	constructor(jQueryEle, modalClass, modalBodyClass) {
		this.ele = jQueryEle;
		this.modalClass = modalClass;
		this.modalBodyClass = modalBodyClass;
	}

	makemodal() {
		$(this.ele).append($('<div class="' + this.modalClass + '">'));
		$('.' + this.modalClass).append($('<div class="' + this.modalBodyClass + '">'));

		$('.' + this.modalClass).css({
			position: 'absolute',
			display: 'none',
			justifyContent: 'center',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0, 0, 0, 0.4)'
		});

		$('.' + this.modalBodyClass).css({
			position: 'absolute',
			top: '50%',
			width: '300px',
			height: '300px',
			padding: '40px',
			textAlign: 'center',
			backgroundColor: 'rgb(255, 255, 255)',
			borderRadius: '10px',
			boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',
			transform: 'translateY(-50%)'
		});


		//modal 내용물
		let modalContents = $('<div class = modalContents>');
		modalContents.css({
			height: '90%',
			width: '100%'
		});


		$('.' + this.modalBodyClass).append(modalContents);

		window.addEventListener('click', (e) => {
			if (e.target == document.querySelector('.' + this.modalClass)) {
				$('.' + this.modalClass).css('display', 'none');
			}
		});
	}

	makeModalContents(tag, attr, text, width, height) {
		let ele = $('<' + tag + ' ' + attr + '>' + text + '<' + tag + '>');
		ele.css({
			width: width,
			height: height
		});
		$('.modalContents').append(ele);
	}

	makeButtons(confirmBtnId) {
		$('.' + this.modalBodyClass).append($('<div class="modalButtonWrapper">'));
		$('.modalButtonWrapper').css({
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			height: '10%'
		});

		let cancelBtn = $('<button>취소</button>');
		let confirmBtn = $('<button id = "' + confirmBtnId + '">추가</button>');

		$('.modalButtonWrapper').append(cancelBtn);
		$('.modalButtonWrapper').append(confirmBtn);

		cancelBtn.css({
			width: '40%',
			height: '100%'
		});

		cancelBtn.on('click', () => this.hideModal());

		confirmBtn.css({
			width: '40%',
			height: '100%'
		});

		confirmBtn.css('margin-left', '2%');
	}

	showModal() {
		$('.' + this.modalClass).css('display', 'flex');
	}

	hideModal() {
		$('.' + this.modalClass).css('display', 'none');
	}

}