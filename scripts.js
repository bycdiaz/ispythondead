const root = document.querySelector('#root');
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
  const statusText = create('p', 'status-container', currentStatus);

  root.appendChild(statusText);
}

renderStatus();
