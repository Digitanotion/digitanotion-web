import ProductDesignPage from "@/modules/academy/product-design/index";
import { productDesignMetadata, productDesignStructuredData } from "./metadata";
import StructuredData from "@/components/StructuredData";

export const metadata = productDesignMetadata;

export default function ProductDesign() {
  return (
    <>
      <StructuredData data={productDesignStructuredData} />
      <ProductDesignPage />
    </>
  );
}
