import { useState } from 'react';
// import SelectDropdown from './ui/customdropdown';
import InputField from './ui/custominputfield';
import Button from './ui/button';

type OutputDockFormValues = {
  diameter: string;
  propertyClass: string;
  rowsOfBolts: string;
  boltValue: string;
  boltTensionCapacity: string;
  boltShearForce: string;
  boltTensionForce: string;
  plateThickness: string;
  plateHeight: string;
  plateWidth: string;
  weldSize: string;
  weldStrength: string;
  weldStress: string;
};


const OutputDock = () => {
  const [formValues, setFormValues] = useState<OutputDockFormValues>({
    diameter: '',
    propertyClass: '',
    rowsOfBolts: '',
    boltValue: '',
    boltTensionCapacity: '',
    boltShearForce: '',
    boltTensionForce: '',
    plateThickness: '',
    plateHeight: '',
    plateWidth: '',
    weldSize: '',
    weldStrength: '',
    weldStress: '',
  });
  
  const boltValues = [
    {label: "Diameter (mm)", name: "diameter", value:formValues.diameter},
    {label: "Property Class", name: "propertyClass", value:formValues.propertyClass},
    {label: "Rows of Bolts", name: "rowsOfBolts", value:formValues.rowsOfBolts},
    {label: "Bolt Value (kN)", name: "boltValue", value:formValues.boltValue},
    {label: "Bolt Value (kN)", name: "boltValue", value:formValues.boltValue},
    {label: "Bolt Tension Capacity (kN)", name: "boltTensionCapacity", value:formValues.boltTensionCapacity},
    {label: "Bolt Shear Force (kN)", name: "boltShearForce", value:formValues.boltShearForce},
    {label: "Bolt Tension Force (kN)", name: "boltTensionForce", value:formValues.boltTensionForce},
  ]
  
  const plateValues = [
    {label: "Thickness (mm)", name: "plateThickness", value:formValues.plateThickness},
    {label: "Height (mm)", name: "plateHeight", value:formValues.plateHeight},
    {label: "Width (mm)", name: "plateWidth", value:formValues.plateWidth}
  ]
  
  const weldValues = [
    {label: "Size (mm)", name: "weldSize", value:formValues.weldSize},
    {label: "Strength  (N/mm²)", name: "weldStrength", value:formValues.weldStrength},
    {label: "Stress  (N/mm)", name: "weldStress", value:formValues.weldStress}
  ]

  const handleDetailsClick = (type: string) => {
    console.log(`${type} details clicked`);
  };

  const handleReportGeneration = () => {
    console.log('Creating design report with data:', formValues);
  };

  const handleSaveOutput = () => {
    console.log('Saving output with data:', formValues);
  };

  return (
    <div className="w-1/4 border h-screen border-gray-300 bg-[#F0F0F0] shadow-sm flex flex-col justify-start items-center">
      {/* Output Dock Heading */}
      <div className="w-full p-2 bg-gray-100 border-b border-gray-300 flex justify-between items-center">
        <h3 className="font-bold text-sm">Output Dock</h3>
      </div>

      <div className="p-2 flex flex-col gap-1">
        {/* Bolt Section */}
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-sm mb-1">Bolt</h4>
          {
            boltValues.map((boltValue)=>(
              <InputField
                label={boltValue.label}
                name={boltValue.name}
                value={boltValue.value}
              />
            ))
          }
        </div>

        {/* Details Buttons */}
        <div className="mb-3 space-y-1">
          <div className='flex items-center justify-between'>
            <p className='text-xs'> Capacity Details: </p>
            <button onClick={()=>handleDetailsClick("Capacity")} className='flex justify-center items-center w-[50%] bg-gray-500 rounded text-xs text-white p-1'>Capacity Details</button>
          </div>
          <div className='flex items-center justify-between gap-1'>
            <p className='text-xs'> Spacing Details: </p>
            <button onClick={()=>handleDetailsClick("Spacing")} className='flex justify-center items-center w-[50%] bg-gray-500 rounded text-xs text-white p-1'>Spacing Details</button>
          </div>
        </div>

        {/* Plate Section */}
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-sm mb-1">Plate</h4>
          {
            plateValues.map((plateValue)=>(
              <InputField
                label={plateValue.label}
                name={plateValue.name}
                value={plateValue.value}
              />
            ))
          }
        </div>

        {/* Plate Capacity Button */}
        <div className="mb-3 space-y-2">
          <div className='flex items-center justify-between'>
            <p className='text-xs'> Capacity Details: </p>
            <button className='flex justify-center items-center w-[50%] bg-gray-500 rounded text-xs text-white p-1'>Capacity Details</button>
          </div>
        </div>
        {/* Weld Section */}
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-sm mb-1">Weld</h4>
          {
            weldValues.map((weldValue)=>(
              <InputField
                label={weldValue.label}
                name={weldValue.name}
                value={weldValue.value}
              />
            ))
          }
        </div>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex justify-around mt-4">
        <Button
          key="create-report"
          name="Create Design Report"
          type="tertiary"
          className="w-[50%] text-sm bg-red-700 text-white hover:bg-red-800"
          onClick={handleReportGeneration}
        />
        <Button
          key="save-output"
          name="Save Output"
          type="tertiary"
          className="w-[50%] text-sm bg-red-700 text-white hover:bg-red-800"
          onClick={handleSaveOutput}
        />
      </div>
    </div>
  );
};

export default OutputDock;