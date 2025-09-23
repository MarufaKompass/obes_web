"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import doctors1 from "../../../public/images/home/doctors/doctors1.jpeg";
import doctors2 from "../../../public/images/home/doctors/doctors2.jpeg";
import doctors3 from "../../../public/images/home/doctors/doctors3.jpeg";
import doctors4 from "../../../public/images/home/doctors/doctors4.jpeg";
import doctors5 from "../../../public/images/home/doctors/doctors5.jpeg";
import axios from "axios";



export default function Doctors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(5)
  const [error, setError] = useState(null);
  const [experts, setExperts] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) setCardsPerView(5)
      else if (width >= 768) setCardsPerView(3)
      else if (width >= 500) setCardsPerView(2)
      else setCardsPerView(1)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, experts?.data?.length - cardsPerView)

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0))


  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await axios.get("https://api.obesitybes.com/public/api/expertlist");
        setExperts(res.data);   // save response data
      } catch (err) {
        setError(err.message);  // handle error
      } finally {
        setLoading(false);      // stop loading
      }
    };

    fetchExperts();
  }, []); // run once on component mount

  if (loading) return <p>Loading experts...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <div className="bg-[#fbfbfb]">
      <div className="w-full md:container mx-auto py-12 ">
        <div className="text-center lg:mb-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Experts</h2>
          <p className="text-gray-600">Meet the amazing people who make it all happen</p>
        </div>


        <div className="relative">
          <div className="lg:mb-4 mb-6">

            {currentIndex > 0 && (
              <button
                onClick={prevSlide}
                className="absolute right-12 top-[-30px] -translate-y-1/2 -translate-x-4 bg-primary-color text-white p-2 rounded-full shadow-md hover:shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {currentIndex < maxIndex && (
              <button
                onClick={nextSlide}
                className="absolute right-8 top-[-30px] -translate-y-1/2 translate-x-4 bg-primary-color text-white p-2 rounded-full shadow-md hover:shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6 lg:px-0 px-6">
            {experts?.data?.map((emp) => (
              <div
                key={emp.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img src={emp.drimg} alt={emp.drname} className="w-full md:h-[300px] h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{emp.drname}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-1">{emp.designation}, {emp.hospital}</p>
                  <p className="text-gray-500 text-xs mb-3">{emp.add_desig}</p>
                  <p className="text-[#333] text-sm font-medium mb-1">{emp.hospital}</p>
                </div>
              </div>
            ))}
          </div>


        </div>

        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        <div className="text-center mt-2">
          <span className="text-sm text-gray-500">
            Showing {currentIndex + 1}-{Math.min(currentIndex + cardsPerView, experts?.data?.length)} of{" "}
            {experts?.data?.length} Doctors
          </span>
        </div>
      </div>
    </div>
  )
}
