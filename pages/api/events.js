import axios from "axios";

export const getEvents = async (req, res) => {
  const { data } = await axios.get(
    "https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=ZTfeHSoFP3BbHjBywz8BouWziX8HHlSuWeG8fOFd"
  );

  res.status(200).json(data);
};
