import { Button } from '@/components/ui/button';
import ThemeBasedImage from '@/components/theme-based-image';
import data from '@/data/en.json'; // Importing the JSON data

const Header = () => {
  const { title, subtitle, image, imageDark, button1, button2 } = data.Header;

  return (
    <div className="container px-4 flex flex-col md:flex-row gap-20 my-[100px] md:my-[160px]">
      <div className="w-full md:max-w-[575px] text-center md:text-start">
        <h4 className="mb-6 mt-[30px] font-bold">{title}</h4>
        <p className="text-lg font-medium text-secondary-foreground mb-12">
          {subtitle}
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <Button className="py-3.5 px-6 h-14">{button1}</Button>
          <Button variant="outline" className="py-3.5 px-6 h-14">
            {button2}
          </Button>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <ThemeBasedImage
          priority
          width={536}
          height={350}
          darkSrc={imageDark}
          lightSrc={image}
          alt="Project Management Visual"
        />
      </div>
    </div>
  );
};

export default Header;
