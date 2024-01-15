import { H1 } from '@/app/components/typography/h1/h1';
import { Input } from '@/app/components/input/default/input';
import { FaUserAstronaut } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '@/app/components/button/button';
import { UserRestClient } from '@/app/api/users';
import { useForm } from 'react-hook-form';
import { ICreateUser } from '@/global/types';
import { useContext } from 'react';
import { LoginContext } from '@/app/contexts/loginContext';
import { Toast } from '@/app/components/toast/toast';
import { toast } from 'react-toastify';
import { DisplayError } from '@/app/components/error/displayError';

export const CreateAccountStep = (): React.ReactElement => {
  const {
    getValues,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const userRestClient = new UserRestClient();
  const loginContext = useContext(LoginContext);
  const createUser = async (): Promise<void> => {
    const formData = getValues();
    if (formData.password !== formData.confirmPassword) {
      throw new Error('As senhas não coincidem');
    }
    try {
      await userRestClient.createUser(formData as ICreateUser);
      toast.success('Usuário criado com sucesso', {
        position: 'top-right',
        autoClose: 3000,
      });
      setTimeout(() => loginContext?.setStep('main'), 2000)
    } catch (error) {
      console.error(error);
      toast.error(`Erro durante a criação do usuário: ${error}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(createUser)}>
      <Toast>
        <div className="flex flex-col gap-6 w-96">
          <H1 textColor="text-light">Cadastre-se</H1>
          <Input
            type="email"
            placeholder="Email"
            icon={<FaUserAstronaut className="text-light" />}
            formProperty="email"
            required
            register={register}
            errors={errors}
            errorMessage='Campo obrigatório'
          />
          <Input
            type="text"
            placeholder="Usuário"
            icon={<FaUserAstronaut className="text-light" />}
            formProperty="username"
            required
            register={register}
            errors={errors}
            errorMessage='Campo obrigatório'
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={<RiLockPasswordLine className="text-light" />}
            formProperty="password"
            required
            register={register}
            errors={errors}
            errorMessage='Campo obrigatório'
          />
          <Input
            type="password"
            placeholder="Confirmar Senha"
            icon={<RiLockPasswordLine className="text-light" />}
            formProperty="confirmPassword"
            required
            register={register}
            errors={errors}
            errorMessage='Campo obrigatório'
          />
          <div className="flex gap-4 justify-between">
            <Button label="Voltar" type="button" onClick={() => loginContext?.setStep('main')} />
            <Button label="Criar Conta" type="submit" />
          </div>
        </div>
      </Toast>
    </form>
  );
};
