import StoreSelector from "@/components/molecules/subviews/home/StoreSelector";
import ProtectedAuthWrapper from "@/components/pages/ProtectedAuthWrapper";

export default function HomePage() {
  return (
    <ProtectedAuthWrapper>
      <StoreSelector />
    </ProtectedAuthWrapper>
  );
}
