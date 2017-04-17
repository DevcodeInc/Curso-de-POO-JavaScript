(function () {
  'use strict';
  var App = window.App || {};

  function Order (email, size, speciality) {
    this.email = email;
    this.size = size;
    this.speciality = speciality;
  }

  App.Order = Order;
  window.App.App;
}());
