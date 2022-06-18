import { StylesConfig } from "react-select";

export const SelectStyle: StylesConfig = {
  menu: (provided, state) => ({
    ...provided,
    background: "#081C15",
    color: "white",
    padding: 0,
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "::-webkit-scrollbar": { display: "none" },
  }),
  menuList: (provided, state) => ({
    ...provided,
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "::-webkit-scrollbar": { display: "none" },
  }),
  control: (provided, state) => ({
    ...provided,
    background: "transparent",
    outline: "none",
    border: 0,
    padding: 0,
    boxShadow: "none",
    minHeight: "1.875rem",
    height: "1.875rem",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    color: "white",
    fontSize: "1rem",
    lineHeight: "1.5rem",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    padding: 0,
    color: "white",
    paddingBottom: "4px",
    fontSize: "1rem",
    lineHeight: "1.5rem",
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? "#3F906B" : "#081C15",
    ":hover": { backgroundColor: "#3F906B" },
  }),

  indicatorSeparator: (state) => ({
    display: "none",
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    padding: "0px",
    margin: "0px",
    height: "1.875rem",
  }),
  input: (provided, state) => ({
    ...provided,
    color: "white",
    margin: "0px",
  }),
};
