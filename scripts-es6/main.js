import DataStore from './datastore';
import Store from './store';
import { PizzaOrder } from './order';

const store = new Store('ncc-1701', new DataStore());
const order = PizzaOrder({
  email: 'enrique@devcode.com',
  size: 'large',
  speciality: 'meats'
});
store.createOrder(order);
store.printOrders();
order.displayOrder();
store.deliverOrder('enrique@devcode.com');
store.printOrders();
