export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getColor = (number: number) => {
  const colors = {
    1042: {
      backgroundColor: "#fef1f0",
      color: "#fe9f00",
    },
    1045: {
      backgroundColor: "#ffeef0",
      color: "#fe3347",
    },
    1048: {
      backgroundColor: "#f0f5fc",
      color: "#3f8adf",
    },
    1051: {
      backgroundColor: "#fef7eb",
      color: "#fe9f00",
    },
    1054: {
      backgroundColor: "#f0f8f0",
      color: "#4cb24b",
    },
    1057: {
      backgroundColor: "#f4eefa",
      color: "#792ec0",
    },
    1060: {
      backgroundColor: "#fef7eb",
      color: "#fec008",
    },
    1063: {
      backgroundColor: "#fcf0f4",
      color: "#e5457a",
    },
    1066: {
      backgroundColor: "#ffeef0",
      color: "#fe3347",
    },
    1071: {
      backgroundColor: "#ffeef0",
      color: "#fe3347",
    },
  } as const;

  for (let key in colors) {
    const keyInNumber = Number(key) as keyof typeof colors;

    if (number < keyInNumber) {
      return colors[keyInNumber];
    }
  }

  return colors[1042];
};

export const normolizeMinutes = (minutes: number) => {
  return ("0" + minutes).slice(-2);
};

export function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

export const getDuration = (start: Date, finish: Date) => {
  return (
    start.getHours() +
    ":" +
    normolizeMinutes(start.getMinutes()) +
    " - " +
    finish.getHours() +
    ":" +
    normolizeMinutes(finish.getMinutes())
  );
};

export const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1;
};
