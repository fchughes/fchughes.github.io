function formatDate(date, dateStyle = "medium", locales = "en") {
  const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
  return formatter.format(new Date(date));
}
export {
  formatDate as f
};
