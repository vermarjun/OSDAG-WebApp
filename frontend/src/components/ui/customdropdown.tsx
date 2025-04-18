import { ChevronDown } from "lucide-react";
import { FC } from "react";

type SelectDropdownProps = {
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void; 
};

const SelectDropdown: FC<SelectDropdownProps> = ({
  name,
  options,
  selectedValue,
  setSelectedValue,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <label className="text-xs text-blue-800 font-semibold whitespace-nowrap">
          {name} *
        </label>
        <div className="relative w-[70%]">
          <select
            className="w-full p-0.5 rounded px-2 text-xs border border-gray-300 bg-white pr-8 appearance-none"
            value={selectedValue} // Directly stores a string
            onChange={handleChange}
          >
            <option value="" disabled>
              Select {name}
            </option>
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
      </div>
    </div>
  );
};

export default SelectDropdown;
