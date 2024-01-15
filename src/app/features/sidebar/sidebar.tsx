import { Button } from "@/app/components/button/button";
import { useRouter } from "next/navigation";

export const Sidebar = (): React.ReactElement => {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-1 py-2 border-r">
      <div className="text-purple text-md font-bold">Devfolio</div>
      <div className="flex flex-col gap-2">
        <Button variant="filled" label="Dados Pessoais" onClick={() => router.push('/dashboard')} />
        <Button variant="filled"label="Experiências Profissionais" onClick={() => router.push('/dashboard/experiences')} />
        <Button variant="filled" label="Tecnologias" onClick={() => router.push('/dashboard/technologies')} />
      </div>
      <div>
        User Area
      </div>
    </div>
  );
}