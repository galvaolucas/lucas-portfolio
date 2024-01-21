import { Button } from "@/app/components/button/button";
import { useAuth } from "@/app/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const Sidebar = (): React.ReactElement => {
  const router = useRouter();
  const auth = useAuth();
  const queryClient = useQueryClient();
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-1 py-2 border-r">
      <div className="text-purple text-md font-bold">Devfolio</div>
      <div className="flex flex-col gap-2">
        <Button variant="filled" label="Dados Pessoais" onClick={() => router.push('/dashboard')} />
        <Button variant="filled"label="Experiências Profissionais" onClick={() => router.push('/dashboard/experiences')} />
        <Button variant="filled" label="Projetos" onClick={() => router.push('/dashboard/projects')} />
      </div>
      <div className="w-3/4">
        <Button label='Logout' 
          onClick={async () => {
            auth.logout();
            router.push('/');
          }} 
        />
      </div>
    </div>
  );
}