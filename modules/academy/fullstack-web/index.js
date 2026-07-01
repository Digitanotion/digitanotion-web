// modules/academy/fullstack-web/index.js
"use client";

import CoursePage from "../shared/course-page";
import data from "./data.json";

export default function FullStackWebDevelopment() {
  return <CoursePage data={data} />;
}