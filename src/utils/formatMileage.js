export default function formatMileage(value, divider, prefix) {
  if (!value) {
    return "";
  }
  const formattedValue = value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, divider);
  return prefix ? `${prefix} ${formattedValue}` : formattedValue;
}
