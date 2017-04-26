/* // Herencia con clases
class BaseOrder {
  constructor(email) {
    this.email = email;
  }
}

class PizzaOrder extends BaseOrder {
  constructor(email, size, speciality) {
    super(email);
    this.size = size;
    this.speciality = speciality;
  }
}

export {
  BaseOrder,
  PizzaOrder
};
*/

// Composición
const email = { email: '' };
const size = { size: 'medium' };
const speciality = { speciality: 'cheese' };
const displayOrder = {
  displayOrder: function () {
    console.log('Order for: ' + this.email);
  }
};

const BaseOrder = (params) => {
  return Object.assign({}, email, displayOrder, params);
};

const toString = {
  toString: function () {
    return `${this.email} - ${this.size} - ${this.speciality}`;
  }
};

const PizzaOrder = (params) => {
  return Object.assign({}, email, size, speciality, displayOrder, toString, params);
};

export {
  BaseOrder,
  PizzaOrder
};
