// Recursively finds a key within an object and returns the value
export const findKey = (object: Record<string, any>, key: string): any => {
  let output;
  Object.keys(object).some((k) => {
    if (k === key) {
      output = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === "object") {
      output = findKey(object[k], key);
      return output !== undefined;
    }
  });
  return output;
};

// Returns true if any values between the two arrays match (intersect)
export const intersects = (arr1, arr2) => {
  if (arr1.filter((element) => arr2.includes(element)).length > 0) return true;
};
