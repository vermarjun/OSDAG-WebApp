import { FC } from "react";

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: FC<InputFieldProps> = ({ label, name, value, onChange, className }) => {
  return (
    <div className="flex justify-between items-center gap-1">
      <label className="text-xs whitespace-nowrap">{label} *</label>
      <input
        type="text"
        className={`w-[50%] px-1 text-sm border-1 bg-white rounded border-sky-400 ${className}`}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;