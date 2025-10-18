'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonial = () => {
const testimonials = [ 
  { imageUrl: "/aftab.jpeg", name: "Aftab Saraz", designation: "CEO & Co-Founder at Zetsol Technologies", review: "Owais delivered quality work within deadlines, showing strong technical skills and a great learning attitude during his internship at Zetsol Technologies. We appreciate his efforts and wish him continued success.", }
  , { imageUrl: "/abdul haseeb.jpeg", name: "Abdul Haseeb", designation: "Founder & CEO at Verior", review: "Owais completed his internship as a Frontend Developer with excellence, delivering responsive and well-structured interfaces on time. He showed strong technical skills, creativity, and a great learning attitude.", }, { imageUrl: "/hashir.jpeg", name: "Hashir Shaikh", designation: "Senior Software Engineer at Zetsol Technologies", review: "I’ve worked with Owais on multiple projects at Zetsol Technologies and through freelance collaborations. He’s a skilled and reliable developer who consistently delivers quality work on time and is a great team player.", }, 
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="testimonial"
      className="relative w-full py-32 font-[Montserrat] bg-background dark:bg-div/30"
    >
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-muted-foreground mb-4">
          What our clients say?
        </h2>
        <p className="text-lg text-muted-foreground dark:text-foreground max-w-2xl mx-auto">
          Hear from our clients who trust us to deliver exceptional results.
        </p>
      </div>

      {/* Cards Container */}
      <motion.div
        className="w-full flex flex-wrap justify-center gap-6 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[368px] bg-background/30 dark:bg-div/40 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 shadow-md hover:scale-[1.02] transition-transform"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg sm:text-xl text-foreground dark:text-muted-foreground">
                  {testimonial.name}
                </h3>
                {testimonial.designation && (
                  <p className="text-sm text-muted-foreground dark:text-foreground">
                    {testimonial.designation}
                  </p>
                )}
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mt-2">
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

            {/* Review */}
            <p className="text-sm sm:text-base text-foreground dark:text-muted-foreground leading-6 mt-2">
              {testimonial.review}
            </p>

            {/* Quote Icon */}
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
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonial;
