// ==========================================================

const keyboard = [{
	key: '`',
	keyRu: 'ё',
	code: 'Backquote',
},
{
	key: '1',
	code: 'Digit1',
},
{
	key: '2',
	code: 'Digit2',
},
{
	key: '3',
	code: 'Digit3',
},
{
	key: '4',
	code: 'Digit4',
},
{
	key: '5',
	code: 'Digit5',
},
{
	key: '6',
	code: 'Digit6',
},
{
	key: '7',
	code: 'Digit7',
},
{
	key: '8',
	code: 'Digit8',
},
{
	key: '9',
	code: 'Digit9',
},
{
	key: '0',
	code: 'Digit0',
},
{
	key: '-',
	code: 'Minus',
},
{
	key: '=',
	code: 'Equal',
},
{
	key: 'Backspace',
	code: 'Backspace',
},
{
	key: 'Tab',
	code: 'Tab',
},
{
	key: 'q',
	keyRu: 'й',
	code: 'KeyQ',
},
{
	key: 'w',
	keyRu: 'ц',
	code: 'KeyW',
},
{
	key: 'e',
	keyRu: 'у',
	code: 'KeyE',
},
{
	key: 'r',
	keyRu: 'к',
	code: 'KeyR',
},
{
	key: 't',
	keyRu: 'е',
	code: 'KeyT',
},
{
	key: 'y',
	keyRu: 'н',
	code: 'KeyY',
},
{
	key: 'u',
	keyRu: 'г',
	code: 'KeyU',
},
{
	key: 'i',
	keyRu: 'ш',
	code: 'KeyI',
},
{
	key: 'o',
	keyRu: 'щ',
	code: 'KeyO',
},
{
	key: 'p',
	keyRu: 'з',
	code: 'KeyP',
},
{
	key: '[',
	keyRu: 'х',
	code: 'BracketLeft',
},
{
	key: ']',
	keyRu: 'ъ',
	code: 'BracketRight',
},
{
	key: '\\',
	code: 'Backslash',
},
/*{
	key: 'Delete',
	code: 'Delete',
},*/
{
	key: 'CapsLock',
	code: 'CapsLock',
},
{
	key: 'a',
	keyRu: 'ф',
	code: 'KeyA',
},
{
	key: 's',
	keyRu: 'ы',
	code: 'KeyS',
},
{
	key: 'd',
	keyRu: 'в',
	code: 'KeyD',
},
{
	key: 'f',
	keyRu: 'а',
	code: 'KeyF',
},
{
	key: 'g',
	keyRu: 'п',
	code: 'KeyG',
},
{
	key: 'h',
	keyRu: 'р',
	code: 'KeyH',
},
{
	key: 'j',
	keyRu: 'о',
	code: 'KeyJ',
},
{
	key: 'k',
	keyRu: 'л',
	code: 'KeyK',
},
{
	key: 'l',
	keyRu: 'д',
	code: 'KeyL',
},
{
	key: ';',
	keyRu: 'ж',
	code: 'Semicolon',
},
{
	key: "'",
	keyRu: 'э',
	code: 'Quote',
},
{
	key: 'Enter',
	code: 'Enter',
},
{
	key: 'Shift',
	code: 'ShiftLeft',
},
{
	key: 'z',
	keyRu: 'я',
	code: 'KeyZ',
},
{
	key: 'x',
	keyRu: 'ч',
	code: 'KeyX',
},
{
	key: 'c',
	keyRu: 'с',
	code: 'KeyC',
},
{
	key: 'v',
	keyRu: 'м',
	code: 'KeyV',
},
{
	key: 'b',
	keyRu: 'и',
	code: 'KeyB',
},
{
	key: 'n',
	keyRu: 'т',
	code: 'KeyN',
},
{
	key: 'm',
	keyRu: 'ь',
	code: 'KeyM',
},
{
	key: ',',
	keyRu: 'б',
	code: 'Comma',
},
{
	key: '.',
	keyRu: 'ю',
	code: 'Period',
},
{
	key: '/',
	keyRu: '.',
	code: 'Slash',
},
{
	key: '↑',
	code: 'ArrowUp',
},
{
	key: 'Shift',
	code: 'ShiftRight',
},
{
	key: 'Control',
	code: 'ControlLeft',
},
{
	key: 'Meta',
	code: 'MetaLeft',
},
{
	key: 'Alt',
	code: 'AltLeft',
},
{
	key: ' ',
	code: 'Space',
},
{
	key: 'Alt',
	code: 'AltRight',
},
{
	key: '←',
	code: 'ArrowLeft',

},
{
	key: '↓',
	code: 'ArrowDown',
},
{
	key: '→',
	code: 'ArrowRight',
},
{
	key: 'Control',
	code: 'ControlRight',
},
];

class KeyboardClass {
	constructor() {
		this.value = '';

		this.body = document.querySelector('body');
		this.textArea = null;
		this.keyboardBody = null;
		this.keys = [];

		this.lang = 'en';
		this.capsLk = false;
	}

	init() {
		// Create keyboard HTML
		this.keyboardBody = document.createElement('div');
		this.keyboardBody.classList.add('keyboard');
		this.body.prepend(this.keyboardBody);

		// Create textarea HTML
		this.textArea = document.createElement('textarea');
		this.textArea.classList.add('textarea');
		this.body.prepend(this.textArea);

		const text = '<div class="text">Клавиатура создана в операционной системе Windows <br/> Для переключения языка комбинация: левыe ctrl + alt</div>';
		this.keyboardBody.insertAdjacentHTML('afterend', text);
	}

	createBtns() {

		keyboard.map((item) => {
			const key = document.createElement('div');
			key.classList.add('keyboard__key');
			key.setAttribute('data-key', item.code);

			if (this.lang === 'ru' && item.keyRu !== undefined) {
				this.capsLk === false
					? key.textContent = item.keyRu.toLowerCase()
					: key.textContent = item.keyRu.toUpperCase();
			} else {
				this.capsLk === false
					? key.textContent = item.key.toLowerCase()
					: key.textContent = item.key.toUpperCase();
			}

			switch (item.code) {
				case 'Space':
					key.classList.add('space');
					key.addEventListener('click', () => {
						this.value += ' ';
						this.textArea.value = this.value;
					});
					break;

				case 'Backspace':
					key.classList.add('backspace');
					key.addEventListener('click', () => {
						this.value = this.value.substring(0, this.value.length - 1);
						this.textArea.value = this.value;
					});
					break;

				case 'Enter':
					key.addEventListener('click', () => {
						this.value += '\n';
						this.textArea.value = this.value;
					});
					break;

				case 'Tab':
					key.addEventListener('click', () => {
						this.value += '        ';
						this.textArea.value = this.value;
					});
					break;


				case 'ShiftRight':
				case 'ShiftLeft':
					// key.textContent = item.key.toUpperCase();
					break;

				case 'Delete':
				case 'CapsLock':
				// case 'ShiftRight':
				// case 'ShiftLeft':
				case 'ControlRight':
				case 'ControlLeft':
				case 'AltRight':
				case 'AltLeft':
				case 'MetaLeft':
					break;

				default:
					key.addEventListener('click', () => {
						if (this.lang === 'ru' && item.keyRu !== undefined) {
							this.capsLk === false
								? this.value += item.keyRu.toLowerCase()
								: this.value += item.keyRu.toUpperCase();
						} else {
							this.capsLk === false
								? this.value += item.key.toLowerCase()
								: this.value += item.key.toUpperCase();
						}
						this.textArea.value = this.value;
					});
			}

			this.keyboardBody.append(key);

			if (item.code === 'Backspace' || item.code === 'Backslash' || item.code === 'Enter' || item.code === 'ShiftRight') {
				this.keyboardBody.append(document.createElement('br'));
			}
		});
		this.keys = this.keyboardBody.querySelectorAll('.keyboard__key');
	}

	switchCase() {

		let checkCaps = () => {
			this.capsLk === false ? this.capsLk = true : this.capsLk = false;

			setTimeout(() => {
				this.keyboardBody.innerHTML = '';
				this.createBtns();
			}, 200);
		}

		document.addEventListener('keydown', (event) => {
			if (event.code === 'CapsLock') {
				checkCaps();
			}
		});

		this.keyboardBody.addEventListener('click', (event) => {
			if (event.target.dataset.key === 'CapsLock') {
				checkCaps();
			}
		});
	}

	lightBtn() {
		this.keyboardBody.addEventListener('click', (event) => {
			event.target.classList.add('active');
			setTimeout(() => {
				event.target.classList.remove('active');
			}, 300);
		});
	}

	listenKeyboard() {
		this.body.addEventListener('keydown', (event) => {

			switch (event.code) {
				case 'Space':
					this.value += ' ';
					this.textArea.value = this.value;
					break;

				case 'Backspace':
					this.value = this.value.substring(0, this.value.length - 1);
					this.textArea.value = this.value;
					break;

				case 'Enter':
					this.value += '\n';
					this.textArea.value = this.value;
					break;

				case 'ArrowLeft':
					this.value += '←';
					this.textArea.value = this.value;
					break;

				case 'ArrowRight':
					this.value += '→';
					this.textArea.value = this.value;
					break;

				case 'ArrowDown':
					this.value += '↓';
					this.textArea.value = this.value;
					break;

				case 'ArrowUp':
					this.value += '↑';
					this.textArea.value = this.value;
					break;

				case 'Tab':
					this.value += '         ';
					this.textArea.value = this.value;
					break;

				case 'Delete':
				case 'CapsLock':
				case 'ShiftRight':
				case 'ShiftLeft':
				case 'ControlRight':
				case 'ControlLeft':
				case 'AltRight':
				case 'AltLeft':
				case 'MetaLeft':
					break;

				default:
					keyboard.forEach((item) => {
						if (event.code === item.code) {
							if (this.lang === 'ru' && item.keyRu !== undefined) {
								this.capsLk === false
									? this.value += item.keyRu.toLowerCase()
									: this.value += item.keyRu.toUpperCase();
							} else {
								this.capsLk === false
									? this.value += item.key.toLowerCase()
									: this.value += item.key.toUpperCase();
							}
							this.textArea.value = this.value;
						}
					});
			}

			event.preventDefault();

			this.keys.forEach((item) => {
				if (event.code === item.dataset.key) {
					item.classList.add('active');
				}
			});

		});

		this.body.addEventListener('keyup', (event) => {
			this.keys.forEach((item) => {
				if (event.code === item.dataset.key) {
					item.classList.remove('active');
				}
			});
		});
	}

	switchLang() {
		const codes = ['ControlLeft', 'AltLeft'];
		let pressed = [];

		document.addEventListener('keydown', (event) => {
			pressed.push(event.code);
			for (const code of codes) {
				if (!pressed.includes(code)) {
					return;
				}
			}

			pressed = [];

			this.lang === 'en' ? this.lang = 'ru' : this.lang = 'en';
			setTimeout(() => {
				this.keyboardBody.innerHTML = '';
				this.createBtns();
			}, 200);
		});

		document.addEventListener('keyup', () => {
			pressed.length = 0;
		});

		this.setLocalStorage();
	}

	activeShift() {
		document.addEventListener('keydown', (event) => {
			if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
				this.capsLk = true;
				this.keyboardBody.innerHTML = '';
				this.createBtns();
			}
		});
		document.addEventListener('keyup', (event) => {
			if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
				this.capsLk = false;
				this.keyboardBody.innerHTML = '';
				this.createBtns();
			}
		})
	}

	setLocalStorage() {
		localStorage.setItem('lang', this.lang);
	}

	getLocalStorage() {
		if (localStorage.getItem('lang')) {
			this.lang = localStorage.getItem('lang');
		}
	}
}


window.addEventListener('beforeunload', () => {
	const u = new KeyboardClass();
	u.setLocalStorage();
});

window.addEventListener('DOMContentLoaded', () => {
	const f = new KeyboardClass();
	f.getLocalStorage();
	f.init();
	f.createBtns();
	f.lightBtn();
	f.listenKeyboard();
	f.switchCase();
	f.switchLang();
	f.activeShift();
	// f.setLocalStorage();

});
