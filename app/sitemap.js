// app/sitemap.js
const baseUrl = "https://digitanotion.com.ng";

// Define all your static routes
const staticRoutes = [
  "",
  "/",
  "/about",
  "/services",
  "/careers",
  "/contact",
  "/cysapafrica",
  "/academy",
  "/dils",
  "/services/cybouncer",
  "/services/app-development",
  "/academy/computing-essentials",
  "/academy/web-fundamentals",
  "/academy/web-frontend-engineering",
  "/academy/mobile-app",
  "/academy/cyber-foundations",
  "/academy/ethical-hacking",
  "/academy/web-backend-engineering",
];

// Generate sitemap entries for static routes
const staticSitemapEntries = staticRoutes.map((route) => ({
  url: `${baseUrl}${route}`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: route === "" ? 1 : 0.8, // Homepage has highest priority
}));

export default async function sitemap() {
  // If you have dynamic content from a database, fetch it here
  // Example:
  // const blogPosts = await fetchBlogPosts();
  // const blogSitemapEntries = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'monthly',
  //   priority: 0.7,
  // }));

  return [
    ...staticSitemapEntries,
    // ...blogSitemapEntries,
    // ...other dynamic entries
  ];
}
