import { getMonth, getYear } from "date-fns";
import { Event } from "react-mui-scheduler";

let month = getMonth(new Date());
month++;
let year = getYear(new Date());

const events: Event[] = [
  {
    id: "event-1",
    label: "Medical consultation",
    groupLabel: "Dr Shaun Murphy",
    user: "Dr Shaun Murphy",
    color: "#f28f6a",
    startDate: new Date(`${ year }-${ month }-01 04:00`),
    endDate: new Date(`${ year }-${ month }-01 06:00`),
    createdAt: new Date(),
    createdBy: "Kristina Mayer",
  },
  {
    id: "event-2",
    label: "Medical consultation",
    groupLabel: "Dr Claire Brown",
    user: "Dr Claire Brown",
    color: "#099ce5",
    startDate: new Date(`${ year }-${ month }-02 09:00`),
    endDate: new Date(`${ year }-${ month }-02 10:00`),
    createdAt: new Date(),
    createdBy: "Kristina Mayer",
  },
  {
    id: "event-3",
    label: "Medical consultation",
    groupLabel: "Dr Menlendez Hary",
    user: "Dr Menlendez Hary",
    color: "#263686",
    startDate: new Date(`${ year }-${ month }-04 13:00`),
    endDate: new Date(`${ year }-${ month }-04 14:00`),
    createdAt: new Date(),
    createdBy: "Kristina Mayer",
  },
  {
    id: "event-4",
    label: "Consultation prénatale",
    groupLabel: "Dr Shaun Murphy",
    user: "Dr Shaun Murphy",
    color: "#f28f6a",
    startDate: new Date(`${ year }-${ month }-28 08:00`),
    endDate: new Date(`${ year }-${ month }-28 09:00`),
    createdAt: new Date(),
    createdBy: "Kristina Mayer",
  },
];

export default events;
