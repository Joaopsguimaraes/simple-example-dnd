import { forwardRef, ForwardRefRenderFunction } from "react";

interface CardProps{
  name: string;
}

const CardComponent: ForwardRefRenderFunction<HTMLLIElement, CardProps> = (
  { name },
  ref
) => {
  return (
    <li
      ref={ref}
      className="p-8 border flex items-center justify-center bg-black  border-zinc-100"
    >
      {name}
    </li>
  );
};

export const Card = forwardRef(CardComponent);
