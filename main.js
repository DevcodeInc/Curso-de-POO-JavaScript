(function (window) {
  'use strict';
  var App = window.App;
  var DataStore = App.DataStore;
  var Store = App.Store;
  var pizzaOrderFactory = App.pizzaOrderFactory;

  console.log('Pizza place');
  var dataStore = new DataStore();
  var store = new Store('ncc-1701', dataStore);
  var order = pizzaOrderFactory('enrique@devcode.com', 'large', 'cheese');

  store.createOrder(order);
  order.displayOrder();
  store.printOrders();

}(window));
