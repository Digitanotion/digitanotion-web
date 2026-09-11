import { redirect } from "next/navigation";

// This page's own validation form never worked (dead submit handler against
// a local database with no real certificate records). Certificates are
// issued and verified on the student portal — send anyone who lands here
// straight there instead of showing a broken form.
export default function ValidateCertificatePage() {
  redirect("https://academy.digitanotion.com.ng/verify");
}
