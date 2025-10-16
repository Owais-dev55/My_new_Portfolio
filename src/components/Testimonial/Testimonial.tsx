import React from "react";
// import Overlay from "@/components/Reuseables/Overlay";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      imageUrl: "/testimonial1.png",
      name: "Zara Noor",
      review:
        "I never have to worry about losing money again! Even when a member defaulted, my payout was fully covered.",
    },
    {
      imageUrl: "/testimonial2.png",
      name: "Abdullah Malik",
      review:
        "Finally, a Beesi platform that actually protects my savings. I can save stress-free!",
    },
    {
      imageUrl: "/testimonial3.png",
      name: "Hira Khan",
      review:
        "I never have to worry about losing money again! Even when a member defaulted, my payout was fully covered.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center font-[Urbanist] px-4 mt-8 sm:mt-10">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/left-right-gradient-image.png"
          alt="Left gradient background"
          fill
          className="opacity-80 object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-right-gradient-image.png"
          alt="Right gradient background"
          fill
          className="opacity-80 object-cover"
        />
      </div>

      <div className="w-full max-w-[1450px] flex flex-col items-center justify-center text-center">
        {/* <Overlay text="Testimonial" /> */}
        <h2 className="lg:text-4xl xl:text-5xl tracking-[-0.96px] text-[#282C32] capitalize  sm:text-3xl md:text-4xl font-bold leading-tight mt-4">
          What our clients say?
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-5 sm:gap-7 mt-8 sm:mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full max-w-full sm:max-w-[368px] h-auto sm:h-[281px] rounded-[20px] bg-white/30 backdrop-blur-md p-5 sm:p-6 flex flex-col gap-4 shadow-md"
            >
              <div className="flex items-center">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="rounded-[9px] object-cover"
                  />
                </div>
                <div className="ml-4 text-left">
                  <h1 className="font-semibold text-lg sm:text-xl text-[#282C32]">
                    {testimonial.name}
                  </h1>
                  <p className="text-[#737373] text-sm">Team Leader</p>
                </div>
              </div>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="relative w-4 h-4">
                    <Image
                      src="/star-icon.png"
                      alt="star"
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[#282C32] text-sm sm:text-base leading-6 tracking-[-0.32px] text-left mt-2">
                {testimonial.review}
              </p>
              <div className="flex justify-end mt-auto">
                <div className="relative w-[30px] h-[30px]">
                  <Image
                    src="/quotes.png"
                    alt="quote"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <button className="bg-[#8670E5] w-full sm:w-[255.99px] h-12 sm:h-14 rounded-full flex justify-center items-center gap-2 mt-12 sm:mt-20 px-6 py-3 hover:bg-[#7458e0] transition-colors">
          <h2 className="font-semibold text-base sm:text-lg text-white">
            Join a Secure BC Now!
          </h2>
          <GoArrowRight className="text-white text-lg" />
        </button> */}
      </div>
    </div>
  );
};

export default Testimonial;