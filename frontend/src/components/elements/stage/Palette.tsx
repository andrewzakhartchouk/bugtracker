import { useClickOutside } from "hooks";

interface Props {
  showPalette: boolean;
  setShowPalette: Function;
  handleChange: Function;
}

export const Palette = (props: Props) => {
  const paletteRef = useClickOutside(() => props.setShowPalette(false));

  const palette: Array<string> = [
    "e63232",
    "f3722c",
    "f8961e",
    "ffc71f",
    "7fc96b",
    "43aa8b",
    "277da1",
    "3b498e",
    "66418a",
  ];

  return (
    <div className="absolute right-8 flex w-full justify-end">
      <div
        ref={paletteRef}
        className={`justify-self-end z-10 grid-cols-9 gap-0.5 p-2 bg-panel-green rounded-br-xl rounded-tl-xl ${
          props.showPalette ? "grid" : "hidden"
        }`}
      >
        {palette.map((color, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                props.setShowPalette(false);
                props.handleChange(color);
              }}
              className={`h-6 w-6 bg-stage-color-${
                index + 1
              } cursor-pointer hover:opacity-60`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
