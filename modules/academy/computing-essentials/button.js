"use client";

export default function Button({ data }) {
  const handleRegistration = () => {
    // Company WhatsApp number (replace with actual number)
    const phoneNumber = "+2348123456789"; // Example Nigerian number
    const message = encodeURIComponent(
      `Hello Digitanotion Academy! I am interested in your Computing Essentials Course, how do I get started?`,
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleRegistration}
      className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:shadow-xl hover:shadow-blue-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group"
    >
      <span>Register Now</span>
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
