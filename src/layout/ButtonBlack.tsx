import { twMerge } from "tailwind-merge";

type PropTypes = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  [x: string]: any;
};

const ButtonBlack = ({ children, onClick, className, ...rest }: PropTypes) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "py-2 px-10 bg-black text-white",
        "hover:bg-zinc-800 active:bg-zinc-600",
        "disabled:bg-zinc-300 disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonBlack;
