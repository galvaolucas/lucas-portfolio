import { IInput } from "./types";


export const Input = ({ placeholder, icon, type }: IInput): React.ReactElement => {
  return (
    <div className="w-80 p-2 flex items-center gap-2 rounded-md bg-light-black border-2 border-light text-base">
      {icon}
      <input type={type} placeholder={placeholder} className="bg-light-black text-light" />
    </div>
  );
};
