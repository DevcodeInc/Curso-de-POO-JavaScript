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
