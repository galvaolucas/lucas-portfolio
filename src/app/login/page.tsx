import { Input } from "../components/input/input";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from 'next/image';

const Login = (): React.ReactElement => {
  return (
    <div>
      <div className="flex">
        <div>
          <Image width={400} height={400} src='/images/cover.png' alt='cover' />
        </div>
        <div className="flex flex-col gap-4">
          <Input placeholder="Usuário" icon={<FaUserAstronaut className="text-dark-gray"/>} />
          <Input placeholder="Senha" icon={<RiLockPasswordLine className="text-dark-gray"/>} />
        </div>
      </div>
      <div className="text-light">Image by storyset on Freepik</div>
    </div>
  );
};

export default Login;