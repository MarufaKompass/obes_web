"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import doctors1 from "../../../public/images/home/doctors/doctors1.jpeg";
import doctors2 from "../../../public/images/home/doctors/doctors2.jpeg";
import doctors3 from "../../../public/images/home/doctors/doctors3.jpeg";
import doctors4 from "../../../public/images/home/doctors/doctors4.jpeg";
import doctors5 from "../../../public/images/home/doctors/doctors5.jpeg";

const employees = [
  {
    id: 1,
    name: "Prof. Muhammad Hafizur Rahman",
    position: "Senior Consultant, United Hospital, Dhaka",
    department: "President, BES",
    email: "sarah.j@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    image: doctors1,
  },
  {
    id: 2,
    name: "Prof Md Faruque Pathan",
    position: "Director, Academy, BIRDEM",
    department: "Chief Patron, BES",
    email: "michael.c@company.com",
    phone: "+1 (555) 234-5678",
    location: "New York, NY",
    image:doctors2,
  },

  {
    id: 3,
    name: "Dr Shahjada Selim",
    position: "Associate Professor, Department of Endocrinology, BMU ",
    department: "General Secretary, BES",
    email: "david.k@company.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    image: doctors3,
  },
  {
    id: 4,
    name: "Dr. Tahniyah Haq",
    position: "Associate Professor, Department of Endocrinology, BMU Coordinator",
    department: "Obesity Taskforce and International Affairs Secretary, BES",
    email: "lisa.t@company.com",
    phone: "+1 (555) 567-8901",
    location: "Los Angeles, CA",
    image: doctors4,
  },
  {
    id: 5,
    name: "Dr Faria Afsana",
    position: "Associate Professor",
    department: "Dept Endocrinology, BIRDEM, Dhaka And President Elect, BES",
    email: "lisa.t@company.com",
    phone: "+1 (555) 567-8901",
    location: "Los Angeles, CA",
    image: doctors5,
  },

]

export default function Doctors() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerView = 5
  const maxIndex = Math.max(0, employees.length - cardsPerView)

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0))

  const visibleEmployees = employees.slice(currentIndex, currentIndex + cardsPerView)

  return (
    <div className="bg-[#fbfbfb]">
      <div className="w-full container mx-auto py-12 ">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Experts</h2>
        <p className="text-gray-600">Meet the amazing people who make it all happen</p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          {visibleEmployees.map((emp) => (
            <div
              key={emp.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img src={emp.image} alt={emp.name} className="w-full h-[270px] " />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{emp.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-1">{emp.position}</p>
                <p className="text-gray-500 text-xs mb-3">{emp.department}</p>
                {/* <div className="space-y-2">
                  <div className="flex items-center text-gray-600 text-xs">
                    <Mail className="w-3 h-3 mr-2 text-gray-400" />
                    <span className="truncate">{emp.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs">
                    <Phone className="w-3 h-3 mr-2 text-gray-400" />
                    <span>{emp.phone}</span>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-2">
        <span className="text-sm text-gray-500">
          Showing {currentIndex + 1}-{Math.min(currentIndex + cardsPerView, employees.length)} of{" "}
          {employees.length} Doctors
        </span>
      </div>
    </div>
    </div>
  )
}
