import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    id: 1,
    title: "Home",
    cName: "sidebar-item",
    icon: <FaIcons.FaHome />,
    path: "/",
  },
  {
    id: 2,
    title: "Products",
    cName: "sidebar-item",
    icon: <FaIcons.FaCartPlus />,
    path: "/products",
  },
  {
    id: 3,
    title: "Contact Us",
    cName: "sidebar-item",
    icon: <FaIcons.FaEnvelopeOpenText />,
    path: "/contact",
  },
];
