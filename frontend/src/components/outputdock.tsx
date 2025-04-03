import InputField from './ui/custominputfield';
import Button from './ui/button';
import axios from 'axios';
import { BackendUrl } from '../App';
import { createContext, useContext, useState, ReactNode } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface DataProps {
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
}

export const generatePDF = (data: DataProps) => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Structural Design Report", 20, 20);

  doc.setFontSize(12);
  doc.text("Generated on: " + new Date().toLocaleString(), 20, 30);

  // Define table data
  const tableData = Object.entries(data).map(([key, value]) => [key, value || "N/A"]);

  // Generate table
  autoTable(doc, {
    head: [["Property", "Value"]],
    body: tableData,
    startY: 40,
    styles: { fontSize: 10 },
    headStyles: { fillColor: [22, 160, 133] },
  });

  // Save PDF
  doc.save("Structural_Design_Report.pdf");
};

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

interface DataContextType {
  formValues: OutputDockFormValues;
  setFormValues: React.Dispatch<React.SetStateAction<OutputDockFormValues>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [formValues, setFormValues] = useState<OutputDockFormValues>({
    diameter: "",
    propertyClass: "",
    rowsOfBolts: "",
    boltValue: "",
    boltTensionCapacity: "",
    boltShearForce: "",
    boltTensionForce: "",
    plateThickness: "",
    plateHeight: "",
    plateWidth: "",
    weldSize: "",
    weldStrength: "",
    weldStress: "",
  });

  return (
    <DataContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};

export async function hitBackend(connection_type:string, column_section:string, beam_section:string, material_grade:string, shear_force:string, axial_force:string, bolt_diameter:string, bolt_type:string, bolt_property_class:string, plate_thickness:string, setFormValues: React.Dispatch<React.SetStateAction<OutputDockFormValues>>){
  try {
    const response = await axios.post(`${BackendUrl}/api/calculate-end-plate/`, {
      "connection_type": connection_type,
      "column_section": column_section,
      "beam_section": beam_section,
      "material_grade": material_grade,
      "shear_force": shear_force,
      "axial_force": axial_force,
      "bolt_diameter": bolt_diameter,
      "bolt_type": bolt_type,
      "bolt_property_class": bolt_property_class,
      "plate_thickness": plate_thickness
    });
    // console.log(response.data)
    setFormValues({
      diameter: response.data.bolt_diameter,
      propertyClass: response.data.bolt_property_class,
      rowsOfBolts: response.data.rows_of_bolts,
      boltValue: response.data.Bolt_value,
      boltTensionCapacity: response.data.Bolt_Tension_capacity,
      boltShearForce: response.data.Bolt_shear_force,
      boltTensionForce: response.data.Bolt_Tension_force,
      plateThickness: response.data.plate_thickness,
      plateHeight: response.data.plate_height,
      plateWidth: response.data.plate_width,
      weldSize: response.data.weld_size,
      weldStrength: response.data.weld_strength,
      weldStress: response.data.weld_stress,
    })
  } catch (error) {
    alert(error)
    console.log(error)
  }
}

const OutputDock = () => {
  const { formValues } = useData();
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
          key="ai-analysis"
          name="AI Analysis"
          type="tertiary"
          className="w-[50%] text-sm text-white"
          onClick={handleSaveOutput}
        />
        <Button
          key="download-report"
          name="Download Design Report"
          type="tertiary"
          className="w-[50%] text-sm text-white"
          onClick={() => generatePDF(formValues)}
        />
      </div>
    </div>
  );
};

export default OutputDock;