import { Button } from "@/app/components/button/button";
import { SidebarContext } from "@/app/contexts/sidebarContext";
import { ISidebarProps } from "@/global/types";

export const Sidebar = ({ setArea }: ISidebarProps): React.ReactElement => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-1 py-2">
      <div className="text-purple text-md font-bold">Devfolio</div>
      <div className="flex flex-col gap-2">
        <Button variant="filled" label="Dados Pessoais" onClick={() => setArea('personalData')} />
        <Button variant="filled"label="Experiências Profissionais" onClick={() => setArea('experiences')} />
        <Button variant="filled" label="Tecnologias" onClick={() => setArea('technologies')} />
      </div>
      <div>
        User Area
      </div>
    </div>
  );
}