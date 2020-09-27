function StatueManager(vm, setting) {
  for (let [key, value] of Object.entries(setting)) {
    let keys = key.split("|");
    if (keys[1] === "+") {
      vm.status[keys[0]] += value;
    } else {
      vm.status[keys[0]] -= value;
    }
  }
}
export default StatueManager;
