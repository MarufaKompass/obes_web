import { Menu, X } from "lucide-react"
import { Link } from "react-router";
export default function MobileResponsive({ setSidebarOpen, sidebarOpen,pages }) {

    return (
        <div>
              <div className="md:hidden flex items-center">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-700">
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

            {sidebarOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-6 px-8 z-50">
                    {pages.map((page, index) => (
                        <div key={index} className="mb-2">
                            <Link
                                to={page.path}
                                className="block text-[#333] font-semibold text-[16px] py-2"
                                onClick={() => setSidebarOpen(false)}
                            >
                                {page.name}
                            </Link>
                            {/* Sidebar Submenu */}
                            {page.children && (
                                <div className="pl-4">
                                    {page.children.map((child, childIndex) => (
                                        <Link
                                            key={childIndex}
                                            to={child.path}
                                            className="block text-[#666] text-sm py-1"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
