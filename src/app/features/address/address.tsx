import { Input } from "@/app/components/input/default/input"
import { set, useForm } from "react-hook-form";

export const Address = (): React.ReactElement => {
  const { setValue, register, formState: { errors }} = useForm();
  const viaCepRequest = async (cep: string): Promise<void> => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data) {
        setValue('endereco.logradouro', data.logradouro);
        setValue('endereco.bairro', data.bairro);
        setValue('endereco.cidade', data.localidade);
        setValue('endereco.uf', data.uf);
        setValue('endereco.complemento', data.complemento);
      }
    } catch (error) {
      console.error(`Erro durante consulta ao via cep: ${error}`)
    }
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Input placeholder="CEP" formProperty="endereco.cep" register={register} onBlur={(e) => viaCepRequest(e.target.value)} />
        <Input className="w-full" placeholder="Logradouro" formProperty="endereco.logradouro" register={register} />
      </div>
      <div className="flex gap-2">
        <Input placeholder="Número" formProperty="endereco.numero" register={register} />
        <Input className="w-full" placeholder="Complemento" formProperty="endereco.complemento" register={register} />
      </div>
      <div className="w-full flex flex-row gap-2 items-center justify-between">
        <Input placeholder="Bairro" formProperty="endereco.bairro" register={register} />
        <Input placeholder="Cidade" formProperty="endereco.cidade" register={register} />
        <Input placeholder="Estado" formProperty="endereco.uf" register={register} />
      </div>
    </div>
  )
}