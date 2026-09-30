"use client";
import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AwardsSection() {
  return (
    <section
      className="relative w-full bg-background pb-24 overflow-hidden px-4 lg:px-16"
      role="region"
      aria-label="Digitanotion Award of Recognition"
    >
      {/* SEO: Structured data for the award, scoped to this section */}
      <div style={{ display: "none" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Digitanotion Limited",
              "url": "https://digitanotion.com.ng",
              "award":
                "Special Recognition Award — 6th Eastern Nigeria Merit Awards, presented by Nigeria Festival of Awards Magazine, Awka, 10th May 2026",
            }),
          }}
        />
      </div>

      <div className="mx-auto relative z-10">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-amber-300/30 bg-gradient-to-br from-amber-50 via-background to-background p-8 md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-amber-300/30 to-primary/10 rounded-full blur-3xl -z-10" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Text */}
            <div>
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 mb-6"
                initial={{ scale: 0.8, rotate: -8 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <FiAward className="text-3xl" aria-hidden="true" />
              </motion.div>

              <div itemScope itemType="https://schema.org/Award">
                <p className="text-sm font-semibold text-amber-700 mb-2 tracking-widest uppercase">
                  Special Recognition Award
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold leading-tight text-balance mb-3 text-foreground"
                  itemProp="name"
                >
                  Honoured at the 6th Eastern Nigeria Merit Awards
                </h2>
                <p
                  className="text-muted-foreground leading-relaxed max-w-xl"
                  itemProp="description"
                >
                  On 10th May 2026, Digitanotion Limited was presented with a
                  Special Recognition Award at the 6th Eastern Nigeria Merit
                  Awards in Awka, courtesy of the Nigeria Festival of Awards
                  Magazine — celebrating organisations that have
                  distinguished themselves and contributed to excellence
                  across the Eastern Region. We're honoured to be counted
                  among them, and it fuels everything we build next.
                </p>
                <p className="text-sm text-muted-foreground/80 mt-4">
                  Courtesy: Nigeria Festival of Awards Magazine · Awka,
                  Anambra State
                </p>
              </div>
            </div>

            {/* Photo + certificate composition */}
            <div className="relative">
              <motion.div
                className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden border border-amber-300/30 shadow-xl shadow-amber-900/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Image
                  src="/images/awards/6th-eastern-merit-awards-presentation.jpg"
                  alt="Digitanotion Limited receiving the Special Recognition Award at the 6th Eastern Nigeria Merit Awards in Awka"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover"
                  priority={false}
                />
              </motion.div>

              <motion.div
                className="hidden sm:block absolute -bottom-6 -right-2 md:right-4 w-32 md:w-40 rounded-xl overflow-hidden border-4 border-background shadow-2xl rotate-3"
                initial={{ opacity: 0, y: 20, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/images/awards/6th-eastern-merit-awards-certificate.jpg"
                  alt="Digitanotion's 6th Eastern Nigeria Merit Awards Special Recognition certificate, presented to MD/CEO Digitanotion"
                  width={450}
                  height={800}
                  sizes="160px"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SEO: Hidden content for search engines */}
      <div className="sr-only" aria-hidden="false">
        <h3>
          Digitanotion Limited Award — 6th Eastern Nigeria Merit Awards
        </h3>
        <p>
          Digitanotion Limited received a Special Recognition Award at the
          6th Eastern Nigeria Merit Awards (part of the Nigerian Festival of
          Awards), presented by the Nigeria Festival of Awards Magazine to
          the MD/CEO of Digitanotion on 10th May 2026 in Awka, Anambra
          State, Nigeria.
        </p>
      </div>
    </section>
  );
}
