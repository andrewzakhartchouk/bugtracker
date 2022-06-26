import { StylesConfig } from "react-select";

const breakpoints = [640, 768, 1024, 1280, 1536];

const mediaQuery = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

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
    height: state.isMulti ? "" : "1.875rem",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    color: "white",
    fontSize: "0.825rem",
    lineHeight: "1.25rem",
    [mediaQuery[2]]: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    padding: 0,
    color: "white",
    paddingBottom: "4px",
    fontSize: "0.825rem",
    lineHeight: "1rem",
    [mediaQuery[2]]: {
      fontSize: "1rem",
      lineHeight: "1.25rem",
    },
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
  multiValue: (provided, state) => ({
    ...provided,
    color: "white",
    margin: "0px 2px",
    padding: "0px",
    background: "#3F906B",
    fontSize: "0.825rem",
    lineHeight: "1.25rem",
    [mediaQuery[2]]: {
      fontSize: "1rem",
      lineHeight: "1.25rem",
    },
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: "white",
    padding: "0.2rem 0.5rem",
    background: "transparent",
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    ":hover": { backgroundColor: "#081C15" },
  }),
};
