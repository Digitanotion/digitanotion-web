"use client";

import CourseHero from "./hero";
import CourseSkills from "./skills";
import CourseFAQ from "./faq";
import PathBuilder from "./path-builder";
import { Details } from "../details";

/**
 * CoursePage — the one component every Academy course page renders.
 *
 * Usage in any course's index.js:
 *
 *   import CoursePage from "../shared/course-page";
 *   import data from "./data.json";
 *   export default function SomeCourse() {
 *     return <CoursePage data={data} />;
 *   }
 *
 * To change pricing, cohort dates, class location, or add/remove a step for
 * ANY course, edit that course's data.json only — no component code changes.
 */
export default function CoursePage({ data }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CourseHero data={data} />
      <PathBuilder data={data} />
      <CourseSkills modules={data.modules} />
      <Details />
      <CourseFAQ faqs={data.faqs} />
    </div>
  );
}