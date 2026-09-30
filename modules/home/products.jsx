"use client";
import { FiPlayCircle, FiShoppingBag, FiClock, FiStar, FiExternalLink } from "react-icons/fi";
import { PiQrCodeDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    name: "Moonlight",
    tagline: "Livestream App",
    description:
      "A livestream and social entertainment app — watch shows, chat, join global clubs, and earn from gifts. Live on the Google Play Store with over 100,000 downloads and a 5.0-star rating.",
    icon: <FiPlayCircle className="text-4xl" />,
    color: "from-fuchsia-600 to-pink-500",
    badge: "100K+ Downloads",
    rating: "5.0",
    ratingCount: 154,
    cta: "Get it on Google Play",
    link: "https://play.google.com/store/apps/details?id=com.app.moonlightstream",
    status: "live",
    category: "MobileApplication",
  },
  {
    name: "Gaijinmall",
    tagline: "Marketplace",
    description:
      "A classifieds and marketplace platform serving the community in Japan — buy or sell goods and services with ease, from vehicles and property to jobs and services.",
    icon: <FiShoppingBag className="text-4xl" />,
    color: "from-blue-600 to-red-500",
    badge: "Live in Japan",
    cta: "Visit gaijinmall.com",
    link: "https://gaijinmall.com",
    status: "live",
    category: "WebApplication",
  },
  {
    name: "QrKloud",
    tagline: "Intelligent QR Platform",
    description:
      "A programmable QR code platform for businesses, developers, and financial institutions — dynamic QR codes, anti-counterfeit product verification, event and file QR codes, and analytics.",
    icon: <PiQrCodeDuotone className="text-4xl" />,
    color: "from-cyan-600 to-blue-500",
    badge: "Alpha · Coming Soon",
    cta: null,
    link: null,
    status: "alpha",
    category: "BusinessApplication",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProductsSection() {
  return (
    <section
      className="relative w-full bg-background pb-24 overflow-hidden px-4 lg:px-16"
      role="region"
      aria-label="Products built by Digitanotion — Moonlight, Gaijinmall, and QrKloud"
    >
      {/* SEO: Structured data for our shipped products */}
      <div style={{ display: "none" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Products by Digitanotion",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "position": 1,
                  "name": "Moonlight Livestream App",
                  "applicationCategory": "MobileApplication",
                  "operatingSystem": "Android",
                  "description":
                    "Livestream and social entertainment app with global clubs, gifting, and instant withdrawals.",
                  "url": "https://play.google.com/store/apps/details?id=com.app.moonlightstream",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "ratingCount": "154",
                  },
                  "creator": { "@type": "Organization", "name": "Digitanotion Limited" },
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 2,
                  "name": "Gaijinmall",
                  "applicationCategory": "WebApplication",
                  "description":
                    "Classifieds and marketplace platform for buying and selling goods and services in Japan.",
                  "url": "https://gaijinmall.com",
                  "creator": { "@type": "Organization", "name": "Digitanotion Limited" },
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 3,
                  "name": "QrKloud",
                  "applicationCategory": "BusinessApplication",
                  "description":
                    "Intelligent, programmable QR code platform for businesses, developers, and financial institutions — currently in alpha testing.",
                  "creator": { "@type": "Organization", "name": "Digitanotion Limited" },
                },
              ],
            }),
          }}
        />
      </div>

      <div className="mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Products
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-6 text-foreground">
            Beyond services — products we've built and shipped
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            We don't just build for clients — we build our own. From a
            livestream app with six-figure downloads to a marketplace live
            in Japan and a QR platform in the works, here's what Digitanotion
            has shipped.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/40 to-card/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />

              <div className="relative h-full flex flex-col bg-card border border-border/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white shadow-lg glow-effect`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.icon}
                  </motion.div>

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      product.status === "live"
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-amber-500/10 text-amber-600"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <h3
                      className="text-2xl font-bold text-foreground"
                      itemProp="name"
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium text-primary tracking-wide">
                      {product.tagline}
                    </p>
                  </div>

                  {product.rating && (
                    <div className="flex items-center gap-1.5 text-sm text-amber-500 font-semibold">
                      <FiStar className="fill-current" />
                      {product.rating}
                      <span className="text-muted-foreground font-normal">
                        ({product.ratingCount} reviews)
                      </span>
                    </div>
                  )}

                  <p
                    className="text-muted-foreground leading-relaxed"
                    itemProp="description"
                  >
                    {product.description}
                  </p>
                </div>

                <meta itemProp="applicationCategory" content={product.category} />

                <motion.div
                  className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${product.color} rounded-full transition-all duration-500`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />

                <div className="mt-6">
                  {product.link ? (
                    <Link
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      aria-label={`${product.cta} — ${product.name}`}
                    >
                      {product.cta}
                      <FiExternalLink />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-muted-foreground font-semibold">
                      <FiClock />
                      In private alpha testing
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO: Hidden content for search engines */}
        <div className="sr-only" aria-hidden="false">
          <h3>Software products built by Digitanotion Limited</h3>
          <p>
            Digitanotion Limited has built and launched Moonlight, a
            livestream and social entertainment app on the Google Play Store
            with over 100,000 downloads and a 5-star rating; Gaijinmall, a
            live classifieds and marketplace platform serving Japan at
            gaijinmall.com; and QrKloud, an intelligent QR code platform for
            businesses and financial institutions, currently in alpha
            testing.
          </p>
        </div>
      </div>
    </section>
  );
}
