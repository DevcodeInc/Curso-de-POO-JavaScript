import DataStore from './datastore';
import Store from './store';
import { PizzaOrder } from './order';

const store = new Store('ncc-1701', new DataStore());
const form = document.querySelector('#pizza-form');
form.addEventListener('submit', onSubmit);
const checklist = document.querySelector('#checklist');

// Event Handlers
function onSubmit(e) {
  e.preventDefault();
  const email = form.querySelector('#emailInput').value;
  const size = form.querySelector('input[name="size"]:checked').value;
  const select = form.querySelector('#speciality');
  const speciality = select.options[select.selectedIndex].value;
  const newOrder = new PizzaOrder({
    email,
    size,
    speciality
  });
  store.createOrder(newOrder);
  addToPending(newOrder);
}

// Funciones
function addToPending(order) {
  const orderDiv = document.createElement('div');
  const newContent = document.createTextNode(order.toString());
  orderDiv.appendChild(newContent);
  checklist.appendChild(orderDiv);
}
