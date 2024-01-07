import { H1 } from '@/app/components/typography/h1/h1';
import { Input } from '@/app/components/input/input';
import { FaUserAstronaut } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '@/app/components/button/button';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { LoginContext } from '@/app/contexts/loginContext';
import { UserContext } from '@/app/contexts/userContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useRouter } from 'next/navigation';
import { LoginRestClient } from '@/app/api/login';

export const LoginStep = (): React.ReactElement => {
  const { handleSubmit, getValues, register, formState: { errors } } = useForm();
  const loginContext = useContext(LoginContext);
  const userContext = useContext(UserContext);
  const loginRestClient = new LoginRestClient();
  const localStorage = useLocalStorage();
  const router = useRouter();

  const login = async (): Promise<void> => {
    const formData = getValues();
    try {
      const loginData = await loginRestClient.signIn(formData);
      if (loginData) {
        userContext?.setUser(loginData);
        localStorage.setItem('user', JSON.stringify(loginData));
        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
    
  };
  return (
    <form onSubmit={handleSubmit(login)}>
      <div className="flex flex-col gap-6">
        <H1 textColor="text-light">Entrar</H1>
        <Input
          type="email"
          placeholder="Email"
          formProperty="email"
          icon={<FaUserAstronaut className="text-light" />}
          required
          register={register}
          errors={errors}
          errorMessage='Campo obrigatório'
        />
        <Input
          type="password"
          placeholder="Senha"
          formProperty="password"
          icon={<RiLockPasswordLine className="text-light" />}
          required
          register={register}
          errors={errors}
          errorMessage='Campo obrigatório'
        />
        <div className="flex gap-4 justify-between">
          <Button label="Voltar" type="button" onClick={() => loginContext?.setStep('main')} />
          <Button className="w-full" label="Entrar" type='submit' />
        </div>
        <a className="text-light text-center">Esqueceu a senha?</a>
      </div>
    </form>
  );
};
