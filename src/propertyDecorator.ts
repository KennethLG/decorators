export function isEmail(target: any, propertyKey: string) {
  // Property value
  let _val = target[propertyKey];

  // Property getter
  const getter = () => _val;

  // Property setter
  const setter = (newVal: string) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(newVal)) {
      throw new Error(`Invalid email format: ${newVal}`);
    }
    _val = newVal;
  };

  // Delete the original property
  if (delete target[propertyKey]) {
    // Create new property with getter and setter
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}