
  function toggle(value?: boolean) {
    if(arguments.length) {
innerValue.value = value!
return innerValue.value
    } else {
      innerValue.value = innerValue.value === unref(truthyValue)
      ?unfef(falseyValue)
      :unref(truthyValue)
      return innerValue.value
    }
  }