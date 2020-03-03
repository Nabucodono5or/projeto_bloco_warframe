let damageController = function DamageController() {
  let vm = this;
  vm.$onInit = onInit;

  ////////////////////////////////

  function percentage(num, per) {
    let result = (num / 100) * per;
    result = result.toFixed(2);
    return result;
  }

  function itemValido(categoria) {
    return (
      categoria == "Secondary" || categoria == "Primary" || categoria == "Melee"
    );
  }

  function onInit() {
    if (itemValido(vm.item.category)) {
      vm.exibir = true;
      vm.damage = parseInt(vm.item.damage);
      vm.ammo = vm.item.ammo || 0;
      vm.damagePerHit = percentage(vm.damage, vm.item.accuracy);
      vm.reloadTime = vm.item.reloadTime.toFixed(2);
      vm.accuracy = vm.item.accuracy.toFixed(2);
      vm.criticalChance = vm.item.criticalChance.toFixed(3);
      vm.criticalMultiplier = vm.item.criticalMultiplier.toFixed(2);
    }
  }
};

export default damageController;
