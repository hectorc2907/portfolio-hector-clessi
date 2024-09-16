export const typeProjectColor = (type) => {
  switch (type) {
    case "Front-End":
      return "bg-[#1BA1CC]";
    case "Back-End":
      return "bg-[#8EC608]";
    case "Full-Stack":
      return "bg-[#085763]";
    default:
      break;
  }
};
