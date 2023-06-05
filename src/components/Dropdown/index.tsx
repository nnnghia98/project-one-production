import { useState, useRef } from "react";

import { IDropdownProps } from "interfaces";

import chevronDownSvg from "assets/svg/chevronDown.svg";
import "./styles.scss";

const DUMMY_DATA = [
  { id: 0, label: "Istanbul, TR (AHL)" },
  { id: 1, label: "Paris, FR (CDG)" },
];

const Dropdown = ({ name, data = DUMMY_DATA }: IDropdownProps) => {
  const [isOpen, setOpen] = useState(false);
  // const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const selectOptionRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { id } = event.target as HTMLInputElement;

    if (selectedItem === Number(id)) {
      return;
    }

    setSelectedItem(Number(id));
    setOpen(false);
  };

  const getSelectedCountry = () => data.find((d) => d.id === selectedItem);

  return (
    <div className="dropdown">
      <div className="dropdown-header flex" onClick={toggleDropdown}>
        {selectedItem ? (
          <div className="selected">{getSelectedCountry().label}</div>
        ) : (
          name
        )}
        <div className={`svg-wrapper flex ${isOpen && "open"}`}>
          <img src={chevronDownSvg} alt="chevronDownSvg" />
        </div>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {data.map((item) => (
          <div
            key={item.id}
            className="dropdown-item"
            ref={selectOptionRef}
            onClick={handleItemClick}
            id={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
