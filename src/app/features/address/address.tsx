import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { messages } from '@/utils/messages';
import { useForm, useFormContext } from 'react-hook-form';

export const Address = (): React.ReactElement => {
  const form = useFormContext();
  const viaCepRequest = async (cep: string): Promise<void> => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data) {
        form.setValue('address.street', data.logradouro);
        form.setValue('address.neighborhood', data.bairro);
        form.setValue('address.city', data.localidade);
        form.setValue('address.state', data.uf);
        form.setValue('address.addOn', data.complemento);
      }
    } catch (error) {
      console.error(`Erro durante consulta ao via cep: ${error}`);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <FormField
          control={form.control}
          name="address.cep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CEP</FormLabel>
              <FormControl>
                <Input
                  placeholder="CEP"
                  {...field}
                  onBlur={(e) => viaCepRequest(e.target.value)}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Input
          className="w-full"
          placeholder="Logradouro"
          formProperty="address.street"
          register={form.register}
          errors={form.formState.errors}
          required
          errorMessage={messages.fields.required}
        />
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Número"
          formProperty="address.number"
          register={form.register}
        />
        <Input
          className="w-full"
          placeholder="Complemento"
          formProperty="address.addOn"
          register={form.register}
        />
      </div>
      <div className="w-full flex flex-row gap-2 items-center justify-between">
        <Input
          placeholder="Bairro"
          formProperty="address.neighborhood"
          register={form.register}
          errors={form.formState.errors}
          required
          errorMessage={messages.fields.required}
        />
        <Input
          placeholder="Cidade"
          formProperty="address.city"
          register={form.register}
          errors={form.formState.errors}
          required
          errorMessage={messages.fields.required}
        />
        <Input
          placeholder="Estado"
          formProperty="address.state"
          register={form.register}
          errors={form.formState.errors}
          required
          errorMessage={messages.fields.required}
        />
      </div>
    </div>
  );
};
