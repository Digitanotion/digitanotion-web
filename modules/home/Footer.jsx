import { FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const academyItems = [
  { href: "/academy/computing-essentials", label: "Computing Essentials" },
  { href: "/academy/dils", label: "Innovation Lab for Schools" },
  { href: "/academy/academy", label: "Digitanotion Tech Academy" },
];

const exploreCategories = [
  { href: "/services/software-development", label: "App Development" },
  { href: "/services/cysapafrica", label: "CySAP Africa" },
  { href: "/services/tech6project", label: "Tech6Project" },
  { href: "/services/cybouncer", label: "Cybouncer" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-orange-50 via-white to-red-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8 border-t border-orange-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Address Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-md">
                <FiMapPin className="text-white text-lg" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Our Location</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              Suite 6, Mgbajiaka Area, Digitanotion Limited
              <br />
              Along Onisha - Enugu Expressway
              <br />
              Opposite East-End Hotel, Awka
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border border-orange-200 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-gray-800">
                Open 9am - 4pm (WAT)
              </span>
            </div>
          </div>

          {/* Academy Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4 relative inline-block">
              Academy
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {academyItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 transition-all duration-300"
                  >
                    <span className="w-1 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {exploreCategories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 transition-all duration-300"
                  >
                    <span className="w-1 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4 relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
              </h3>
              <div className="space-y-2">
                <a 
                  href="tel:+2348073735836" 
                  className="block text-sm text-gray-700 hover:text-orange-600 transition-all duration-300 hover:translate-x-1"
                >
                  +234 80 7373 5836
                </a>
                <a
                  href="mailto:hello@digitanotion.com.ng"
                  className="block text-sm text-gray-700 hover:text-orange-600 transition-all duration-300 hover:translate-x-1"
                >
                  hello@digitanotion.com.ng
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-900">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { 
                    href: "https://facebook.com/digitanotion", 
                    icon: <FaFacebookF />, 
                    label: "Facebook",
                    color: "hover:bg-blue-600"
                  },
                  { 
                    href: "https://www.instagram.com/digitanotionsystems/", 
                    icon: <FaInstagram />, 
                    label: "Instagram",
                    color: "hover:bg-gradient-to-br from-orange-400 to-pink-600"
                  },
                  { 
                    href: "https://twitter.com/digitanotion", 
                    icon: <FaXTwitter />, 
                    label: "Twitter",
                    color: "hover:bg-black"
                  },
                  { 
                    href: "https://linkedin.com/company/digitanotion", 
                    icon: <FaLinkedinIn />, 
                    label: "LinkedIn",
                    color: "hover:bg-blue-700"
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 text-gray-700 border border-orange-200 hover:text-white transition-all duration-300 ${social.color} hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-orange-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-white">
              <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 font-medium">
            Copyright © {new Date().getFullYear()} Digitanotion. All rights reserved.
          </div>
          
          {/* Tagline with orange-red accent */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-700 font-medium">Building Digital and People Infrastructure.</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div className="w-1 h-1 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
              <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}