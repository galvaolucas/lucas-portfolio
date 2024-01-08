import { Card } from "@/app/components/card/card";
import { Input } from "@/app/components/input/input";
import { useUser } from "@/app/hooks/useUser"
import { useForm } from "react-hook-form";

export const PersonalData = (): React.ReactElement => {
  const { user } = useUser();
  const { register, formState: { errors }} = useForm();
  return (
    <div className="w-full h-full border border-light">
      <form>
        <Card>
          <Input placeholder="Sobre" formProperty="about" register={register}  />
        </Card>
      </form>
    </div>
  )
}