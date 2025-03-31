import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/button';
import HelpDropdown from "./ui/helpdropdown"

const topics = [
  { name: 'Connection', link: '/connection' },
  { name: 'Tension Member', link: '/tension-member' },
  { name: 'Compression Member', link: '/compression-member' },
  { name: 'Flexural Member', link: '/flexural-member' },
  { name: 'Beam-Column', link: '/beam-column' },
  { name: 'Plate Girder', link: '/plate-girder' },
  { name: 'Truss', link: '/truss' },
  { name: '2D Frame', link: '/2d-frame' },
  { name: '3D Frame', link: '/3d-frame' },
  { name: 'Group Design', link: '/group-design' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='gap-2 w-fit h-screen p-2 flex flex-col justify-between items-center'>
      <div className="flex-1 w-80 bg-[#91B014] p-4 flex flex-col gap-4 items-center border border-gray-700 overflow-y-auto">
        {topics.map((topic) => (
          <Button
            key={topic.link}
            name={topic.name}
            type="secondary"
            className="w-full bg-brown-600 text-white hover:bg-brown-700"
            onClick={() => navigate(topic.link)}
          />
        ))}
      </div>
      <div className="h-fit">
        <HelpDropdown/>
      </div>
    </div>
  );
};

export default Sidebar