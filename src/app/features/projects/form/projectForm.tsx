"use client";
import { Button } from "@/app/components/button/button";
import { Card } from "@/app/components/card/card"
import { Container } from "@/app/components/container/container"
import { ImageUploader } from "@/app/components/image/imageUploader";
import { Input } from "@/app/components/input/default/input"
import { LimitedTextInput } from "@/app/components/input/limitedTextInput/limitedTextInput";
import { H2 } from "@/app/components/typography/h2/h2"
import { messages } from "@/utils/messages"
import { FormProvider, useForm } from "react-hook-form"

export const ProjectForm = (): React.ReactElement => {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <form>
        <Container>
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <div className="w-36">
              <Button label='Cadastrar Projeto' />
            </div>
          </div>
          <Card>
            <div className="flex flex-col gap-4">
              <H2 textColor="text-light">Dados do Projeto</H2>
              <Input placeholder='Título do projeto' formProperty="title" register={form.register} errors={form.formState.errors} required errorMessage={messages.fields.required} />
              <LimitedTextInput placeholder='Descrição do projeto' formProperty="description" register={form.register} errors={form.formState.errors} required errorMessage={messages.fields.required} />
              <Input placeholder='Link do projeto (Github, Gitlab, Bitbucket, etc...)' formProperty="link" register={form.register} errors={form.formState.errors} required errorMessage={messages.fields.required} />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col gap-4">
              <H2 textColor="text-light">Mídias</H2>
              <ImageUploader />
            </div>
          </Card>
          </div>
        </Container>
      </form>
    </FormProvider>
  )
}