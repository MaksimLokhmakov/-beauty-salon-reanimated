import { getColor, randomInteger } from "./helpers";

export type ClientType = {
  name: string;
  phone: string;
};

export const clients: ClientType[] = [
  { name: "Илья Соболев", phone: "+375 25 622-91-77" },
  { name: "Дима Иванович", phone: "+375 25 981-41-20" },
  { name: "Максим Лохмаков", phone: "+375 25 231-92-01" },
  { name: "Денис Никифоров", phone: "+375 22 111-49-32" },
  { name: "Елена Кухарева", phone: "+375 25 121-12-54" },
  { name: "Алина Маслинекова", phone: "+375 25 826-90-10" },
];

export type MasterType = {
  name: string;
  phone: string;
  percent: number;
};

export const masters: MasterType[] = [
  { name: "Максим Лохмаков", phone: "+375 25 231-92-01", percent: 0.18 },
  { name: "Денис Никифоров", phone: "+375 22 111-49-32", percent: 0.16 },
  { name: "Илья Соболев", phone: "+375 25 622-91-77", percent: 0.15 },
  { name: "Дима Иванович", phone: "+375 25 981-41-20", percent: 0.14 },
  { name: "Елена Кухарева", phone: "+375 25 121-12-54", percent: 0.12 },
];

export const patternOption = [
  { id: 0, pattern: require("../../../assets/patterns/1.jpg") },
  { id: 1, pattern: require("../../../assets/patterns/2.jpg") },
  { id: 2, pattern: require("../../../assets/patterns/3.jpg") },
  { id: 3, pattern: require("../../../assets/patterns/4.jpg") },
];

export type AppointmentType = {
  id: string;
  client: string;
  master: string;
  start: Date;
  finish: Date;
  price: number;
};

export const appointments: AppointmentType[] = [
  {
    id: "qq",
    client: "Максим Лохмаков",
    master: "Тимур Батрудинов",
    start: new Date("2022-11-17T15:00:00.061Z"),
    finish: new Date("2022-11-17T16:00:00.061Z"),
    price: 60,
  },
  {
    id: "ww",
    client: "Эллина Крюкова",
    master: "Андрей Алексеев",
    start: new Date("2022-11-19T16:00:00.061Z"),
    finish: new Date("2022-11-19T17:00:00.061Z"),
    price: 80,
  },
  {
    id: "ee",
    client: "Ольга Евгеньева",
    master: "Тимур Батрудинов",
    start: new Date("2022-11-17T17:00:00.061Z"),
    finish: new Date("2022-11-17T18:00:00.061Z"),
    price: 70,
  },
  {
    id: "rr",
    client: "Максим Лохмаков",
    master: "Тимур Батрудинов",
    start: new Date("2022-11-18T16:00:00.061Z"),
    finish: new Date("2022-11-18T17:00:00.061Z"),
    price: 65,
  },
  {
    id: "tt",
    client: "Эллина Крюкова",
    master: "Андрей Алексеев",
    start: new Date("2022-11-19T13:00:00.061Z"),
    finish: new Date("2022-11-19T14:00:00.061Z"),
    price: 85,
  },
  {
    id: "yy",
    client: "Ольга Евгеньева",
    master: "Тимур Батрудинов",
    start: new Date("2022-11-18T11:00:00.061Z"),
    finish: new Date("2022-11-18T12:00:00.061Z"),
    price: 96,
  },
];

export const graphDataMonths = [
  {
    value: 380,
    date: new Date("2022-11-01T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 285,
    date: new Date("2022-11-02T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 190,
    date: new Date("2022-11-03T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 95,
    date: new Date("2022-11-04T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2022-11-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 175,
    date: new Date("2022-11-06T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 192,
    date: new Date("2022-11-07T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 129,
    date: new Date("2022-11-08T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 150,
    date: new Date("2022-11-09T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 175,
    date: new Date("2022-11-10T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 95,
    date: new Date("2022-11-11T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 182,
    date: new Date("2022-11-12T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 139,
    date: new Date("2022-11-13T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 192,
    date: new Date("2022-11-14T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 205,
    date: new Date("2022-11-15T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 310,
    date: new Date("2022-11-16T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 265,
    date: new Date("2022-11-17T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 205,
    date: new Date("2022-11-18T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 95,
    date: new Date("2022-11-19T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 212,
    date: new Date("2022-11-20T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2022-11-21T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 400,
    date: new Date("2022-11-22T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2022-11-23T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 380,
    date: new Date("2022-11-24T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 345,
    date: new Date("2022-11-25T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 190,
    date: new Date("2022-11-26T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 111,
    date: new Date("2022-11-27T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 234,
    date: new Date("2022-11-28T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 334,
    date: new Date("2022-11-29T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 134,
    date: new Date("2022-11-30T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
];

export const graphClientsPerDayDataMonths = [
  {
    value: 15,
    date: new Date("2022-11-01T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 17,
    date: new Date("2022-11-02T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 19,
    date: new Date("2022-11-03T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 7,
    date: new Date("2022-11-04T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2022-11-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 10,
    date: new Date("2022-11-06T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 12,
    date: new Date("2022-11-07T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 11,
    date: new Date("2022-11-08T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 13,
    date: new Date("2022-11-09T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 9,
    date: new Date("2022-11-10T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 8,
    date: new Date("2022-11-11T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 16,
    date: new Date("2022-11-12T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 17,
    date: new Date("2022-11-13T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 19,
    date: new Date("2022-11-14T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 20,
    date: new Date("2022-11-15T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 21,
    date: new Date("2022-11-16T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 13,
    date: new Date("2022-11-17T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 10,
    date: new Date("2022-11-18T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 4,
    date: new Date("2022-11-19T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 8,
    date: new Date("2022-11-20T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2022-11-21T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 7,
    date: new Date("2022-11-22T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2022-11-23T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 14,
    date: new Date("2022-11-24T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 15,
    date: new Date("2022-11-25T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 14,
    date: new Date("2022-11-26T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 13,
    date: new Date("2022-11-27T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 16,
    date: new Date("2022-11-28T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 17,
    date: new Date("2022-11-29T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 19,
    date: new Date("2022-11-30T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
];

export const graphDataYear = [
  {
    value: 5529,
    date: new Date("2022-01-02T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 6102,
    date: new Date("2022-02-03T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 7182,
    date: new Date("2022-03-04T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 3400,
    date: new Date("2022-04-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 4900,
    date: new Date("2022-05-06T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 3900,
    date: new Date("2022-06-07T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 8150,
    date: new Date("2022-07-08T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 5982,
    date: new Date("2022-08-09T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 1982,
    date: new Date("2022-09-10T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 6730,
    date: new Date("2022-10-11T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 5900,
    date: new Date("2022-11-12T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2022-12-12T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
];

export const graphClientsPerYearData = [
  {
    value: 61,
    date: new Date("2022-01-02T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 81,
    date: new Date("2022-02-03T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 61,
    date: new Date("2022-03-04T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 49,
    date: new Date("2022-04-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 40,
    date: new Date("2022-05-06T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 93,
    date: new Date("2022-06-07T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 30,
    date: new Date("2022-07-08T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 79,
    date: new Date("2022-08-09T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 86,
    date: new Date("2022-09-10T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 103,
    date: new Date("2022-10-11T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 78,
    date: new Date("2022-11-12T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 96,
    date: new Date("2022-12-12T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
];

export const graphDataFull = [
  {
    value: 95293,
    date: new Date("2017-01-02T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 72393,
    date: new Date("2018-01-02T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 100102,
    date: new Date("2019-02-03T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 112082,
    date: new Date("2020-03-04T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 97200,
    date: new Date("2021-04-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 75000,
    date: new Date("2022-04-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2023-04-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
];

export const graphClientsPerFullData = [
  {
    value: 814,
    date: new Date("2017-01-02T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 618,
    date: new Date("2018-01-02T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 897,
    date: new Date("2019-02-03T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 921,
    date: new Date("2020-03-04T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 749,
    date: new Date("2021-04-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 801,
    date: new Date("2022-04-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2023-04-05T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
];

export const graphIncomePerHour = [
  {
    value: 35,
    date: new Date("2022-11-01T09:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2022-11-01T10:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 80,
    date: new Date("2022-11-01T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 55,
    date: new Date("2022-11-01T12:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 75,
    date: new Date("2022-11-01T13:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 25,
    date: new Date("2022-11-01T14:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 40,
    date: new Date("2022-11-01T15:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 95,
    date: new Date("2022-11-01T16:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 170,
    date: new Date("2022-11-01T17:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 70,
    date: new Date("2022-11-01T18:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 85,
    date: new Date("2022-11-01T19:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 65,
    date: new Date("2022-11-01T20:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 145,
    date: new Date("2022-11-01T21:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
];

export const graphClientsPerHour = [
  {
    value: 1,
    date: new Date("2022-11-01T09:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 0,
    date: new Date("2022-11-01T10:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 2,
    date: new Date("2022-11-01T11:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 1,
    date: new Date("2022-11-01T12:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 4,
    date: new Date("2022-11-01T13:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 1,
    date: new Date("2022-11-01T14:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 1,
    date: new Date("2022-11-01T15:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 2,
    date: new Date("2022-11-01T16:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 3,
    date: new Date("2022-11-01T17:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 2,
    date: new Date("2022-11-01T18:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 2,
    date: new Date("2022-11-01T19:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 1,
    date: new Date("2022-11-01T20:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
  {
    value: 3,
    date: new Date("2022-11-01T21:00:00.061Z"),
    color: getColor(randomInteger(1042, 1071)).color,
  },
];

export const shadule = [
  [{ master: masters[0], duration: "09:00 - 21:00" }],
  [
    { master: masters[0], duration: "09:00 - 19:00" },
    { master: masters[1], duration: "11:00 - 21:00" },
    { master: masters[2], duration: "10:00 - 20:00" },
  ],
  [
    { master: masters[1], duration: "11:00 - 21:00" },
    { master: masters[4], duration: "10:00 - 20:00" },
  ],
  [{ master: masters[4], duration: "11:00 - 21:00" }],
  [
    { master: masters[1], duration: "12:00 - 21:00" },
    { master: masters[4], duration: "09:00 - 20:00" },
  ],
  [
    { master: masters[2], duration: "12:00 - 21:00" },
    { master: masters[3], duration: "09:00 - 20:00" },
  ],
  [
    { master: masters[1], duration: "09:00 - 21:00" },
    { master: masters[2], duration: "09:00 - 20:00" },
  ],
  [
    { master: masters[1], duration: "09:00 - 21:00" },
    { master: masters[2], duration: "09:00 - 20:00" },
  ],
];
