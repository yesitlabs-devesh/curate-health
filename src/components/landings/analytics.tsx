import Play from '@/components/icons/play';
import { Button } from '@/components/ui/button';
import ThemeBasedImage from '@/components/theme-based-image';
import data from '@/data/en.json'; // Importing the JSON data

const Analytics = () => {
  const { title, description, button1, button2, image, imageDark, imageAlt } =
    data.Analytics;

  return (
    <div className="max-w-[1480px] mx-auto bg-[url('/assets/images/management-landing/analytics-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="container px-4 pt-20 flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="max-w-[450px] text-center md:text-start">
          <h4 className="font-bold">{title}</h4>
          <p className="font-medium text-secondary-foreground my-9">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="h-14 px-6">{button1}</Button>
            <Button variant="outline" className="h-14 px-6">
              <Play className="w-5 h-5 mr-2.5" /> {button2}
            </Button>
          </div>
        </div>

        <ThemeBasedImage
          width={618}
          height={450}
          lightSrc={image}
          darkSrc={imageDark}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default Analytics;
