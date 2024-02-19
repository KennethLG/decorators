export function logMethod(_target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  console.log('target', _target)

  descriptor.value = function(...args: any[]) {
    console.log(`LOG: Entering method '${String(propertyKey)}'.`);
    const result = originalMethod.apply(this, args);
    console.log(`LOG: Exiting method '${String(propertyKey)}'.`);
    return result;
  };

  return descriptor;
}


export function withPrefixedLog(prefix: string) {
  // Return the actual decorator function
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      console.log(`${prefix} Entering method '${String(propertyKey)}'.`);
      const result = originalMethod.apply(this, args);
      console.log(`${prefix} Exiting method '${String(propertyKey)}'.`);
      return result;
    };
  };
}