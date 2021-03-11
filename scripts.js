const root = document.querySelector('#root');
// const statusOptions = [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false];

const isItDead = false;

const pythonStatus = () => isItDead ? 'It is dead.' : 'It is not dead.';

function create(elementType, className, text) {
  const element = document.createElement(`${elementType}`);
  element.className = className;
  element.innerText = text;

  return element;
}

function renderStatus() {
  const status = pythonStatus();
  const statusText = create('p', 'status-container', status);

  root.appendChild(statusText);
}

renderStatus();
