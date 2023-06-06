import { useState, useRef } from "react";

import { IDropdownProps, ICountry } from "interfaces";
import { getStorageItem } from "utils";

import chevronDownSvg from "assets/svg/chevronDown.svg";
import "./styles.scss";

const Dropdown = ({ name, data }: IDropdownProps) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const dropdownData: Array<ICountry> = data ?? getStorageItem("countries");

  const selectOptionRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { id } = event.target as HTMLInputElement;

    if (selectedItem === id) {
      return;
    }

    setSelectedItem(id);
    setOpen(false);
  };

  const getSelectedCountry = () =>
    dropdownData?.find((d) => d.iso3 === selectedItem);

  return (
    <div className="dropdown">
      <div className="dropdown-header flex" onClick={toggleDropdown}>
        {selectedItem ? (
          <div className="selected">{getSelectedCountry()?.country}</div>
        ) : (
          name
        )}
        <div className={`svg-wrapper flex ${isOpen && "open"}`}>
          <img src={chevronDownSvg} alt="chevronDownSvg" />
        </div>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {dropdownData.map((item: ICountry) => (
          <div
            key={item.iso3}
            className="dropdown-item"
            ref={selectOptionRef}
            onClick={handleItemClick}
            id={item.iso3}
          >
            {item.country}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
