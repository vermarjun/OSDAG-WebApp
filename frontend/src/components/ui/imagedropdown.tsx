import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Define types for the component props
export type ImageOption = {
  value: string;
  label: string;
  imageUrl: string;
};

type ImageSelectProps = {
  label: string;
  options: ImageOption[];
};

const ImageSelect = ({ label, options }: ImageSelectProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(opt => opt.value === selectedValue);
    setSelectedImage(selectedOption?.imageUrl || null);
  };

  return (
    <div className="">
      <div className="flex justify-between items-start gap-2">
        <label className="text-xs text-blue-800 font-semibold whitespace-nowrap pt-1">
          {label}
        </label>
        
        <div className="w-[70%]">
          {/* Dropdown container */}
          <div className="relative mb-1">
            <select
              className="w-full p-0.5 px-2 rounded text-xs border border-gray-300 bg-white pr-8 appearance-none"
              onChange={handleSelectChange}
              defaultValue={options[0]?.value}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Image display - positioned below dropdown only */}
          {selectedImage && (
            <div className="border flex items-center justify-start border-gray-200 rounded">
              <img 
                src={selectedImage} 
                alt="Selected option" 
                className="h-24 mx-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSelect