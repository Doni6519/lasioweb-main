"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const pathname = usePathname();
  var textColor;
  var bgColor;
  var hoverColor;
  var bgGradient;

  switch (pathname) {
    case "/about":
      textColor = "text-green-500";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-green-500 hover:bg-green-700 shadow-green-500/50";
      break;
    case "/services/search-engine-optimization":
      textColor = "text-green-500";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-green-500 hover:bg-green-700 shadow-green-500/50";
      break;
    case "/services/social-media-marketing":
      textColor = "text-green-500";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-green-500 hover:bg-green-700 shadow-green-500/50";
      break;
    case "/blog":
      textColor = "text-green-500";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-green-500 hover:bg-green-700 shadow-green-500/50";
      break;
    case "/request":
      textColor = "text-green-500";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-green-500 hover:bg-green-700 shadow-green-500/50";
      break;
    case "/services":
      textColor = "text-red-500";
      hoverColor = "md:hover:text-red-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-red-400";
      bgColor = "bg-red-500 hover:bg-red-700 shadow-red-500/50";
      break;
    case "/services/digital-marketing":
      textColor = "text-red-500";
      hoverColor = "md:hover:text-red-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-red-400";
      bgColor = "bg-red-500 hover:bg-red-700 shadow-red-500/50";
      break;
    default:
      textColor = "text-blue-500";
      hoverColor = "md:hover:text-blue-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-blue-400";
      bgColor = "bg-red-blue hover:bg-blue-700 shadow-blue-500/50";
      break;
  }
  function handleClick() {
    document.getElementById("sub_nav").style.display = "none";
    document.getElementById("body").style.overflowY = "scroll";
  }
  function handleMenu() {
    document.getElementById("sub_nav").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
  }
  return (
    <nav className="absolute z-10 top-0 w-full">
      <div
        className={`sub_nav hidden ${bgGradient}`}
        id="sub_nav"
      >
        <div className="flex justify-between m-4">
          <Link href="/" className="flex flex-center gap-2">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>
          <svg
            className={`w-5 h-5 mt-5 me-3 ${textColor}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            onClick={handleClick}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </div>
        <ul className="flex text-black flex-col p-4 text-center md:p-0 mt-4 font-medium text-2xl ms-0  md:static rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 ">
          <li onClick={handleClick}>
            <Link
              href="/about"
              className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              About
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              href="/services"
              className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              Services
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              href="/our_work"
              className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              Our work
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              href="/blog"
              className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              Blog
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              href="/contact"
              className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex flex-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain"
          />
          {/* <p>LasioWeb</p> */}
        </Link>
        <div className="flex md:order-2">
          <Link href="/request">
            <button
              type="button"
              className={`text-white ${bgColor} shadow-lg font-bold uppercase bg-blue-700 focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0`}
            >
              Get Quote
            </button>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${textColor} w-5 h-5`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              onClick={handleMenu}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ">
          <ul className="text-sm uppercase flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 bg-white md:bg-transparent w-full ms-0 smh-screen  md:static rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <Link
                href="/about"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/our_work"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
              >
                Our work
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
