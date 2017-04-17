(function () {
  'use strict';
  var App = window.App || {};

  function Store(storeId, db) {
    // this = {};
    // this.__proto__ = Store.prototype
    this.storeId = storeId;
    this.db = db; // composición
    // return this;
  }

  Store.prototype.createOrder = function (order) {
    console.log('Adding order for: ' + order.email);
    this.db.add(order.email, order);
  };

  Store.prototype.deliverOrder = function (email) {
    console.log('Delivering order for: ' + email);
    this.db.remove(email);
  };

  Store.prototype.printOrders = function () {
    console.log('Store #' + this.storeId + ' has pending orders');

    var customerEmails = Object.keys(this.db.getAll());
    // var self = this;
    // customerEmails.forEach(function (email) {
    //   console.log(self.db.get(email));
    // });

    customerEmails.forEach(function (email) {
      console.log(this.db.get(email));
    }.bind(this));

  };

  App.Store = Store;
  window.App.App;
}());
