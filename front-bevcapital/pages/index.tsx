import { useCallback, useState } from "react";

export default function Home() {
  const [menuHidden, setMenuHidden] = useState("");

  const toggleMenuHidden = useCallback(() => {
    setMenuHidden((curr) => (curr === "" ? "hidden" : ""));
  }, []);

  return (
    <div className="bg-red-300 relative w-full h-full">
      <div className="flex h-full w-full">
        <nav className={`bg-zinc-800 w-72 flex flex-col ${menuHidden}`}>
          <div className="bg-zinc-800 h-20 py-4 px-4 flex items-center">
            <img
              src="/images/logo-bev-capital.png"
              alt="Logo"
              className="h-7"
            />
            <span className="font-semibold text-red-800 mx-4 text-lg">
              Bev Capital
            </span>
          </div>
          <div className="flex flex-col pt-5 w-full justify-center h-full border-zinc-900 border-solid border-t-2">
            <input
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

            <div className="flex flex-col gap-5 mt-5 pl-5 h-full">
              <div className="text-gray-400 text-xl font-roboto">Positions</div>
              <div className="text-gray-400 text-xl font-roboto">Broker</div>
              <div className="text-gray-400 text-xl font-roboto">About</div>
            </div>
          </div>
        </nav>
        <div className="flex flex-col w-full">
          <header className="bg-blue-500 h-20">
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
          <div className="bg-gray-400 w-full">Content</div>
          <footer className="bg-red-500 w-full fixed bottom-0 py-4">
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
            <p>© 2020 made with ❤️ in Brazil by Leandro Bevilaqua</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
