class Store {
  constructor(storeId, db) {
    this.storeId = storeId;
    this.db = db;
  }

  createOrder(order) {
    console.log(`Adding order for ${order.email}`);
    this.db.add(order.email, order);
  }

  deliverOrder(email) {
    console.log(`Delivering order for ${email}`);
    this.db.remove(email);
  }

  printOrders() {
    const customerEmails = Object.keys(this.db.getAll());

    console.log(`Store #${this.storeId} has pending orders`);
    customerEmails.forEach((email) => {
      console.log(this.db.get(email));
    })
  }
}

export default Store;
