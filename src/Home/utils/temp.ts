import { getColor } from "./getColor";
import { randomInteger } from "./randomInteger";

export type ClientType = {
  name: string;
  phone: string;
};

export const clients: ClientType[] = [
  { name: "Максим Лохмаков", phone: "+375 25 231-92-01" },
  { name: "Денис Никифоров", phone: "+375 22 111-49-32" },
  { name: "Илья Соболев", phone: "+375 25 622-91-77" },
  { name: "Дима Иванович", phone: "+375 25 981-41-20" },
  { name: "Елена Кухарева", phone: "+375 25 121-12-54" },
  { name: "Алина Маслинекова", phone: "+375 25 826-90-10" },
  { name: "Екатерина Фламинго", phone: "+375 25 851-03-00" },
  { name: "Аня Петрович", phone: "+375 25 111-20-13" },
  { name: "Вита Прайонис", phone: "+375 25 391-20-39" },
  { name: "Соня Лук", phone: "+375 25 331-95-00" },
  { name: "Максим Поливода", phone: "+375 25 622-33-00" },
  { name: "Денис Вишнев", phone: "+375 25 621-95-33" },
  { name: "Илья Крутько", phone: "+375 25 987-12-34" },
  { name: "Дима Соловей", phone: "+375 25 693-95-22" },
  { name: "Елена Демочка", phone: "+375 25 691-94-20" },
  { name: "Алина Петрович", phone: "+375 25 694-14-56" },
  { name: "Максим Лохмаков", phone: "+375 25 231-92-01" },
  { name: "Денис Никифоров", phone: "+375 22 111-49-32" },
  { name: "Илья Соболев", phone: "+375 25 622-91-77" },
  { name: "Дима Иванович", phone: "+375 25 981-41-20" },
  { name: "Елена Кухарева", phone: "+375 25 121-12-54" },
  { name: "Алина Маслинекова", phone: "+375 25 826-90-10" },
  { name: "Екатерина Фламинго", phone: "+375 25 851-03-00" },
  { name: "Аня Петрович", phone: "+375 25 111-20-13" },
  { name: "Вита Прайонис", phone: "+375 25 391-20-39" },
  { name: "Соня Лук", phone: "+375 25 331-95-00" },
  { name: "Максим Поливода", phone: "+375 25 622-33-00" },
  { name: "Денис Вишнев", phone: "+375 25 621-95-33" },
  { name: "Илья Крутько", phone: "+375 25 987-12-34" },
  { name: "Дима Соловей", phone: "+375 25 693-95-22" },
  { name: "Елена Демочка", phone: "+375 25 691-94-20" },
  { name: "Алина Петрович", phone: "+375 25 694-14-56" },
  { name: "Максим Лохмаков", phone: "+375 25 231-92-01" },
  { name: "Денис Никифоров", phone: "+375 22 111-49-32" },
  { name: "Илья Соболев", phone: "+375 25 622-91-77" },
  { name: "Дима Иванович", phone: "+375 25 981-41-20" },
  { name: "Елена Кухарева", phone: "+375 25 121-12-54" },
  { name: "Алина Маслинекова", phone: "+375 25 826-90-10" },
  { name: "Екатерина Фламинго", phone: "+375 25 851-03-00" },
  { name: "Аня Петрович", phone: "+375 25 111-20-13" },
  { name: "Вита Прайонис", phone: "+375 25 391-20-39" },
  { name: "Соня Лук", phone: "+375 25 331-95-00" },
  { name: "Максим Поливода", phone: "+375 25 622-33-00" },
  { name: "Денис Вишнев", phone: "+375 25 621-95-33" },
  { name: "Илья Крутько", phone: "+375 25 987-12-34" },
  { name: "Дима Соловей", phone: "+375 25 693-95-22" },
  { name: "Елена Демочка", phone: "+375 25 691-94-20" },
  { name: "Алина Петрович", phone: "+375 25 694-14-56" },
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
  { name: "Алина Маслинекова", phone: "+375 25 826-90-10", percent: 0.19 },
  { name: "Екатерина Фламинго", phone: "+375 25 851-03-00", percent: 0.17 },
  { name: "Аня Петрович", phone: "+375 25 111-20-13", percent: 0.15 },
  { name: "Вита Прайонис", phone: "+375 25 391-20-39", percent: 0.14 },
  { name: "Соня Лук", phone: "+375 25 331-95-00", percent: 0.13 },
  { name: "Максим Поливода", phone: "+375 25 622-33-00", percent: 0.27 },
  { name: "Денис Вишнев", phone: "+375 25 621-95-33", percent: 0.25 },
  { name: "Илья Крутько", phone: "+375 25 987-12-34", percent: 0.3 },
  { name: "Дима Соловей", phone: "+375 25 693-95-22", percent: 0.09 },
  { name: "Елена Демочка", phone: "+375 25 691-94-20", percent: 0.12 },
  { name: "Алина Петрович", phone: "+375 25 694-14-56", percent: 0.15 },
  { name: "Аня Саванович", phone: "+375 25 623-76-22", percent: 0.1 },
  { name: "Виолетта Козырицкая", phone: "+375 25 615-00-00", percent: 0.2 },
  { name: "Соня Юла", phone: "+375 25 691-95-00", percent: 0.22 },
];

export type AppointmentType = {
  id: string;
  client: string;
  master: string;
  start: Date;
  finish: Date;
};

export const appointments: AppointmentType[] = [
  {
    id: "qq",
    client: "Максим Лохмаков",
    master: "Тимур Батрудинов",
    start: new Date("2022-11-17T15:00:00.061Z"),
    finish: new Date("2022-11-17T16:00:00.061Z"),
  },
  {
    id: "ww",
    client: "Эллина Крюкова",
    master: "Андрей Алексеев",
    start: new Date("2022-11-19T16:00:00.061Z"),
    finish: new Date("2022-11-19T17:00:00.061Z"),
  },
  {
    id: "ee",
    client: "Ольга Евгеньева",
    master: "Тимур Батрудинов",
    start: new Date("2022-11-17T17:00:00.061Z"),
    finish: new Date("2022-11-17T18:00:00.061Z"),
  },
  {
    id: "rr",
    client: "Максим Лохмаков",
    master: "Тимур Батрудинов",
    start: new Date("2022-11-18T16:00:00.061Z"),
    finish: new Date("2022-11-18T17:00:00.061Z"),
  },
  {
    id: "tt",
    client: "Эллина Крюкова",
    master: "Андрей Алексеев",
    start: new Date("2022-11-19T13:00:00.061Z"),
    finish: new Date("2022-11-19T14:00:00.061Z"),
  },
  {
    id: "yy",
    client: "Ольга Евгеньева",
    master: "Тимур Батрудинов",
    start: new Date("2022-11-18T11:00:00.061Z"),
    finish: new Date("2022-11-18T12:00:00.061Z"),
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
    value: 0,
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
