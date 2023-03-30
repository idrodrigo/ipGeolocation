export const getIpInfo = async (ip) => {
  const apiKey = "203f36baa8934376825f148fe61afcba";
  const info = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return info;
};
