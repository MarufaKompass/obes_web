// import { Link } from 'react-router'
import { Heart, ArrowRight } from "lucide-react"

import Slider from "./Slider";
export default function HeroSection() {
  return (
    <section className="w-full  bg-[#fbfbfb]">
      <div className="md:container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:gap-10 lg:grid-cols-2 grid-cols-1">

          <div className="flex items-center">
            <div className="space-y-4">
              <div className="text-center">
                <h1 className="text-3xl lg:text-[55px] font-bold tracking-tight text-gray-900  pb-[30px] pt-[30px]  lg:leading-[55px]">
                  <span className="text-primary-color font-[poppins]">Bangladesh Endocrine Society</span><span> Obesity Taskforce</span></h1>
              </div>
              <div className="w-[100%]">
                <p className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-color " style={{ backgroundColor: 'rgba(123, 30, 25, 0.3)' }}>
                  <Heart className="h-4 w-4" />
                  Your Healthy Journey Starts Here
                </p>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Transform Your Life Withjhe
                <span className="text-primary-color font-[poppins]">  Obesity Experts</span>
              </h1>
              <p className="text-md text-gray-600 md:text-lg font-[poppins] mt-4 font-normal" >
                Comprehensive, compassionate care for sustainable weight management. Our evidence-based approach helps you
                achieve lasting health improvements.
              </p>
              <div className="mt-4 cursor-pointer">
                <a href="https://my.obesitybes.com/login" target="_blank">
                  <button size="lg" className="w-full bg-primary-color hover:bg-primary-color text-white text-[16px] font-semibold flex items-center justify-center py-3 px-8 font-[poppins] rounded-[4px] cursor-pointer" >
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </a>
              </div>
            </div>

          </div>
          <div className="flex justify-center">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  )
}
