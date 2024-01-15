import { Card } from "@/app/components/card/card";
import { Container } from "@/app/components/container/container";
import { Input } from "@/app/components/input/default/input";
import { LimitedTextInput } from "@/app/components/input/limitedTextInput/limitedTextInput";
import { SearchInput } from "@/app/components/input/selectInput/searchInput";
import { H2 } from "@/app/components/typography/h2/h2";
import { H3 } from "@/app/components/typography/h3/h3";
import { useUser } from "@/app/hooks/useUser"
import { professionRoleOptions } from "@/global/constants";
import { useForm } from "react-hook-form";
import { Address } from "../address/address";

export const PersonalData = (): React.ReactElement => {
  const { user } = useUser();
  const { register, formState: { errors }} = useForm();
  return (
    <Container>
      <form className="flex h-full flex-col gap-4">
        <Card>
          <div className="flex flex-col w-full gap-2">
            <H2 textColor="text-light">Dados Gerais</H2>
            <div className="w-full">
              <LimitedTextInput placeholder="Texto de apresentação" formProperty="about" register={register}  />
              <H3 textColor="text-light" className="my-2">Endereço</H3>
              <Address />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-2">
            <H2 textColor="text-light">Área de Atuação</H2>
            <div className="flex flex-col w-full gap-2">
              <Input className="w-full" placeholder="Cargo Principal" formProperty="mainRole" register={register}  />
              <SearchInput placeholder="Atuo como" formProperty="professionAreas" register={register} searchOptions={professionRoleOptions} />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col w-full gap-2">
            <H2 textColor="text-light">Informações Pessoais</H2>
            <div className="w-full flex flex-col gap-2">
              <H3 textColor="text-light" className="my-2">Mídias Sociais</H3>
              <div className="flex flex-row gap-2">
                <Input placeholder="Github" formProperty="github" register={register}  />
                <Input placeholder="Linkedin" formProperty="linkedin" register={register}  />
              </div>
              <div className="flex flex-row gap-2">
                <Input type='tel' placeholder="Whatsapp" formProperty="whatsapp" register={register}  />
              </div>
            </div>
          </div>
        </Card>
      </form>
    </Container>
  )
}