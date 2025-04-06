export default function parseAddress(address, separation) {
  const parts = address.split(",");
  const city = parts[parts.length - 2]?.trim();
  const country = parts[parts.length - 1]?.trim();

  return `${city}${separation} ${country}`;
}
