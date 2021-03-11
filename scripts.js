const statusContainer = document.querySelector('.status-container');
const statusOptions = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];
const randomNumber = Math.floor(Math.random() * statusOptions.length);
const isItDead = statusOptions[randomNumber];

const pythonStatus = () => isItDead ? 'It is dead.' : 'It is not dead.';

function create(elementType, className, text) {
  const element = document.createElement(`${elementType}`);
  element.className = className;
  element.innerText = text;

  return element;
}

function renderStatus() {
  const currentStatus = pythonStatus();
  const snakeEmoji = String.fromCodePoint(0x1F40D);
  const statusText = create('p', 'status-text', currentStatus);
  const snakeEmojiContainer = create('p', 'snake-emoji', snakeEmoji);

  statusContainer.append(statusText, snakeEmojiContainer);
}

renderStatus();
