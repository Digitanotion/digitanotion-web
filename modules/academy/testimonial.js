"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Testimonials Data - Added more testimonials to demonstrate pagination
const testimonials = [
  {
    name: "Chukwuebuka Emmanuel",
    role: "Fullstack Web Developer",
    content:
      "💯💯💯 They are superb💥💥, when It comes to technology. They are number 1, I am currently studying web development and cyber security with them and the progress is too good🔥🔥. DEAL WITH THE RIGHT PEOPLE AND ENJOY STUDYING ♥️❣️",
    avatar: "/images/testimonial-2.jpg",
  },
  {
    name: "ABDULLAHI DANTANI ABUBAKAR",
    role: "Cybersecurity Professional",
    content:
      "I wish to express my sincered gratitude for being part of this great and wonderful programme organised by DIGITANTION LIMITED. ",
    avatar: "/images/testimonial-4.jpg",
  },
  {
    name: "Oluwadamilare Abolaji",
    role: "SOC Analyst",
    content:
      "The experience so far has been awesome. I’m glad to be part of this program. This internship has really broadened my knowledge on cybersecurity (VAPT).",
    avatar: "/images/testimonial-4.jpg",
  },
  {
    name: "Chika Lilian Onyagu",
    role: "Cybersecurity Graduate",
    content:
      "Each task deepened my understanding of real-world cybersecurity challenges. The team's structured and practical training approach made complex concepts easy to grasp.",
    avatar: "/images/testimonial-1.jpg",
  },

  {
    name: "Kennedy Nosazeogie",
    role: "Penetration Tester",
    content:
      "My experience at Digitanotion was awesome and amazing. My mentor surpassed my expectations. The career in cybersecurity now has a direction.",
    avatar: "/images/testimonial-2.jpg",
  },

  {
    name: "Mondaddy Monday Adah",
    role: "Cybersecurity Analyst",
    content:
      "Since I started cybersecurity, I have never seen a company like Digitanotion that has brought the reality of cybersecurity with hands-on experience.",
    avatar: "/images/testimonial-3.jpg",
  },

  {
    name: "Stella Aniemeka",
    role: "Content Creator and Digital Marketer",
    content:
      "Getting a spot as a digital marketing intern is one of the best things to happen to me this year. Digitanotion gave me an opportunity to learn, better myself, better others and for this i am grateful. Their mode of teaching is very hands on and impactful. Agreeably the best tech learning center in Awka and anambra as a whole.",
    avatar: "/images/testimonial-5.jpg",
  },
  {
    name: "Chukwu Anthony Obinna",
    role: "Front-End Engineer",
    content:
      "Perfect place for learning web development. Excellent here in Awka.",
    avatar: "/images/testimonial-6.jpg",
  },
  {
    name: "Nathaniel John",
    role: "Cybersecurity Professional",
    content:
      "Digitanotion is the best in terms of resource provision and hands-on experience in Cybersecurity practice, VAPT and all. Thank you for impacting knowledge to us.",
    avatar: "/images/testimonial-7.jpg",
  },
  {
    name: "Agbo David",
    role: "VAPT and Web Developer",
    content:
      "Studying web dev and cybersecurity at Digitanotion and I must say the knowledge is massive. Glad to be here",
    avatar: "/images/testimonial-8.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Get current testimonials for the page
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  );

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Alumni Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from graduates who transformed their careers with
            Digitanotion Academy
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Navigation Buttons for Large Screens */}
          {testimonials.length > testimonialsPerPage && (
            <>
              <button
                onClick={goToPrevPage}
                className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-3 rounded-full bg-white border border-gray-300 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
                aria-label="Previous testimonials"
              >
                <FiChevronLeft className="text-gray-700" size={24} />
              </button>

              <button
                onClick={goToNextPage}
                className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-3 rounded-full bg-white border border-gray-300 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
                aria-label="Next testimonials"
              >
                <FiChevronRight className="text-gray-700" size={24} />
              </button>
            </>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={currentPage * testimonialsPerPage + index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                    <FiStar className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {testimonials.length > testimonialsPerPage && (
          <div className="flex justify-center items-center gap-4 mt-12">
            {/* Mobile Navigation Buttons */}
            <button
              onClick={goToPrevPage}
              className="lg:hidden p-2 rounded-full bg-white border border-gray-300 shadow hover:shadow-md hover:bg-gray-50 transition-all"
              aria-label="Previous page"
            >
              <FiChevronLeft className="text-gray-700" size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentPage === index
                      ? "bg-gradient-to-r from-orange-500 to-red-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={currentPage === index ? "page" : undefined}
                />
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            <button
              onClick={goToNextPage}
              className="lg:hidden p-2 rounded-full bg-white border border-gray-300 shadow hover:shadow-md hover:bg-gray-50 transition-all"
              aria-label="Next page"
            >
              <FiChevronRight className="text-gray-700" size={20} />
            </button>
          </div>
        )}

        {/* Page Indicator for Desktop */}
        {testimonials.length > testimonialsPerPage && (
          <div className="hidden lg:block text-center mt-6 text-gray-600 text-sm">
            Showing {currentPage * testimonialsPerPage + 1}-
            {Math.min(
              (currentPage + 1) * testimonialsPerPage,
              testimonials.length,
            )}{" "}
            of {testimonials.length} testimonials
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
