// "use client";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// export default function Button({ data }) {
//   const router = useRouter();
//   return (
//     <motion.button
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//       className={
//         "px-15 rounded-full bg-green-800/90 hover:bg-green-800 w-full py-3 md:w-80 text-white border border-white/20"
//       }
//       onClick={() =>
//         router.push(
//           `/academy/register?course=${encodeURIComponent(JSON.stringify(data))}`
//         )
//       }
//     >
//       Register
//     </motion.button>
//   );
// }

"use client";

export default function Button({ data }) {
  const handleRegistration = () => {
    // Get course title from data or use current route
    const courseTitle = data?.title || "Ethical Hacking Specialization";
    // Company WhatsApp number (replace with actual number)
    const phoneNumber = "+2348073735836"; // Example Nigerian number
    const message = encodeURIComponent(
      `Hello Digitanotion Academy! I am interested in your ${courseTitle} Course (₦${data?.price || "370,000"}), how do I get started?`,
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleRegistration}
      className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold hover:shadow-xl hover:shadow-red-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group"
    >
      <span>Register Now - {data?.price || "₦370,000"}</span>
      <svg
        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
