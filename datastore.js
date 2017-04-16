function DataStore() {
  this.data = {};
}

DataStore.prototype.add = function (key, val) {
  this.data[key] = val;
}
