export const getAllErrors = (errors: object) => {
  let result;

  for (let key in errors) {
    // @ts-ignore: Unreachable code error
    result = result && !errors[key];
  }

  return result;
};
