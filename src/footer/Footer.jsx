import { Link } from "react-router-dom";
import whiteLogo from "../../public/images/logo/whiteLogo.png";
import Bottom from "./Bottom";
import app from "../../public/images/home/app.png";
import google from "../../public/images/home/google.png";
export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#1E2939] text-white">
      <div className="md:container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info & Social Icons */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <Heart className="h-6 w-6 text-primary" /> */}
              <img src={whiteLogo} alt="whiteLogo" className="w-30" />
            </div>
            <p
              className="text-[#fff] text-[14px]"
              style={{ fontFamily: "poppins" }}
            >
              Providing exceptional healthcare services with compassion and
              expertise since 2025.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <button
                className="text-white hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </button>

              {/* Twitter */}
              <button
                className="text-white hover:text-blue-400"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </button>

              {/* Instagram */}
              <button
                className="text-white hover:text-pink-600"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </button>

              {/* LinkedIn */}
              <button
                className="text-white hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-white hover:text-primary"
                style={{ fontFamily: "poppins" }}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-primary"
                style={{ fontFamily: "poppins" }}
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-primary"
                style={{ fontFamily: "poppins" }}
              >
                Services
              </Link>
              <Link
                href="#doctors"
                className="text-white hover:text-primary"
                style={{ fontFamily: "poppins" }}
              >
                Our Doctors
              </Link>
              <Link
                href="#blog"
                className="text-white hover:text-primary"
                style={{ fontFamily: "poppins" }}
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-primary"
                style={{ fontFamily: "poppins" }}
              >
                Contact
              </Link>
              <a
                href="https://bes.org.bd/"
                target="_blank"
                className="text-white hover:text-primary"
                style={{ fontFamily: "poppins" }}
              >
                <p>BES</p>
              </a>
            </nav>
          </div>

          {/* Services */}

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-gray-400" style={{ fontFamily: "poppins" }}>
              Subscribe to our newsletter for the latest updates and health
              tips.
            </p>
            <form className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2  bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                  style={{ fontFamily: "poppins" }}
                >
                  Subscribe
                </button>
              </div>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: "poppins" }}
              >
                By subscribing, you agree to our{" "}
                <Link
                  href="#"
                  className="underline hover:text-white"
                  style={{ fontFamily: "poppins" }}
                >
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>

          {/* Newsletter */}
          <div className="lg:flex block lg:items-center lg:justify-end">
            <nav className="flex  flex-col space-y-1">
              <p>Consultant & Developed by</p>

              <div className="flex gap-2">
                <a
                  href="https://hellokompass.com/"
                  target="_blank"
                  className="text-[#12a9b2]"
                >
                  Kompass Technology Limited
                </a>
              </div>
              <div className="flex gap-2 mt-4">
              <a href="https://play.google.com/store/apps/details?id=com.hellokompass.connect&pli=1" target="_blank">
                  <div>
                <img src={app} alt="app store"  style={{width:'140px'}}></img>
                </div>
              </a>
                <a href="https://apps.apple.com/us/app/kompass-connect/id6449901732?platform=iphone" target="_blank"> 
                <div>
                <img src={google} alt="google store" style={{width:'140px'}}></img>
                </div>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t pt-6">
          <Bottom></Bottom>
        </div>
      </div>
    </footer>
  );
}
