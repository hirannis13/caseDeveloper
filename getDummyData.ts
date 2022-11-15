export type Package = {
  id: string;
  image: string;
  message: string;
  name: string;
  value: string;
};

const getDummyData = (): Package[] => [
  {
    id: "1",
    image: "/starter.png",
    message: "You received 4 new packs",
    name: "Basic Beast Starter Pack",
    value: "USD $40.00",
  },
  {
    id: "2",
    image: "/cursed.png",
    message: "You received 2 new packs",
    name: "Cursed Black Pack",
    value: "USD $600.00",
  },
  {
    id: "3",
    image: "/shiny.png",
    message: "You received 1 new packs",
    name: "Shiny Gold",
    value: "USD $999.00",
  },
];

export default getDummyData;
