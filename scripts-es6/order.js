class BaseOrder {
  constructor(email) {
    this.email = email;
  }

  displayOrder() {
    console.log(`Order for: ${this.email}`);
  }
}

class PizzaOrder extends BaseOrder {
  constructor(email, size, speciality) {
    super(email);
    this.size = size;
    this.speciality = speciality;
  }

  displayOrder() {
    super.displayOrder();
    console.log(`Size: ${this.size}`);
  }
}

export {
  BaseOrder,
  PizzaOrder
};
