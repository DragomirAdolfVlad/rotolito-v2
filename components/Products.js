import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'tailwindcss/tailwind.css'; // Importăm stilurile Tailwind CSS

function Products() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlidesPerView(1);
      } else if (screenWidth < 1024) {
        setSlidesPerView(2);
      } else if (screenWidth < 1280){
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="produse" className="bg-[#ececf3]">
      <div className="container mx-auto">
        <div className="text-[#0E136C] flex mb-7">
          <h1 className="mx-auto text-3xl font-semibold mt-14">Produse</h1>
        </div>

        <div className="px-4 py-8 2lg:px-12 2lg:py-12">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="w-full h-[332px] lg:md:h-[332px] relative overflow-hidden">
                <img src="/ban-5.jpg" alt="Slide 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
                <img src="/ban-6.jpg" alt="Slide 2" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
                <img src="/ban-3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
                <img src="/ban-4.jpg" alt="Slide 4" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-7.jpeg" alt="Slide 1" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-8.jpeg" alt="Slide 2" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-9.jpeg" alt="Slide 3" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-10.jpeg" alt="Slide 4" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-11.jpeg" alt="Slide 1" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-12.jpeg" alt="Slide 2" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-13.jpeg" alt="Slide 3" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-14.jpeg" alt="Slide 4" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-15.jpeg" alt="Slide 4" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-16.jpeg" alt="Slide 1" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-17.jpeg" alt="Slide 2" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] md:h-[332px] relative overflow-hidden">
              <img src="/ban-18.jpeg" alt="Slide 3" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[332px] mb-20 md:h-[332px] relative overflow-hidden">
              <img src="/ban-19.jpg" alt="Slide 4" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          {/* Adaugă aici restul slide-urilor */}
        </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Products;
