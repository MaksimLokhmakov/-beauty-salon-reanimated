import moment from "moment";
import { capitalizeFirstLetter, getDuration } from "../utils/helpers";
import { AppointmentType } from "../utils/temp";

export const search = (
  appointments: AppointmentType[],
  searchValue: string
) => {
  if (!searchValue) return [];

  return appointments.filter(
    ({ client, master, start, finish }) =>
      client.toLowerCase().includes(searchValue.toLowerCase()) ||
      master.toLowerCase().includes(searchValue.toLowerCase()) ||
      start.getDate().toString().includes(searchValue) ||
      getDuration(start, finish).includes(searchValue)
  );
};

export const groupByDate = (appointments: AppointmentType[]) => {
  // @ts-ignore: Unreachable code error
  let result = [];

  const groupByCategory = appointments.reduce((group, product) => {
    const { start } = product;
    const category = capitalizeFirstLetter(moment(start).format("dd, DD MMMM"));

    // @ts-ignore: Unreachable code error
    group[category] = group[category] ?? [];

    // @ts-ignore: Unreachable code error
    group[category].push(product);

    return group;
  }, {});

  Object.entries(groupByCategory).forEach(([key, value]) => {
    result.push({ title: key, appointments: value });
  });

  // @ts-ignore: Unreachable code error
  return result;
};
