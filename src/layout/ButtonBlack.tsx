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
        "p-2 w-32 bg-black text-white uppercase",
        "hover:bg-zinc-800 active:bg-zinc-600",
        "disabled:bg-zinc-400 disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonBlack;
