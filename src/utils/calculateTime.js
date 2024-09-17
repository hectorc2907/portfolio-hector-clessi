export function calculateTime(joinData) {
  const today = new Date();
  const data = new Date(joinData);

  let years = today.getFullYear() - data.getFullYear();
  const month = today.getMonth() - data.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < data.getDate())) {
    years--;
  }

  return years;
}
