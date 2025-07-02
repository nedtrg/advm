"use client";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const testimonials = [
  {
    name: "Julian Juarez",
    role: "Financial Consultant",
    text: "Great service and quick maintenance!",
    image: "/images/testimonial1.jpeg",
    stars: 5,
  },
  {
    name: "Olivia and Tammy Smith-Barnes",
    role: "Founder and Cofounder",
    text: "Working with EZCharger was a game-changer. Their support and EV solutions made launching our green initiative seamless.",
    image: "/images/testimonial2.jpeg",
    stars: 3,
  },
  {
    name: "Riley Johnson",
    role: "EV Enthusiast",
    text: "The best EV chargers in the market! Highly recommend.",
    image: "/images/testimonial3.jpeg",
    stars: 4,
  },
  {
    name: "Alex Kim",
    role: "Sustainability Advocate",
    text: "EZCharger is leading the way in sustainable energy solutions. Their chargers are efficient and reliable.",
    image: "/images/testimonial4.jpeg",
    stars: 5,
  },
];

export default function RequestAndTestimonials() {
  const form = useRef(null);
  const [agreed, setAgreed] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_n9fc7qa", "template_21xat7e", form.current, {
        publicKey: "ks_EWp-bVml_VmdSN",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message Successfully Sent!");
        },
        (error) => {
          console.error("FAILED...", error); // avoid error.text
          toast.error("Message failed to send, please check and try again.");
        }
      );
  };

  return (
    <section className="w-full">
      {/* REQUEST INFO SECTION */}
      <div className="bg-gradient-to-br from-rose-400 to-purple-600 p-6 sm:p-10 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
          REQUEST <span className="font-light">INFORMATION</span>
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-right"
          className="flex flex-wrap justify-center gap-4 px-4 max-w-5xl mx-auto"
        >
          <input
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Your Name*"
            required
            className="p-1 w-full sm:w-60 rounded-lg bg-white text-black placeholder-gray-600"
          />
          <input
            id="user_phone"
            type="tel"
            name="user_phone"
            placeholder="Your Phone Number*"
            className="p-1 w-full sm:w-60 rounded-lg bg-white text-black placeholder-gray-600"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Add any specific message..."
            className="p-1 w-full sm:w-60 rounded-lg bg-white text-black placeholder-gray-600"
          />

          <div className="flex items-center space-x-2">
            <input
              id="agreement"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 mt-1"
              required
            />
            <label htmlFor="agreement" className="text-sm text-gray-700">
              You agree to our friendly{" "}
              <a href="#" className="underline text-blue-600">
                privacy policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="p-3 w-full font-semibold sm:w-60 border rounded-lg border-white text-white hover:bg-purple-900 hover:text-white transition"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* TESTIMONIAL SLIDER */}
      <div className="flex flex-col md:flex-row h-auto md:h-screen">
        {/* TEXT SLIDER */}
        <div className="md:w-1/2 bg-gray-950 text-white p-6 sm:p-10 flex items-center justify-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop
            className="w-full"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-left space-y-4 sm:space-y-6 max-w-lg mx-auto">
                  <h3 className="text-3xl sm:text-5xl font-light mb-2 text-justify">
                    <span className="font-bold">TEST</span>IMONIALS
                  </h3>

                  <div>
                    <p className="font-semibold text-lg">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>

                  <hr className="border-gray-600" />

                  <div className="text-base italic flex items-start gap-2 text-gray-200">
                    <svg
                      className="w-6 h-6 text-gray-400 mt-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.17 6A4.17 4.17 0 0 0 3 10.17v2.66A4.17 4.17 0 0 0 7.17 17H9v-1.5H7.17a2.67 2.67 0 0 1-2.67-2.67v-2.66A2.67 2.67 0 0 1 7.17 7.5H9V6H7.17ZM17.17 6A4.17 4.17 0 0 0 13 10.17v2.66A4.17 4.17 0 0 0 17.17 17H19v-1.5h-1.83a2.67 2.67 0 0 1-2.67-2.67v-2.66A2.67 2.67 0 0 1 17.17 7.5H19V6h-1.83Z" />
                    </svg>
                    <span>“{t.text}”</span>
                  </div>

                  <div className="flex items-center gap-1 text-yellow-400 text-xl">
                    {[...Array(t.stars || 5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* IMAGE SLIDER */}
        <div className="md:w-1/2 h-64 sm:h-96 md:h-auto">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000 }}
            loop
            className="h-full w-full"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
