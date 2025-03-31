import Button from "./ui/button";
import finplate from "/finplate.jpg"
import seatedangle from "/seatedangle.jpg"
import cleatangle from "/cleatangle.jpg"
import endplate from "/endplate.jpg"
import { useState } from "react";

const topics = [
    { name: 'Shear Connection', link: 'Shear Connection' },
    { name: 'Moment Connection', link: 'Moment Connection' },
    { name: 'Base Plate', link: 'Base Plate' },
    { name: 'Truss Connection', link: 'Truss Connection' },
  ];

const connections = [
    { name: 'Fin Plate', image: finplate },
    { name: 'Cleat Angle', image: cleatangle },
    { name: 'End Plate', image: endplate },
    { name: 'Seated Angle', image: seatedangle },
];

const Header: React.FC = () => {
    return (
        <div className="h-fit w-full bg-[#F0F0F0] flex justify-around items-center gap-2">
            {topics.map((topic) => (
                <Button
                    key={topic.link}
                    name={topic.name}
                    type="tertiary"
                    className="w-full bg-brown-600 text-white hover:bg-brown-700"
                    onClick={() => console.log(topic.link)}
                />
            ))}
        </div>
    )
}
interface ConnectionCardProps {
    name: string; 
    image: string;
    isSelected: boolean;
    onClick?: () => void;
}

const ConnectionCard: React.FC<ConnectionCardProps> = ({ name, image, isSelected, onClick }) => {
    return (
      <div 
        className="h-full w-full flex justify-center items-center cursor-pointer" 
        onClick={onClick}
      >
        <div className="w-fit flex-col flex items-center">
          <div className="flex items-center w-full mb-2">
            <div 
              className={`w-4 h-4 rounded-full border-2 border-gray-400 mr-2 ${
                isSelected ? 'bg-blue-500 border-blue-500' : 'bg-white'
              }`}
            />
            <p className="text-start font-bold">
              {name}
            </p>
          </div>
          <img src={image} alt={name} className="max-h-full max-w-full"/>
        </div>
      </div>
    );
};

function ConnectionPage() {
    const [selectedConnection, setSelectedConnection] = useState<string | null>(null);
  
    const handleCardClick = (name: string) => {
      setSelectedConnection(name === selectedConnection ? null : name);
    };
  
    return (
      <div className="w-full h-screen flex flex-col bg-[#F0F0F0] py-2">
        <div className="py-2 pr-2">
          <Header/>
        </div>
        <div className="flex-1 flex flex-col p-2 justify-center items-center border-2 border-gray-500">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
            {connections.map((connection) => (
              <ConnectionCard 
                key={connection.name}
                name={connection.name} 
                image={connection.image}
                isSelected={connection.name === selectedConnection}
                onClick={() => handleCardClick(connection.name)}
              />
            ))}
          </div>
          <div className="w-full flex justify-center items-center mt-4">
            <Button
              key="1"
              name="Start"
              type="secondary"
              className="w-60 bg-brown-600 text-white hover:bg-brown-700"
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </div>
    );
}
export default ConnectionPage;