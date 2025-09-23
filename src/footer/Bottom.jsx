
import { Link } from "react-router-dom";
export default function Bottom() {
  return (
    <div>
      
               <div className="flex flex-col items-center justify-between gap-4 ">
            <p className="text-center text-sm text-gray-400" style={{ fontFamily: "poppins" }}>
              &copy; {new Date().getFullYear()} BES. All rights reserved.
            </p>
            <nav className="flex gap-4 text-sm">
              <Link to="#" className="text-gray-400 hover:text-white" style={{ fontFamily: "poppins" }}>Privacy Policy</Link>
              <Link to="#" className="text-gray-400 hover:text-white" style={{ fontFamily: "poppins" }}>Terms of Service</Link>
              <Link to="#" className="text-gray-400 hover:text-white" style={{ fontFamily: "poppins" }}>Cookie Policy</Link>
            </nav>
          </div>
    </div>
  )
}
