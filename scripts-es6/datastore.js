class DataStore {
  constructor() {
    this.data = {};
  }

  add(key, val) {
    this.data[key] = val;
  }

  get(key) {
    return this.data[key];
  }

  getAll() {
    return this.data;
  }

  remove(key) {
    delete this.data[key];
  }
}

export default DataStore;
