const email = { email: '' };
const size = { size: 'medium' };
const speciality = { speciality: 'cheese' };

const BaseOrder = (params) => {
  return Object.assign({}, email, params);
};

const PizzaOrder = (params) => {
  return Object.assign({}, email, size, speciality, params);
};

export {
  BaseOrder,
  PizzaOrder
};
