import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Switch } from "@headlessui/react";

const HelpDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const options = ["FAQ", "Support", "Contact Us", "About"];

  return (
    <div className={`flex w-80 h-fit border-1 rounded-md items-center justify-between p-2 px-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}>
      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-500 text-black px-4 rounded shadow-md text-sm"
        >
          Help
        </button>
        {isOpen && (
          <ul className="absolute bottom-full mb-2 w-40 bg-white shadow-md rounded-md border">
            {options.map((option) => (
              <li
                key={option}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedOption(option);
                  setModalOpen(true);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center space-x-2 w-fit">
        <span className="text-sm">Dark Mode</span>
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${darkMode ? "bg-blue-600" : "bg-gray-300"} relative inline-flex h-4 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable dark mode</span>
          <span
            className={`${darkMode ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform bg-white rounded-full transition`}
          />
        </Switch>
      </div>

      {/* Modal */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white p-6 rounded shadow-lg w-1/3">
          <Dialog.Title className="text-lg font-bold">{selectedOption}</Dialog.Title>
          <p className="mt-2">This is the content for {selectedOption}.</p>
          <button onClick={() => setModalOpen(false)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default HelpDropdown;
