import { Product } from "@/types";
import NoResults from "./ui/no-result";
import ProductCard from "./ui/product-card";

interface ProducListProps {
  title: string;
  items: Product[];
}

const ProducList: React.FC<ProducListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults></NoResults>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProducList;
