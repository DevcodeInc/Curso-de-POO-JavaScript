(function (window) {
  'use strict';
  var App = window.App;
  var DataStore = App.DataStore;
  var Store = App.Store;
  var Order = App.Order;

  console.log('Pizza place');
  var dataStore = new DataStore();
  var store = new Store('ncc-1701', dataStore);
  var order = new Order('enrique@devcode.com', 'large', 'cheese');

  store.createOrder(order);
  store.printOrders();

}(window));
