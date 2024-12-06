import GradientLine from "./GradientLine";

interface OverviewCardProps {
  title: string; // Title is a string
  items: {
    color: string; // Color for the span
    count: number; // Count value
    label: string; // Label text
    percentage: number; // Percentage value
  }[]; // Array of items
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, items }) => {
  return (
    <div className="rounded-xl bg-white p-4 min-w-[250px] shadow-lg">
      <h3 className="font-semibold text-center">{title}</h3>
      <GradientLine />
      <div className="grid grid-cols-2 gap-x-4 mt-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-gray-700 text-sm">
              {item.count} {item.label} ({item.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
