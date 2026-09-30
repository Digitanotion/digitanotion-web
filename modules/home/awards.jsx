"use client";
import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

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
                "Award of Recognition — Nigerian Festival of Awards, 6th Eastern Edition (6th Eastern Nigeria Merit Awards), Awka, Anambra State, 2026",
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

          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30"
              initial={{ scale: 0.8, rotate: -8 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <FiAward className="text-4xl md:text-5xl" aria-hidden="true" />
            </motion.div>

            <div itemScope itemType="https://schema.org/Award">
              <p className="text-sm font-semibold text-amber-700 mb-2 tracking-widest uppercase">
                Award of Recognition
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold leading-tight text-balance mb-3 text-foreground"
                itemProp="name"
              >
                Honoured at the Nigerian Festival of Awards — 6th Eastern
                Edition
              </h2>
              <p
                className="text-muted-foreground leading-relaxed max-w-2xl"
                itemProp="description"
              >
                Digitanotion Limited was officially presented with an Award
                of Recognition at the 6th Eastern Nigeria Merit Awards in
                Awka — celebrating individuals, groups, and organisations
                that have distinguished themselves and contributed
                immensely to their fields across the Eastern Region. We're
                honoured to be counted among them, and it fuels everything
                we build next.
              </p>
            </div>
          </div>

          {/*
            Event photo slot: once the real award-night photo is added at
            public/images/awards/6th-eastern-merit-awards.jpg, drop in:
            <div className="mt-8 relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-amber-300/30">
              <Image src="/images/awards/6th-eastern-merit-awards.jpg" alt="Digitanotion Limited receiving the Award of Recognition at the 6th Eastern Nigeria Merit Awards in Awka" fill sizes="(max-width: 768px) 100vw, 900px" className="object-cover" />
            </div>
            (and re-add `import Image from "next/image";` above)
          */}
        </motion.div>
      </div>

      {/* SEO: Hidden content for search engines */}
      <div className="sr-only" aria-hidden="false">
        <h3>
          Digitanotion Limited Award — Nigerian Festival of Awards, 6th
          Eastern Edition
        </h3>
        <p>
          Digitanotion Limited received an Award of Recognition from the
          Nigerian Festival of Awards during the 6th Eastern Edition, also
          known as the 6th Eastern Nigeria Merit Awards, held in Awka,
          Anambra State.
        </p>
      </div>
    </section>
  );
}
