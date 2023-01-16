export const getAllErrors = (
  errors: object,
  touched: object,
  initial: boolean | undefined
) => {
  let result = initial;

  Object.entries(errors).forEach(([_, value]) => (result = result && !value));
  Object.entries(touched).forEach(([_, value]) => (result = result && value));

  return result;
};
