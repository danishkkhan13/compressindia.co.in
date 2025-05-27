const menu_data = [
  {
    id: 1,
    has_dropdown: false,
    title: "Home",
    link: "/"
  },
  {
    id: 2,
    has_dropdown: false,
    title: "About Us",
    link: "/aboutUs",
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "-Offers+",
    link: "#",
    sub_menus: [
      { link: "/blockbuster-deal", title: "BLOCKBUSTER DEAL" },
      { link: "/desirable-deal", title: "DESIRABLE DEAL" },
      { link: "/incredible-deal", title: "INCREDIBLE DEAL" },
    ],
  },
  {
    id: 4,
    has_dropdown: true,
    title: "-Service+",
    link: "#",
    sub_menus: [
      { link: "/one-time-services", title: "One Time Services" },
      { link: "/chemical-jet-services", title: "Chemical Jet Services" },
      { link: "/ac-dismantle-services-2-2", title: "Dismantle Services" },
      { link: "/ac-installation-services", title: "AC Installation Services" },
      { link: "/ac-dismantle-services", title: "AC Dismantle Services" },
      { link: "/ac-pressure-testing-services", title: "AC Pressure Testing Services" },
      { link: "/gas-charging", title: "GAS Charging" },
      { link: "/pcb-board-repair", title: "PCB Board Repair" },
      { link: "/capacitor-electrical-part", title: "Capacitor / Electrical Part" },
      { link: "/compressor-installation", title: "Compressor Installation" },
      { link: "/fan-motor-installation", title: "Fan Motor Installation" },
      { link: "/copper-coil-installation", title: "Copper Coil Installation" },
      { link: "/customized-services", title: "Customized Services" },






    ],
  },
  // {
  //   id: 5,
  //   has_dropdown: true,
  //   title: "Blog",
  //   link: "/#",
  //   sub_menus: [
  //     { link: "/blog", title: "Blog" },
  //     { link: "/blog-grid", title: "Blog Grid" },
  //     { link: "/blog-list", title: "Blog List" },
  //     { link: "/blog-standard", title: "Blog Standard" },
  //     { link: "/blog-details", title: "Blog Details" },
  //   ],
  // },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contactUs",
  },
];
export default menu_data;