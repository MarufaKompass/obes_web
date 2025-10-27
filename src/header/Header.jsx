import { useState } from "react";
import { Link } from "react-router";
import routes from "../routes";
import logo from "../../public/images/logo/Logo.png";
import { ChevronUp, ChevronDown } from "lucide-react";
import MobileResponsive from "./MobileResponsive";
export default function Header() {

  const pages = routes[0].pages;
  const [openIndex, setOpenIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <nav className="py-5 shadow-lg">

      {/* Hamburger Button (md and smaller) */}

      <div className="flex justify-between lg:px-10 px-4 md:container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-between ">
            <MobileResponsive sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} pages={pages}></MobileResponsive>
          </div>
          <Link to="/">
            <div>
              <img src={logo} alt="logo" className="w-25" />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex gap-2 items-center">
          {pages.map((page, index) => (
            <div key={index} className="relative">
              <div
                onClick={() => handleToggle(index)}
                className="cursor-pointer text-[#333] hover:text-[#7B1E19] capitalize pl-4 text-[16px] font-normal flex justify-between items-center"
                style={{ fontFamily: "poppins" }}>
                <Link to={page.path} className="font-poppins">{page.name}</Link>

              </div>

              {/* Animated Submenu */}
              {page.children ? (
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden absolute top-10 left-4 ${openIndex === index
                    ? "max-h-40 w-[200px] shadow-xl  bg-white rounded-lg"
                    : "max-h-0 "
                    }`}
                >
                  {page.children?.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      to={child.path}
                      onClick={() => setOpenIndex(null)}
                      className="block text-[#111] hover:text-[#ec9f2b] pl-4 textAlign-left capitalize w-[160px] text-[14px] font-normal py-[4px] "
                      style={{ fontFamily: "poppins" }}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          <div className=" flex justify-between items-center ml-4  relative group cursor">
            <a href="https://my.obesitybes.com/login" target="_blank" className="font-semibold  text-[14px] underline-none text-[#fff] " style={{ fontFamily: "poppins" }}>
              <div className='flex gap-4 justify-end items-center h-auto border border-[#c2c1c1] px-10 py-2  rounded-[6px] bg-[#7B1E19]'>
                <span>Sign In</span>
              </div>
            </a>
          </div>
        </div>


      </div>
    </nav>
  );
}
