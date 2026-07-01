"use client";

import CoursePage from "../shared/course-page";
import data from "./data.json";

export default function DataAnalysis() {
  return <CoursePage data={data} />;
}