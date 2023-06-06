import { useState } from "react";

import { IDropdownProps, ICountry } from "interfaces";
import { setStorageItem, getStorageItem } from "utils";

import chevronDownSvg from "assets/svg/chevronDown.svg";
import "./styles.scss";

const Dropdown = ({
  name,
  data,
  errorMessage,
  selectedItem,
  setSelectedItem,
}: IDropdownProps) => {
  const [isOpen, setOpen] = useState(false);

  const dropdownData: Array<ICountry> = data ?? getStorageItem("countries");

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const { id } = event.target as HTMLInputElement;

    if (selectedItem?.iso3 === id) {
      return;
    }

    setSelectedItem(getSelectedCountry(id) || selectedItem);
    setStorageItem("cities", getSelectedCountry(id)?.cities);

    setOpen(false);
  };

  const getSelectedCountry = (id: string) =>
    dropdownData?.find((d) => d.iso3 === id);

  return (
    <div className="dropdown">
      <div
        className={`dropdown-header ${
          errorMessage ? `error` : undefined
        }  flex`}
        onClick={toggleDropdown}
      >
        {selectedItem ? (
          <div className="selected">
            {getSelectedCountry(selectedItem.iso3)?.country}
          </div>
        ) : (
          name
        )}
        <div className={`svg-wrapper flex ${isOpen && "open"}`}>
          <img src={chevronDownSvg} alt="chevronDownSvg" />
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <ul className={`dropdown-body ${isOpen && "open"}`}>
        {dropdownData.map((item: ICountry) => (
          <li
            key={item.iso3}
            className="dropdown-item"
            onClick={handleItemClick}
            id={item.iso3}
          >
            {item.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
