'use client';
import { Container } from '@/app/components/container/container';
import { SearchInput } from '@/app/components/input/selectInput/searchInput';
import { H2 } from '@/app/components/typography/h2/h2';
import { H3 } from '@/app/components/typography/h3/h3';
import { professionRoleOptions } from '@/global/constants';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { Address } from '../address/address';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import { UserContext } from '@/app/contexts/userContext';
import { Button } from '@/app/components/button/button';
import { PersonalDataRestClient } from '@/app/api/personalData';
import { IPersonalData } from '@/global/types';
import { Textarea } from '@/components/ui/textarea';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export const PersonalData = (): React.ReactElement => {
  const personalDataRestClient = new PersonalDataRestClient();
  const userContext = useContext(UserContext);
  const queryClient = useQueryClient();
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['personaldata'],
    queryFn: async () => {
      if (userContext?.user?.id) {
        return await personalDataRestClient.getPersonalDataByUserId(
          userContext?.user?.id as string,
        );
      }
    },
    enabled: !!userContext?.user?.id,
  });
  const mutation = useMutation({
    mutationFn: async (personalData: FieldValues): Promise<any> => {
      return await handlePersonalData(personalData);
    },
  });

  useEffect(() => {
    if (data && Object.keys(data as {}).length > 0) {
      form.setValue('address._id', data.address._id);
      form.setValue('address.cep', data.address.cep);
      form.setValue('address.street', data.address.street);
      form.setValue('address.state', data.address.state);
      form.setValue('address.number', data.address.number);
      form.setValue('address.addOn', data.address.addOn);
      form.setValue('address.city', data.address.city);
      form.setValue('address.neighborhood', data.address.neighborhood);

      form.setValue('_id', data._id);
      form.setValue('about', data.about);
      form.setValue('mainRole', data.mainRole);
      form.setValue('secondaryRole', data.secondaryRole);
      form.setValue('github', data.github);
      form.setValue('linkedin', data.linkedin);
      form.setValue('whatsapp', data.whatsapp);
    }
  }, [data]);

  const form = useForm({ defaultValues: data as FieldValues });

  if (isFetching) {
    return <>Loading...</>;
  }

  const handlePersonalData = async (values: FieldValues) => {
    try {
      if (userContext?.user?.id) {
        let response;
        const body = {
          ...values,
          user: userContext?.user?.id,
        } as IPersonalData;
        if (data?._id) {
          response = await personalDataRestClient.update(body as IPersonalData);
        } else {
          response = await personalDataRestClient.create(body as IPersonalData);
        }
        await queryClient.invalidateQueries({ queryKey: ['personaldata'] });
        await refetch();
        return response;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormProvider {...form}>
      <Container>
        <form
          onSubmit={form.handleSubmit(
            async () => await mutation.mutateAsync(form.getValues()),
          )}
        >
          <div className="flex items-center justify-end">
            <div className="w-36">
              <Button label="Salvar" type="submit" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col w-full gap-2">
              <H2 textColor="text-light">Dados Gerais</H2>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="Sobre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        You can <span>@mention</span> other users and
                        organizations.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />{' '}
                <H3 textColor="text-light" className="my-2">
                  Endereço
                </H3>
                <Address />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <H2 textColor="text-light">Área de Atuação</H2>
              <div className="flex flex-col w-full gap-2">
                <FormField
                  control={form.control}
                  name="mainRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo Principal</FormLabel>
                      <FormControl>
                        <Input placeholder="Cargo principal" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SearchInput
                  placeholder="Atuo como"
                  loadedOptions={data?.secondaryRole}
                  formProperty="secondaryRole"
                  register={form.register}
                  searchOptions={professionRoleOptions}
                  required
                  errors={form.formState.errors}
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <H2 textColor="text-light">Informações Pessoais</H2>
              <div className="w-full flex flex-col gap-2">
                <H3 textColor="text-light" className="my-2">
                  Mídias Sociais
                </H3>
                <div className="flex flex-row gap-2">
                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Github</FormLabel>
                        <FormControl>
                          <Input placeholder="Github" {...field} />
                        </FormControl>
                        <FormDescription>Endereço do github.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Linkedin</FormLabel>
                        <FormControl>
                          <Input placeholder="Linkedin" {...field} />
                        </FormControl>
                        <FormDescription>Endereço do github.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Whatsapp</FormLabel>
                        <FormControl>
                          <Input placeholder="Whatsapp" {...field} />
                        </FormControl>
                        <FormDescription>Endereço do github.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />{' '}
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </FormProvider>
  );
};

