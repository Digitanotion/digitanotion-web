import dynamic from "next/dynamic";
import { productDesignMetadata, productDesignStructuredData } from "./metadata";
import StructuredData from "@/components/StructuredData";

export const metadata = productDesignMetadata;

// Completely disable SSR for this page
const ProductDesignContent = dynamic(
  () => import("@/modules/academy/product-design/index"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section Skeleton */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-12 bg-gray-200 rounded w-1/2 mb-6"></div>
                <div className="h-24 bg-gray-200 rounded w-full mb-8"></div>
                <div className="h-32 bg-gray-200 rounded w-full"></div>
              </div>
              <div className="h-96 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    ), // <-- Make sure this closing parenthesis is here!
  }, // <-- Make sure this closing brace is here!
);

export default function ProductDesignPage() {
  return (
    <>
      <StructuredData data={productDesignStructuredData} />
      <ProductDesignContent />
    </>
  );
}
