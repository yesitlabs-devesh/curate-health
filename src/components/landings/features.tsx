import Clock from '@/components/icons/clock';
import Annotation from '@/components/icons/annotation';
import DocumentReport from '@/components/icons/document-report';
import DocumentText from '@/components/icons/document-text';
import data from '@/data/en.json'; // Importing the JSON data

const iconComponents = {
  DocumentText,
  Clock,
  Annotation,
  DocumentReport,
};

const Features = () => {
  const features = data.Features.items.map((item) => ({
    ...item,
    Icon: iconComponents[item.icon as keyof typeof iconComponents],
  }));

  return (
    <div className="bg-card">
      <div className="container px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="px-9 py-14 hover:bg-card-hover group flex flex-col items-center md:items-start"
          >
            <feature.Icon className="w-9 h-9 text-icon group-hover:text-icon-active" />
            <p className="text-lg font-semibold mt-6 mb-3">{feature.title}</p>
            <p className="text-secondary-foreground max-w-[228px]">
              {feature.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
