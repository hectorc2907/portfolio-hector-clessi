export function getActualYear() {
  return new Date().getFullYear();
}

export function calculateAge(data) {
  const today = new Date();
  const now = new Date(data);

  let years = today.getFullYear() - now.getFullYear();
  const month = today.getMonth() - now.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < now.getDate())) {
    years--;
  }

  return years;
}
