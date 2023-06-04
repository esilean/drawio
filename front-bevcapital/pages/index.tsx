import { useCallback, useState } from "react";

type MenuItem = {
  id: string;
  label: string;
  icon: string;
  link: string;
  itemsHidden: boolean;
  items: SubMenuItem[];
};

type SubMenuItem = {
  label: string;
  link: string;
};

const menuItemsOriginal: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "menu_dashboard_svg",
    link: "/",
    itemsHidden: true,
    items: [],
  },
  {
    id: "broker",
    label: "Broker",
    icon: "menu_broker_svg",
    link: "/broker",
    itemsHidden: true,
    items: [],
  },
  {
    id: "positions",
    label: "Positions",
    icon: "menu_positions_svg",
    link: "#",
    itemsHidden: true,
    items: [
      {
        label: "Assets",
        link: "/positions/assets",
      },
      {
        label: "Trades",
        link: "/positions/trades",
      },
    ],
  },
  {
    id: "about",
    label: "About",
    icon: "menu_about_svg",
    link: "/about",
    itemsHidden: true,
    items: [],
  },
];

export default function Home() {
  const [menuHidden, setMenuHidden] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuItemsOriginal);

  const [search, setSearch] = useState("");

  const searchOnMenu = useCallback((search: string) => {
    setSearch(search);
    setMenuItems(menuItemsOriginal);
    if (search !== "") {
      const menuItemsFiltered = menuItemsOriginal.filter((menu) =>
        menu.label.toLowerCase().includes(search.toLowerCase())
      );
      setMenuItems(menuItemsFiltered);
    }
  }, []);

  const toggleMenuHidden = useCallback(() => {
    setMenuHidden((curr) => (curr === "" ? "hidden" : ""));
  }, []);

  const toggleMenuItemsHidden = useCallback(
    (menuId: string) => {
      const menuItem = menuItems.find((m) => m.id == menuId);
      menuItem!.itemsHidden = !menuItem!.itemsHidden;
      setMenuItems((curr) => [...curr]);
    },
    [menuItems]
  );

  const getMenuItemsHidden = useCallback(
    (menuId: string) => {
      return menuItems.find((m) => m.id === menuId)?.itemsHidden;
    },
    [menuItems]
  );

  function getSvgImages(icon_name: string): JSX.Element {
    if (icon_name === "menu_dashboard_svg")
      return (
        <svg
          aria-hidden="true"
          className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      );

    if (icon_name === "menu_broker_svg")
      return (
        <svg
          aria-hidden="true"
          className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200"
          fill="currentColor"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25 3C24.8405 3 24.680156 3.0372812 24.535156 3.1132812L3.5351562 14.113281C3.2061563 14.286281 3 14.628 3 15L3 17C3 17.552 3.448 18 4 18L46 18C46.553 18 47 17.552 47 17L47 15C47 14.628 46.794844 14.286281 46.464844 14.113281L25.464844 3.1132812C25.319844 3.0372812 25.1595 3 25 3 z M 25 9C26.656 9 28 10.343 28 12C28 13.657 26.656 15 25 15C23.343 15 22 13.657 22 12C22 10.343 23.343 9 25 9 z M 8 20C7.448 20 7 20.448 7 21L7 35L13 35L13 21C13 20.448 12.552 20 12 20L8 20 z M 18 20C17.448 20 17 20.448 17 21L17 35L23 35L23 21C23 20.448 22.552 20 22 20L18 20 z M 28 20C27.448 20 27 20.448 27 21L27 35L32.853516 35C31.417516 33.807 30.5 32.009 30.5 30C30.5 27.925 31.481 26.077719 33 24.886719L33 21C33 20.448 32.552 20 32 20L28 20 z M 38 20C37.448 20 37 20.448 37 21L37 23.5C39.7 23.5 42.019 25.154906 43 27.503906L43 21C43 20.448 42.552 20 42 20L38 20 z M 37 25.5C34.519 25.5 32.5 27.519 32.5 30C32.5 32.481 34.519 34.5 37 34.5C39.481 34.5 41.5 32.481 41.5 30C41.5 27.519 39.481 25.5 37 25.5 z M 5 37C4.448 37 4 37.447 4 38L4 40L3 40C2.448 40 2 40.447 2 41L2 44C2 44.553 2.448 45 3 45L26 45L26 42.558594C26 40.351594 26.967422 38.381 28.482422 37L5 37 z M 33.558594 37C30.492594 37 28 39.492594 28 42.558594L28 47C28 47.553 28.447 48 29 48L45 48C45.553 48 46 47.553 46 47L46 42.558594C46 39.492594 43.506406 37 40.441406 37L33.558594 37 z" />
        </svg>
      );

    if (icon_name === "menu_positions_svg")
      return (
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          ></path>
        </svg>
      );

    if (icon_name === "menu_about_svg")
      return (
        <svg
          aria-hidden="true"
          className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 502.643 502.643"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M251.256,237.591c37.166,0,67.042-30.048,67.042-66.977c0.043-37.037-29.876-66.999-67.042-66.999 c-36.908,0-66.869,29.962-66.869,66.999C184.387,207.587,214.349,237.591,251.256,237.591z"></path>{" "}
                <path d="M305.032,248.506H197.653c-19.198,0-34.923,17.602-34.923,39.194v107.854c0,1.186,0.604,2.243,0.669,3.473h175.823 c0.129-1.229,0.626-2.286,0.626-3.473V287.7C339.912,266.108,324.187,248.506,305.032,248.506z"></path>{" "}
                <path d="M431.588,269.559c29.832,0,53.754-24.008,53.754-53.668s-23.922-53.711-53.754-53.711 c-29.617,0-53.582,24.051-53.582,53.711C377.942,245.53,401.972,269.559,431.588,269.559z"></path>{" "}
                <path d="M474.708,278.317h-86.046c-15.445,0-28.064,14.107-28.064,31.472v86.413c0,0.928,0.453,1.812,0.518,2.826h141.03 c0.065-1.014,0.496-1.898,0.496-2.826v-86.413C502.707,292.424,490.11,278.317,474.708,278.317z"></path>{" "}
                <path d="M71.011,269.559c29.789,0,53.733-24.008,53.733-53.668S100.8,162.18,71.011,162.18c-29.638,0-53.603,24.051-53.603,53.711 S41.373,269.559,71.011,269.559L71.011,269.559z"></path>{" "}
                <path d="M114.109,278.317H27.977C12.576,278.317,0,292.424,0,309.789v86.413c0,0.928,0.453,1.812,0.539,2.826h141.03 c0.065-1.014,0.475-1.898,0.475-2.826v-86.413C142.087,292.424,129.489,278.317,114.109,278.317z"></path>{" "}
              </g>{" "}
              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
              <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
              <g> </g>{" "}
            </g>{" "}
          </g>
        </svg>
      );

    if (icon_name === "menu_opensubmenu_svg")
      return (
        <svg
          className="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      );

    return <></>;
  }

  function getMenuButtonWithItems(menuItem: MenuItem): JSX.Element {
    return (
      <button
        id="button-dropdown-menu-position"
        type="button"
        className="flex items-center w-full text-gray-400 transition duration-75 rounded-lg px-1 py-2 group hover:bg-zinc-700"
        aria-controls={`dropdown-menu-${menuItem.id}`}
        data-collapse-toggle={`dropdown-menu-${menuItem.id}`}
        onClick={() => toggleMenuItemsHidden(menuItem.id)}
      >
        {getSvgImages(menuItem.icon)}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">
          {menuItem.label}
        </span>
        {getSvgImages("menu_opensubmenu_svg")}
      </button>
    );
  }

  function getMenuLinkWithoutItems(menuItem: MenuItem): JSX.Element {
    return (
      <a
        href={menuItem.link}
        className="flex items-center text-gray-400 rounded-lg px-1 py-2 hover:bg-zinc-700"
      >
        {getSvgImages(menuItem.icon)}
        <span className="ml-3">{menuItem.label}</span>
      </a>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div className="flex h-full w-full">
        <nav className={`bg-zinc-800 w-96 flex flex-col ${menuHidden}`}>
          <div className="h-20 py-4 px-4 flex items-center justify-center">
            <img
              src="/images/logo-bev-capital.png"
              alt="Logo"
              className="h-10"
            />
          </div>
          <div className="flex flex-col pt-5 w-full justify-center h-full border-zinc-900 border-solid border-t-2">
            <input
              id="search"
              name="search"
              type="text"
              onChange={(e: any) => searchOnMenu(e.target.value)}
              value={search}
              className="self-center
                block
                w-10/12
                py-2
                mb-2
                outline-none
                appearance-none
                text-md
                text-gray-400
                border-b
                border-solid
                border-zinc-400
                bg-zinc-800
              "
              placeholder="Search..."
            />

            <div className="px-5 mt-3 h-full overflow-y-auto">
              <ul className="space-y-3 font-medium text-xl font-roboto">
                {menuItems.map((menuItem: MenuItem, index: number) => {
                  return (
                    <li key={index}>
                      {menuItem.items?.length > 0
                        ? getMenuButtonWithItems(menuItem)
                        : getMenuLinkWithoutItems(menuItem)}
                      {menuItem.items?.map(
                        (item: SubMenuItem, itemIndex: number) => {
                          return (
                            <ul
                              key={index + itemIndex}
                              id={`dropdown-${menuItem.id}`}
                              aria-labelledby={`button-${menuItem.id}`}
                              className={`${
                                getMenuItemsHidden(menuItem.id)
                                  ? "hidden"
                                  : "block"
                              } py-2 space-y-2`}
                            >
                              <li key={item.label}>
                                <a
                                  href={item.link}
                                  className="flex items-center w-full pl-9 transition duration-75 text-gray-400 rounded-lg px-1 py-2 group hover:bg-zinc-700"
                                >
                                  {item.label}
                                </a>
                              </li>
                            </ul>
                          );
                        }
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex flex-col w-full">
          <header className="h-20">
            <div className="flex flex-row bg-zinc-800">
              <div className="flex h-20 px-6">
                <button className="outline-none" onClick={toggleMenuHidden}>
                  <svg
                    className="w-7 h-7 text-gray-500 hover:text-red-400"
                    xlinkShow="none"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <div className="bg-gray-400 w-full h-full overflow-x-auto p-2">
            <div>Content</div>
          </div>
          <footer className="bg-zinc-800 w-full fixed bottom-0 p-4 border-zinc-900 border-solid border-l-2 text-gray-400">
            <ul>
              <li>
                <a href="https://github.com/esilean" title="Github">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leandro-bevilaqua-461a2428/"
                  title="Linkedin"
                >
                  Linkedin
                </a>
              </li>
            </ul>
            <p>© 2023 made with ❤️ in Brazil by Leandro Bevilaqua</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
