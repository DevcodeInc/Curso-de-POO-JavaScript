const email = { email: '' };
const size = { size: 'medium' };
const speciality = { speciality: 'cheese' };
const displayOrder = {
  displayOrder: function () {
    console.log(`Order for: ${this.email}`);
  }
}

const BaseOrder = (params) => {
  return Object.assign({}, email, displayOrder, params);
};

const PizzaOrder = (params) => {
  return Object.assign({}, email, size, displayOrder, speciality, params);
};

export {
  BaseOrder,
  PizzaOrder
};
