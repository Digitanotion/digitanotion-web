"use client";
import { Suspense } from "react";
import { CourseRegistrationForm } from "@/modules/academy/form";
import { useSearchParams } from "next/navigation";
import { Toaster } from "sonner";

function RegisterContent() {
  const params = useSearchParams();
  const courseData = params.get("course")
    ? JSON.parse(params.get("course"))
    : null;

  console.log(courseData);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Toaster position="top-right" richColors />
      <section className="flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance text-primary">
              Course Registration
            </h1>
            <p className="text-lg text-muted-foreground">
              Join us and start your learning journey with Digitanotion
            </p>
          </div>
          {courseData ? (
            <CourseRegistrationForm courseData={courseData} />
          ) : (
            <div className="text-center p-8">
              <p className="text-lg text-muted-foreground">
                No course data found. Please select a course first.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">
              Loading registration form...
            </p>
          </div>
        </div>
      }
    >
      <RegisterContent />
    </Suspense>
  );
}
