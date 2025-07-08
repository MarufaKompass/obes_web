import React from 'react'
import aboutImage from "../../../public/images/home/about.jpg"
export default function About() {


  return (
    <div>
     <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#7b1e19] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Obesity Task Force</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We help businesses grow through innovative technology and strategic digital solutions.
        </p>
      </div>

      {/* Company Overview */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={aboutImage}
            alt="Company"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#7b1e19]">Who We Are</h2>
            <p className="text-base leading-relaxed mb-4">
              We are a passionate team of creatives, engineers, and strategists committed to helping brands transform through technology.
            </p>
            <p className="text-base leading-relaxed">
              Our approach is collaborative, transparent, and tailored to each client's unique goals.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-2 text-[#7b1e19]">Our Vision</h3>
            <p>
              To be a trusted global partner delivering high-impact technology solutions that drive meaningful business growth.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-2 text-[#7b1e19]">Our Mission</h3>
            <p>
              To empower organizations with intelligent software, outstanding service, and a commitment to excellence in every project.
            </p>
          </div>
        </div>
      </section>


    </div>
    </div>
  )
}
