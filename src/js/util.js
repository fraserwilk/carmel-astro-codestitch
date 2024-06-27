export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-AU", {
    timeZone: "Australia/Sydney",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
