import ProductDesign from "@/modules/academy/product-design/index";
import { productDesignMetadata, productDesignStructuredData } from "./metadata";
import StructuredData from "@/components/StructuredData";

export const metadata = productDesignMetadata;

export default function ProductDesignPage() {
  return (
    <>
      <StructuredData data={productDesignStructuredData} />
      <ProductDesign />
    </>
  );
}
