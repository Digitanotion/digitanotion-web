/**
 * Builds Next.js metadata for any Academy course page from its data.json.
 * Requires data.seo = { title, description, keywords }.
 *
 * Usage in a course's page.js:
 *
 *   export const metadata = buildCourseMetadata(
 *     courseData,
 *     "https://www.digitanotion.com.ng/academy/some-course"
 *   );
 */
export function buildCourseMetadata(data, canonicalUrl) {
  const { title, description, keywords } = data.seo;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Digitanotion Academy",
      type: "website",
      locale: "en_NG",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@digitanotion",
    },
  };
}