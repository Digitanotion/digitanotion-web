import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

// The certificate verify page lives on the student portal, where the real
// certificate records are — not on this marketing site.
const PORTAL_URL = "https://academy.digitanotion.com.ng";

export function CertificateValidationSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href={`${PORTAL_URL}/verify`}>
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 sm:p-12 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 border border-white/10">
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Verify a Certificate
                  </h3>
                  <p className="text-gray-300 text-base max-w-xl">
                    Confirm the authenticity of a Digitanotion Academy
                    certificate using its unique certificate code.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <span className="text-white font-semibold">
                    Verify Now
                  </span>
                  <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
