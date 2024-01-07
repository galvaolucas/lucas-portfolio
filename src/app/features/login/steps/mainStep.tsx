import { Button } from '@/app/components/button/button';
import { useContext } from 'react';
import { LoginContext } from '../../../contexts/loginContext';
import { H2 } from '@/app/components/typography/h2/h2';

export const MainStep = (): React.ReactElement => {
  const context = useContext(LoginContext);
  return (
    <div>
      <div className="flex items-center justify-center mb-4 gap-1">
        <H2 className="text-light text-center">Bem vindo ao</H2>
        <H2 className="text-purple">Devfólio</H2>
      </div>
      <H2 className="text-light text-center mb-12">
        Crie seu portfólio e publique em minutos
      </H2>
      <div className="flex items-center justify-center gap-4">
        <Button
          label="Já sou usuário"
          onClick={() => context?.setStep('login')}
        />
        <Button
          label="Criar Conta"
          onClick={() => context?.setStep('createAccount')}
        />
      </div>
    </div>
  );
};
