import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { navLinks } from "../../utils/constants";

function Header() {
  const onSmallScreens = window.innerWidth < 640;
  const [isOpenHeader, setIsOpenHeader] = useState(!onSmallScreens);

  return (
    <header className="absolute left-0 z-[1] w-full">
      {/* Button to show and hide header on mobile screens */}
      <button
        aria-label={isOpenHeader ? "Close header" : "Open header"}
        onClick={() => setIsOpenHeader(!isOpenHeader)}
        className="absolute right-4 top-8 z-[3] flex size-14 items-center justify-center rounded-full bg-white text-primary-dark shadow-lg sm:hidden"
      >
        <HiBars3BottomRight className="size-8" />
      </button>

      <nav className="responsive-container flex items-center justify-between pt-10">
        {/* Logo */}
        <svg
          width="378.3"
          height="37.844528021856995"
          className="hidden xl:block"
          viewBox="0 0 349.551455496364 34.968569528451084"
        >
          <g
            transform="matrix(2.49063869289197,0,0,2.49063869289197,-3.486893219945497,-14.869112474008269)"
            fill="#ffffff"
          >
            <path d="M9.2 6.4399999999999995 l0 8.6 c0 6.6 -7.8 6.64 -7.8 -0.02 l0 -8.6 c0 -0.56 2.28 -0.56 2.28 0 l0 8.6 c0 3.66 3.24 3.68 3.24 0.02 l0 -8.6 c0 -0.6 2.28 -0.6 2.28 0 z M19.34 6.42 l0 12.74 c0 1 -1.92 1.02 -2.12 0.52 l-3 -7.36 l0 7.24 c0 0.6 -2.22 0.6 -2.22 0 l0 -12.5 c0 -1.56 1.94 -1.1 2.2 -0.54 l2.94 7.08 l0 -7.18 c0 -0.6 2.2 -0.6 2.2 0 z M22.6 11.98 l6.56 0 c0.6 0 0.6 2.24 0 2.24 l-2.84 0.04 l-0.88 0 l-2.84 -0.04 c-0.6 0 -0.6 -2.24 0 -2.24 z M38.720000000000006 16.42 c0.04 0.68 -0.14 1.44 -0.52 2 c-0.18 0.26 -0.38 0.52 -0.64 0.74 c-0.16 0.12 -0.32 0.26 -0.5 0.36 s-0.38 0.18 -0.56 0.26 c-0.6 0.26 -1.32 0.28 -1.94 0.12 c-0.32 -0.08 -0.62 -0.2 -0.9 -0.38 c-0.26 -0.16 -0.54 -0.36 -0.74 -0.6 c-0.22 -0.24 -0.42 -0.5 -0.56 -0.8 c-0.08 -0.18 -0.18 -0.38 -0.24 -0.58 c-0.04 -0.2 -0.1 -0.72 -0.1 -0.92 c0 -0.6 2.24 -0.6 2.24 0 c0 0.5 0.78 1.84 1.98 0.64 c0.5 -0.72 0.04 -1.54 -0.4 -2.14 c-0.68 -0.84 -1.56 -1.48 -2.28 -2.28 c-0.42 -0.46 -0.84 -0.98 -1.1 -1.56 c-0.14 -0.32 -0.26 -0.64 -0.34 -1 c-0.3 -1.66 0.22 -4.62 3.84 -4.28 c1.82 0.18 2.62 1.74 2.62 2.8 c0 0.6 -2.28 0.6 -2.28 0 c0 -0.8 -2.26 -0.9 -1.98 0.86 c0.04 0.18 0.08 0.36 0.16 0.54 c0.12 0.26 0.26 0.48 0.42 0.7 c0.2 0.26 0.4 0.48 0.64 0.7 c0.88 0.86 1.88 1.64 2.52 2.74 c0.38 0.64 0.6 1.34 0.66 2.08 z"></path>
          </g>
          <g
            transform="matrix(0.5035852561658415,0,0,0.5035852561658415,93.68256095377343,-7.685099651719124)"
            fill="#ffffff"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M91.4,48.7c-1.9-7.5-3.9-15-5.8-22.5c-0.1-0.4-0.3-0.6-0.7-0.8c-9.4-3.3-18.7-6.6-28-9.9c-0.6-0.2-1.2-0.3-1.8-0.2  c-6.4,0.6-12.8,1.3-19.1,1.9c-0.5,0.1-1.1,0.1-1.6,0.3c-4,1.9-8.1,3.8-12.2,5.6c-0.3,0.1-0.6,0.3-0.8,0.6  c-3.4,3.4-6.7,6.8-10.1,10.2c-0.2,0.2-0.4,0.5-0.4,0.8c-0.7,4.1-1.5,8.1-2.3,12.2c-0.1,0.5,0.1,0.8,0.3,1.1  c3.6,4.6,7.2,9.1,10.8,13.7c0.3,0.4,0.7,0.6,1.2,0.6c4.6,0,9.3,0,13.9,0c0.5,0,0.9,0.1,1.3,0.5c4.4,3.8,8.8,7.6,13.2,11.4  c0.4,0.3,0.6,0.4,1,0c1-0.8,2.1-1.6,3.4-2.6c0,0.4,0,0.7,0,1c0,0.6,0,1.1,0.6,1.6c4.3,3.3,8.6,6.7,12.9,10.1  c0.3,0.3,0.6,0.4,1.1,0.4c2.3,0,4.5,0,6.8,0c0.8,0,0.8,0,0.4-0.7c-2-3.7-3.9-7.5-6-11.2c-0.3-0.5-0.2-0.7,0.3-1.1  c4.5-3.2,9-6.4,13.6-9.5c0.3-0.2,0.6-0.5,0.8-0.9c2.4-3.9,4.7-7.7,7.1-11.6C91.5,49.4,91.5,49.1,91.4,48.7z M25.6,25.9  c3.3-1.5,6.6-3.1,9.9-4.7c0.9-0.5,1.9-0.6,2.8-0.7c5.8-0.6,11.6-1.1,17.4-1.7c0.3,0,0.7,0,1,0.1c8.6,3,17.1,6,25.7,9  c0.4,0.1,0.6,0.3,0.7,0.7c0.3,1.3,0.7,2.7,1.1,4c0.2,0.5,0,0.6-0.5,0.6c-5.3,0-10.6,0-15.9,0c-0.5,0-0.8,0.1-1.1,0.6  c-0.8,1.5-1.7,3-2.5,4.4c-0.2,0.3-0.4,0.5-0.8,0.5c-5.1,0-10.2,0-15.4,0c-0.3,0-0.6-0.1-0.8-0.4c-0.7-1.2-1.3-2.3-2-3.5  c-0.2-0.3-0.2-0.6,0-0.9c0.8-1,1.5-2.1,2.3-3.2c0.2-0.3,0.4-0.4,0.8-0.4c3.3,0,6.5,0,9.8,0c0.4,0,0.7,0.2,1,0.4  c1.2,0.8,2.7,0.7,3.7-0.3c0.9-1,1.1-2.5,0.3-3.7c-0.8-1.1-2.4-1.7-3.6-0.9c-1.1,0.8-2.2,0.7-3.3,0.7c-3.2,0-6.5,0-9.7,0  c-0.5,0-0.7,0.1-1,0.5c-0.7,1.1-1.5,2.2-2.2,3.3c-0.3,0.4-0.4,0.4-0.6,0c-0.3-1-1-1.2-2-1.2c-5.8,0.1-11.6,0-17.4,0  c-0.3,0-0.5,0-0.8,0C23.3,28,24.1,26.6,25.6,25.9z M80.3,59.4c-5.3,3.7-10.5,7.4-15.8,11.1c-0.4,0.3-0.5,0.5-0.2,1  c1.5,2.8,2.9,5.6,4.4,8.4c0.1,0.2,0.3,0.5,0.2,0.8c-3.7-2.9-7.3-5.7-11-8.5c-0.3-0.3-0.3-0.5-0.3-0.9c0-2.5,0-4.9,0-7.4  c-0.3,0-0.5,0.2-0.7,0.4c-2.1,1.6-4.3,3.3-6.4,4.9c-0.5,0.4-0.8,0.3-1.2-0.1c-3.9-3.4-7.8-6.8-11.7-10.2c-0.4-0.3-0.8-0.5-1.3-0.5  c-4.5,0-9,0-13.5,0c-0.8,0-1.1-0.6-1.5-1.1c-0.2-0.2,0.1-0.4,0.2-0.6c0.7-1,1.4-1.9,2-2.9c0.6-0.8,1.7-1,2.5-0.4  c1.9,1.4,4.3,0.5,4.6-1.8c0.2-1.2-0.4-2.3-1.4-2.9c-1-0.6-2.4-0.5-3.2,0.3c-0.3,0.2-0.5,0.3-0.9,0.3c-0.9,0-1.8,0-2.7,0  c-0.4,0-0.7,0.1-0.9,0.5c-0.9,1.3-1.8,2.5-2.7,3.8c-0.3,0.4-0.4,0.4-0.7,0c-1.7-2.3-3.5-4.6-5.2-6.8c-0.2-0.3-0.3-0.5-0.2-0.9  c0.1-0.7,0.3-1.3,0.3-2c0.1-0.5,0.3-0.7,0.8-0.7c5.3,0,10.6,0,15.9,0c1,0,2,0,3,0c0.5,0,0.7,0.1,1,0.6c1.6,2.9,3.3,5.8,5,8.7  c0.3,0.5,0.5,0.8,1.1,0.7c1.5-0.3,2.4,0.3,3,1.7c0.8,1.8,2,3.5,2.9,5.2c0.2,0.4,0.4,0.5,0.8,0.5c1.1,0,2.2,0,3.3,0  c0.9,0,1.7,0,2.6,0.6c1,0.7,2.7,0.4,3.3-0.5c1.1-1.4,1-3,0-4.1c-1-1-2.7-1.3-3.7-0.4c-0.5,0.4-1,0.4-1.6,0.5c-1.7,0.3-2.8-0.3-3.3-2  c-0.2-0.4-0.4-0.8-0.7-1.4c0.3,0,0.5,0,0.7,0c4.3,0,8.5,0,12.8,0c0.5,0,0.7,0.1,1,0.6c0.6,1.2,1.3,2.3,2,3.4c0.2,0.4,0.5,0.5,1,0.5  c5.6,0,11.3,0,16.9,0c0.3,0,0.5,0,0.9,0C81.3,58.4,80.9,59,80.3,59.4z M86.9,48.9c-0.9,1.4-1.7,2.8-2.6,4.2  c-0.2,0.3-0.4,0.4-0.8,0.4c-5.8,0-11.7,0-17.5,0c-0.4,0-0.6-0.2-0.8-0.5c-0.7-1.2-1.4-2.3-2-3.5c-0.2-0.4-0.5-0.6-1-0.6  c-6.7,0-13.3,0-20,0c-0.5,0-0.9-0.1-1.1-0.6c-1.6-2.9-3.3-5.7-5-8.6c-0.3-0.5-0.5-0.6-1.1-0.6c-6.8,0-13.6,0-20.3,0  c-0.7,0-0.7-0.1-0.7-0.8c0.2-2.2,1.9-3.3,3.2-4.8c0.2-0.2,0.5-0.2,0.7-0.2c3.3,0,6.7,0,10,0c3.3,0,6.7,0,10,0c0.5,0,0.7,0.1,1,0.6  c1.7,2.9,3.4,5.9,5.1,8.8c0.2,0.4,0.5,0.6,1,0.6c6.6,0,13.2,0,19.8,0c0.5,0,0.7-0.2,0.9-0.6c0.8-1.5,1.7-3,2.5-4.4  c0.2-0.4,0.4-0.5,0.8-0.5c4.9,0,9.9,0,14.8,0c0.5,0,0.7,0.2,0.8,0.6c0.4,1.8,0.9,3.6,1.4,5.4c0.2,0.5,0,0.7-0.5,0.6  c-3.2,0-6.4,0-9.6,0c-0.4,0-0.6-0.1-0.9-0.3c-1.3-1-2.9-0.8-3.9,0.3c-1,1.1-1,2.9,0.1,3.9c1.1,1.1,2.7,1.2,4,0.1  c0.2-0.2,0.4-0.2,0.7-0.2c3.6,0,7.1,0,10.7,0C87.2,48.3,87.2,48.5,86.9,48.9z"
            ></path>
          </g>
          <g
            transform="matrix(2.49063869289197,0,0,2.49063869289197,141.51310381098182,-14.869116036895498)"
            fill="#ffffff"
          >
            <path d="M6.26 16.2 c0 -0.6 2.22 -0.6 2.22 0 c0 2.24 -1.16 3.8 -3.28 3.8 c-2.22 0 -3.74 -1.38 -3.8 -3.5 l0 -0.04 l0 -6.9 l0 -0.04 c0.06 -2.14 1.66 -3.56 3.8 -3.52 c2.24 0.04 3.28 1.6 3.28 3.82 c0 0.6 -2.22 0.6 -2.22 0 c0 -0.22 0 -0.4 -0.04 -0.6 c-0.12 -1.18 -1.54 -0.96 -1.84 -0.8 c-0.58 0.28 -0.7 0.98 -0.7 1.46 l0 6.26 c0.02 0.48 0.12 1.18 0.7 1.46 c0.3 0.16 1.72 0.38 1.84 -0.78 c0.04 -0.2 0.04 -0.4 0.04 -0.62 z M13.16 6.42 l0 13.14 c0 0.6 -2.28 0.6 -2.28 0 l0 -13.14 c0 -0.6 2.28 -0.6 2.28 0 z M21.060000000000002 6.42 l2.08 12.7 c0.16 1 -2.1 1.1 -2.22 0.38 l-0.4 -2.4 l-2.34 0 l-0.4 2.4 c-0.1 0.6 -2.38 0.62 -2.22 -0.38 l2.1 -12.7 c0.1 -0.6 3.32 -0.54 3.4 0 z M20.14 14.84 l-0.78 -4.78 l-0.8 4.78 l1.58 0 z M27.82 17.740000000000002 l2.88 0 c0.4 0 0.4 2.26 0 2.26 l-4.02 0 c-1.14 0 -1.14 0 -1.14 -1.1 l0 -12.44 c0 -0.4 2.28 -0.4 2.28 0 l0 11.28 z M50.8 6.76 l0 12.8 c0 0.6 -2.26 0.6 -2.26 0 l0 -6.64 c-2.32 6.46 -2.36 6.54 -2.4 6.62 c-0.26 0.6 -1.78 0.6 -2.04 0 c-0.04 -0.08 -0.08 -0.16 -2.42 -6.7 l0 6.72 c0 0.6 -2.28 0.6 -2.28 0 l0 -12.8 c0 -0.98 2.02 -0.94 2.22 -0.4 l3.5 9.2 l3.44 -9.2 c0.2 -0.54 2.24 -0.6 2.24 0.4 z M55.88 17.72 l2.86 0 c0.6 0 0.6 2.28 0 2.28 l-3.86 0 c-1.28 0 -1.28 0 -1.28 -1.08 l0 -11.84 c0 -1.08 0 -1.08 1.22 -1.1 l3.9 0.02 c0.6 0 0.6 2.28 0 2.28 l-2.84 0 l0 3.64 l2 0 c0.6 0 0.6 2.3 0 2.3 l-2 0 l0 3.5 z M63.2 6 l2.7 0 c3.34 0 3.44 14 0.2 14 l-2.84 0 c-1.26 0 -1.26 0 -1.26 -1.1 l0 -11.8 c0 -1.08 0 -1.08 1.2 -1.1 z M65.08 8.26 l-0.02 0 c-0.8 0 -0.8 0 -0.8 0.76 l0 7.96 c0 0.74 0 0.74 0.84 0.74 l0.12 0 c1.3 0 1.24 -9.46 -0.14 -9.46 z M73.54 6.42 l0 13.14 c0 0.6 -2.28 0.6 -2.28 0 l0 -13.14 c0 -0.6 2.28 -0.6 2.28 0 z M81.44 6.42 l2.08 12.7 c0.16 1 -2.1 1.1 -2.22 0.38 l-0.4 -2.4 l-2.34 0 l-0.4 2.4 c-0.1 0.6 -2.38 0.62 -2.22 -0.38 l2.1 -12.7 c0.1 -0.6 3.32 -0.54 3.4 0 z M80.52 14.84 l-0.78 -4.78 l-0.8 4.78 l1.58 0 z"></path>
          </g>
        </svg>

        {/* Nav links */}
        <ul
          className={`fixed right-0 top-0 z-[2] flex h-dvh w-[60%] flex-col gap-6 bg-white px-8 pt-[100px] shadow-lg duration-300 sm:relative sm:h-auto sm:w-auto sm:flex-1 sm:flex-row sm:items-center sm:justify-end sm:bg-transparent sm:px-0 sm:pt-0 sm:shadow-none ${isOpenHeader ? "translate-x-0" : "translate-x-[400px] sm:translate-x-0"}`}
        >
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                onClick={() => setIsOpenHeader(false)}
                className="text-2xl text-primary-dark duration-200 hover:-translate-y-1 hover:text-custom-yellow sm:text-lg sm:text-white"
              >
                <a href={link.to}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
