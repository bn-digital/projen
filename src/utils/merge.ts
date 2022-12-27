export function mergeDeep<T extends any = any>(
  target: any,
  ...sources: any[]
): T {
  if (!sources.length) return target;

  type Object = { [key: string]: T };

  function isObject(value: unknown): value is Object {
    return typeof value === "object" && value !== null;
  }

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    Object.entries(source).forEach(([key, value]) => {
      if (isObject(value)) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], value);
      } else {
        Object.assign(target, { [key]: value });
      }
    });
  }

  return mergeDeep(target, ...sources);
}
