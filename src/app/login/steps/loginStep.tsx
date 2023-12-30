import { H1 } from "@/app/components/typography/h1/h1";
import { Input } from "@/app/components/input/input";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button } from "@/app/components/button/button";

export const LoginStep = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-6">
      <H1 textColor="text-light">Entrar</H1>
      <Input type="email" placeholder="Usuário" icon={<FaUserAstronaut className="text-light"/>} />
      <Input type="password" placeholder="Senha" icon={<RiLockPasswordLine className="text-light"/>} />
      <Button className="w-full" label='Entrar' />
      <a className="text-light text-center">Esqueceu a senha?</a>
    </div>
  );
};