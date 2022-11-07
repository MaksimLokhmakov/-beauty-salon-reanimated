export const getAllErrors = (
  errors: object,
  touched: object,
  initial: boolean | undefined
) => {
  let result = initial;

  for (let key in errors) {
    // @ts-ignore: Unreachable code error
    result = result && !errors[key];
  }

  for (let key in touched) {
    // @ts-ignore: Unreachable code error
    result = result && touched[key];
  }

  return result;
};
