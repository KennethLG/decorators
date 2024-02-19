import 'reflect-metadata';

export function LogParameter(target: Object, methodName: string | symbol, parameterIndex: number) {
  // Get existing metadata on the method, if any
  const existingLoggedParameters: number[] = Reflect.getOwnMetadata('logParameters', target, methodName) || [];

  // Add the current parameter index
  existingLoggedParameters.push(parameterIndex);

  // Update the metadata for the method
  Reflect.defineMetadata('logParameters', existingLoggedParameters, target, methodName);
}

export function logMethodParameters(target: any, methodName: string) {
  const loggedParameters: number[] = Reflect.getMetadata('logParameters', target, methodName);
  if (loggedParameters) {
    console.log(`Method ${methodName} has logged parameters at indices:`, loggedParameters);
  }
}