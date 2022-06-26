import Image from "next/image";

export const RegisterVisual: React.FunctionComponent = () => {
  return (
    <>
      <Image
        src="/register.svg"
        layout="fill"
        objectFit="contain"
        alt="A SVG of a bug tracking illustration"
      />
    </>
  );
};
