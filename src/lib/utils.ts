export const convertTimeFormat = (time: string) => {
  const [hour, minute] = time.split(":");
  const date = new Date();
  date.setHours(+hour);
  date.setMinutes(+minute);
  const format = date.getHours() > 12 ? "PM" : "AM";
  let hours = date.getHours() % 12 || 12;
  let minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes} ${format}`;
};
export const convertDateFormat = (dateString: string) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
  };
  return date.toLocaleDateString(undefined, options);
};
