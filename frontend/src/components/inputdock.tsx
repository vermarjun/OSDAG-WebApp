import { useState } from 'react';
import ImageSelect , { ImageOption} from './ui/imagedropdown';
import SelectDropdown from './ui/customdropdown';
import InputField from './ui/custominputfield';
import Button from './ui/button';
import { hitBackend } from './outputdock';
import { useData } from './outputdock';
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
  const connection_type = "column_flange_beam_web"
  const [shear_force, setShearForce] = useState<string>('');
  const [axial_force, setAxialForce] = useState<string>('');
  const [column_section, setColoumn] = useState('');
  const [beam_section, setBeam] = useState('');
  const [material_grade, setMaterial] = useState('');
  const [bolt_diameter, setBoltDiameter] = useState('');
  const [bolt_type, setBoltType] = useState('');
  const [bolt_property_class, setBoltClass] = useState('');
  const [plate_thickness, setPlateThickness] = useState('');

  const { setFormValues } = useData();

  function resetClicked(){
    setShearForce('');
    setAxialForce('')
    setColoumn('')
    setBeam('')
    setMaterial('')
    setBoltDiameter('')
    setBoltType('')
    setBoltClass('')
    setPlateThickness('')
  }

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
            { value: "HB150", label: "HB150" },
            { value: "HB150*", label: "HB150*" },
            { value: "HB200", label: "HB200" },
          ]}
          selectedValue={column_section}
          setSelectedValue={setColoumn}
        />

        {/* Beam Section */}
        <SelectDropdown
          name="Beam Section"
          options={[
            { value: "JB150", label: "JB150" },
            { value: "JB175", label: "JB175" },
            { value: "JB200", label: "JB200" },
            { value: "JB225", label: "JB225" },
          ]}
          selectedValue={beam_section}
          setSelectedValue={setBeam}
        />

        {/* Material */}
        <SelectDropdown
          name="Meterial"
          options={[
            { value: "E 165 (Fe 290)", label: "E 165 (Fe 290)" },
            { value: "E 250 (Fe 410 W)A", label: "E 250 (Fe 410 W)A" },
            { value: "E 250 (Fe 410 W)B", label: "E 250 (Fe 410 W)B" },
            { value: "E 250 (Fe 410 W)C", label: "E 250 (Fe 410 W)C" },
            { value: "E 300 (Fe 440)", label: "E 300 (Fe 440)" },
          ]}
          selectedValue={material_grade}
          setSelectedValue={setMaterial}
        />

        {/* Factored Loads */}
        <div className="mb-3 flex flex-col gap-1">
          <h4 className="font-bold text-sm mb-2">Factored Loads</h4>
          
          {/* Shear Force */}
          <InputField
            label="Shear Force (kN)"
            name="shearForce"
            value={shear_force}
            className='w-[70%]'
            onChange={(e) => setShearForce(e.target.value)}
            />
          
          {/* Axial Force */}
          <InputField
            className="w-[70%]"
            label="Axial Force (kN)"
            name="axialForce"
            value={axial_force}
            onChange={(e) => setAxialForce(e.target.value)}
          />
        </div>

        {/* Bolt */}  
        <div className="mb-3 flex flex-col gap-1">
          <h4 className="font-bold text-sm mb-2">Bolt</h4>
          
          {/* Diameter */}
          <InputField
            className="w-[70%]"
            label="Diameter (mm)"
            name="diameter"
            value={bolt_diameter}
            onChange={(e) => setBoltDiameter(e.target.value)}
          />
          
          {/* Type */}
          <SelectDropdown
            name="Type"
            options={[
              { value: "bearing_bolt", label: "Bearing Bolt" },
              { value: "friction_grip_bolt", label: "Friction Grip Bolt" },
            ]}
            selectedValue={bolt_type}
            setSelectedValue={setBoltType}
          />
          
          {/* Property Class */}
          <InputField
            className="w-[70%]"
            label="Property Class"
            name="property_class"
            value={bolt_property_class}
            onChange={(e) => setBoltClass(e.target.value)}
          />
        </div>

        {/* Plate */}
        <div className="">
          <h4 className="font-bold text-sm mb-2">Plate</h4>
          {/* Thickness */}
          <InputField
            className="w-[70%]"
            label="Thickness (mm)"
            name="thickness"
            value={plate_thickness}
            onChange={(e) => setPlateThickness(e.target.value)}
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
            onClick={() => resetClicked()}
          />
          <Button
            key={"design"}
            name={"Design"}
            type="secondary"
            className="w-full bg-brown-600 text-white hover:bg-brown-700"
            onClick={() => hitBackend(
              connection_type,
              column_section,
              beam_section,
              material_grade,
              shear_force,
              axial_force,
              bolt_diameter,
              bolt_type,
              bolt_property_class,
              plate_thickness,
              setFormValues
            )}
          />
        </div>
    </div>
  );
};

export default InputDock;