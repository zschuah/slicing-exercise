import { twMerge } from "tailwind-merge";

type PropTypes = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "outline";
  [x: string]: any;
};

const ButtonBlack = ({
  children,
  onClick,
  className,
  variant,
  ...rest
}: PropTypes) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "py-2 px-4 bg-black text-white uppercase border-2 border-black",
        "hover:bg-zinc-800 active:bg-zinc-600",
        "disabled:bg-zinc-400 disabled:cursor-not-allowed ",
        "hover:border-zinc-800 active:border-zinc-600 disabled:border-zinc-400",
        variant === "outline" &&
          "bg-transparent text-black hover:bg-zinc-500/20 active:bg-zinc-500/40",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonBlack;
