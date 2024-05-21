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

export const getRandomGradient = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F3FF33",
    "#FF33F3",
    "#33FFF5",
    "#F533FF",
    "#57FF33",
    "#5733FF",
    "#33FF57",
    "#FF3357",
    "#F5FF33",
  ];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};

export const getRandomImageUrl = () => {
  const randomSeed = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/seed/${randomSeed}/200/100`;
};
