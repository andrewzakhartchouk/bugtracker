import Image from "next/image";

export const LoginVisual: React.FunctionComponent = () => {
  return (
    <>
      <Image
        src="/login.svg"
        layout="fill"
        objectFit="contain"
        alt="A SVG of a bug tracking illustration"
      />
    </>
  );
};
