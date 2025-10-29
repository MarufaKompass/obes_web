import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Doctors() {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await axios.get("https://api.obesitybes.com/public/api/expertlist");
        setExperts(res.data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchExperts();
  }, []);

  if (loading) return <p>Loading experts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-[#fbfbfb]">
      <div className="w-full md:container mx-auto py-12">

        <div className="text-center lg:mb-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Experts</h2>
          <p className="text-gray-600">Meet the amazing people who make it all happen</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1324: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1524: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
        >
          {experts.map((emp) => (
            <SwiperSlide key={emp.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 h-[500px] md:h-[500px] px-4 ">
                <div className="relative">
                  <img
                    src={emp.drimg}
                    alt={emp.drname}
                    className="w-full md:h-[300px] h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4 ">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {emp.drname}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-1">
                    {emp.designation}, {emp.hospital}
                  </p>
                  <p className="text-gray-500 text-xs mb-3">{emp.add_desig}</p>
                  <p className="text-[#333] text-sm font-medium mb-1">{emp.hospital}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}
