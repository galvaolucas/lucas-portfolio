import { H1 } from "@/app/components/typography/h1/h1";
import { Input } from "@/app/components/input/input";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export const CreateAccountStep = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-6">
      <H1 textColor="text-light">Cadastre-se</H1>
      <Input type="email" placeholder="Usuário" icon={<FaUserAstronaut className="text-light"/>} />
      <Input type="password" placeholder="Senha" icon={<RiLockPasswordLine className="text-light"/>} />
      <Input type="password" placeholder="Confirmar Senha" icon={<RiLockPasswordLine className="text-light"/>} />
    </div>
  );
};