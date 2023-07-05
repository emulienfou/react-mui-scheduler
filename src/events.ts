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
    startHour: "04:00 AM",
    endHour: "06:00 AM",
    date: `${ year }-${ month }-01`,
    createdAt: new Date(),
    createdBy: "Kristina Mayer",
  },
  {
    id: "event-2",
    label: "Medical consultation",
    groupLabel: "Dr Claire Brown",
    user: "Dr Claire Brown",
    color: "#099ce5",
    startHour: "09:00 AM",
    endHour: "10:00 AM",
    date: `${ year }-${ month }-02`,
    createdAt: new Date(),
    createdBy: "Kristina Mayer",
  },
  {
    id: "event-3",
    label: "Medical consultation",
    groupLabel: "Dr Menlendez Hary",
    user: "Dr Menlendez Hary",
    color: "#263686",
    startHour: "13:00 PM",
    endHour: "14:00 PM",
    date: `${ year }-${ month }-04`,
    createdAt: new Date(),
    createdBy: "Kristina Mayer",
  },
  {
    id: "event-4",
    label: "Consultation prénatale",
    groupLabel: "Dr Shaun Murphy",
    user: "Dr Shaun Murphy",
    color: "#f28f6a",
    startHour: "08:00 AM",
    endHour: "09:00 AM",
    date: `${ year }-${ month }-28`,
    createdAt: new Date(),
    createdBy: "Kristina Mayer",
  },
];

export default events;
