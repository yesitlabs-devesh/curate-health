import ThemeBasedImage from '@/components/theme-based-image';
import { Button } from '@/components/ui/button';
import data from '@/data/en.json'; // Importing the JSON data

const Demos = () => {
  const { DataManagement, Statistics, Reviews } = data.Demos;

  return (
    <div className="container px-4 py-[100px] md:py-[160px]">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="max-w-[436px]">
          <p className="font-semibold">DATA MANAGEMENT</p>
          <h4 className="font-bold mt-[30px] mb-6">{DataManagement.title}</h4>
          <p className="font-medium text-secondary-foreground">
            {DataManagement.description}
          </p>
          <Button className="h-14 px-6 mt-9">
            {DataManagement.buttonText}
          </Button>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <ThemeBasedImage
            width={562}
            height={564}
            lightSrc={DataManagement.imageLight}
            darkSrc={DataManagement.imageDark}
            alt="Data Management Visualization"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-20 my-[100px] md:my-[160px]">
        <div className="w-full flex justify-center md:justify-start">
          <ThemeBasedImage
            width={600}
            height={490}
            lightSrc={Statistics.imageLight}
            darkSrc={Statistics.imageDark}
            alt="Statistics Visualization"
          />
        </div>
        <div className="max-w-[450px]">
          <p className="font-semibold">STATISTICS</p>
          <h4 className="font-bold mt-[30px] mb-6">{Statistics.title}</h4>
          <p className="font-medium text-secondary-foreground">
            {Statistics.description}
          </p>
          <Button className="h-14 px-6 mt-9">{Statistics.buttonText}</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="max-w-[360px]">
          <p className="font-semibold">REVIEWS</p>
          <h4 className="font-bold mt-[30px] mb-6">{Reviews.title}</h4>
          <p className="font-medium text-secondary-foreground">
            {Reviews.description}
          </p>
          <Button className="h-14 px-6 mt-9">{Reviews.buttonText}</Button>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <ThemeBasedImage
            width={576}
            height={528}
            lightSrc={Reviews.imageLight}
            darkSrc={Reviews.imageDark}
            alt="Reviews Visualization"
          />
        </div>
      </div>
    </div>
  );
};

export default Demos;
