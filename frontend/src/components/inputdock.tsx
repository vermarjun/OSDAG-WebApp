import { useState } from 'react';
import ImageSelect , { ImageOption} from './ui/imagedropdown';
import SelectDropdown from './ui/customdropdown';
import InputField from './ui/custominputfield';
import Button from './ui/button';

const connectivityOptions: ImageOption[] = [
  {
    value: "column-flange-beam-web",
    label: "Column Flange-Beam Web",
    imageUrl: "/endplate.jpg"
  },
  {
    value: "another-option",
    label: "Another Connection Type",
    imageUrl: "/cleatangle.jpg"
  }
];

const InputDock = () => {
  const [shearForce, setShearForce] = useState('');
  const [axialForce, setAxialForce] = useState('');
  const [coloumn, setColoumn] = useState<Record<string, string>>({});
  const [beam, setBeam] = useState<Record<string, string>>({});
  const [material, setMaterial] = useState<Record<string, string>>({});
  const [boltDiameter, setBoltDiameter] = useState<Record<string, string>>({});
  const [boltType, setBoltType] = useState<Record<string, string>>({});
  const [boltClass, setBoltClass] = useState<Record<string, string>>({});
  const [plateThickness, setPlateThickness] = useState<Record<string, string>>({});

  return (
    <div className="w-1/3 border h-screen border-gray-300 bg-[#F0F0F0] shadow-sm flex flex-col justify-start items-center">
      {/* Input Dock Heading */}
      <div className="w-full p-2 bg-gray-100 border-b border-gray-300 flex justify-between items-center">
        <h3 className="font-bold text-sm">Input Dock</h3>
      </div>

      {/* Connecting Members */}
      <div className="p-4 w-full flex flex-col gap-1">
        <h4 className="font-bold text-sm mb-3">Connecting Members</h4>
        
        {/* Connectivity Type */}
        <ImageSelect 
          label="Connectivity *" 
          options={connectivityOptions} 
        />

        {/* Column Section */}
        <SelectDropdown
          name="Column Section"
          options={[
            { value: "section1", label: "Section 1" },
            { value: "section2", label: "Section 2" },
          ]}
          selectedValues={coloumn}
          setSelectedValues={setColoumn}
        />

        {/* Beam Section */}
        <SelectDropdown
          name="Beam Section"
          options={[
            { value: "section1", label: "Section 1" },
            { value: "section2", label: "Section 2" },
          ]}
          selectedValues={beam}
          setSelectedValues={setBeam}
        />

        {/* Material */}
        <SelectDropdown
          name="Meterial"
          options={[
            { value: "section1", label: "Section 1" },
            { value: "section2", label: "Section 2" },
          ]}
          selectedValues={material}
          setSelectedValues={setMaterial}
        />

        {/* Factored Loads */}
        <div className="mb-3 flex flex-col gap-1">
          <h4 className="font-bold text-sm mb-2">Factored Loads</h4>
          
          {/* Shear Force */}
          <InputField
            label="Shear Force (kN)"
            name="shearForce"
            value={shearForce}
            className='w-[70%]'
            onChange={(e) => setShearForce(e.target.value)}
            />
          
          {/* Axial Force */}
          <InputField
            className="w-[70%]"
            label="Axial Force (kN)"
            name="axialForce"
            value={axialForce}
            onChange={(e) => setAxialForce(e.target.value)}
          />
        </div>

        {/* Bolt */}  
        <div className="mb-3 flex flex-col gap-1">
          <h4 className="font-bold text-sm mb-2">Bolt</h4>
          
          {/* Diameter */}
          <SelectDropdown
            name="Diameter (mm)"
            options={[
              { value: "section1", label: "Section 1" },
              { value: "section2", label: "Section 2" },
            ]}
            selectedValues={boltDiameter}
            setSelectedValues={setBoltDiameter}
          />
          
          {/* Type */}
          <SelectDropdown
            name="Type"
            options={[
              { value: "section1", label: "Section 1" },
              { value: "section2", label: "Section 2" },
            ]}
            selectedValues={boltType}
            setSelectedValues={setBoltType}
          />
          
          {/* Property Class */}
          <SelectDropdown
            name="Property Class"
            options={[
              { value: "section1", label: "Section 1" },
              { value: "section2", label: "Section 2" },
            ]}
            selectedValues={boltClass}
            setSelectedValues={setBoltClass}
          />
        </div>

        {/* Plate */}
        <div className="">
          <h4 className="font-bold text-sm mb-2">Plate</h4>
          
          {/* Thickness */}
          <SelectDropdown
            name="Thickness (mm)"
            options={[
              { value: "section1", label: "Section 1" },
              { value: "section2", label: "Section 2" },
            ]}
            selectedValues={plateThickness}
            setSelectedValues={setPlateThickness}
          />
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-start space-x-4 w-full mt-6 px-4">
          <Button
            key={"reset"}
            name={"Reset"}
            type="secondary"
            className="w-full bg-brown-600 text-white hover:bg-brown-700"
            onClick={() => console.log("reset clicked")}
          />
          <Button
            key={"design"}
            name={"Design"}
            type="secondary"
            className="w-full bg-brown-600 text-white hover:bg-brown-700"
            onClick={() => console.log("design clicked")}
          />
        </div>
    </div>
  );
};

export default InputDock;