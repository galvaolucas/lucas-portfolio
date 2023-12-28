import { IInput } from "./types";


export const Input = ({ placeholder, icon }: IInput): React.ReactElement => {
  return (
    <div className="w-60 p-1 flex items-center gap-2 rounded-md bg-light">
      {icon}
      <input placeholder={placeholder} className="bg-light" />
    </div>
  );
};
