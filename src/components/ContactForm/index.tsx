import { VStack} from "@chakra-ui/react";
import { api } from '../../../services/api';
import { useForm } from 'react-hook-form';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'
import { FormEvent, useState } from "react";
import { IForm } from "../../dtos/dtos";

export function ContactForm() {
    const [formData, setFormData] = useState<IForm>();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm({mode: "all"});

      async function onSubmit(event: FormEvent) {

        const body = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          description: formData.description,
        }

        await api.post('/sendEmail', body);

      }
      
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
          <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor='name'>Nome</FormLabel>
              <Input
                id='name'
                placeholder='Nome'
                {...register("name")}
                onChange={(event) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    name: event.target.value,
                  }))
                }}
              />
              <FormErrorMessage>
                {errors.name}
              </FormErrorMessage>
            </FormControl>
            
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                id='email'
                placeholder='Email'
                {...register("email")}
                onChange={(event) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    email: event.target.value,
                  }))
                }}
              />
              <FormErrorMessage>
                {errors.email}
              </FormErrorMessage>
            </FormControl>
            
            <FormControl isInvalid={errors.phone}>
              <FormLabel htmlFor='phone'>Telefone</FormLabel>
              <Input
                id='phone'
                placeholder='Telefone'
                {...register("phone")}
                onChange={(event) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    phone: event.target.value,
                  }))
                }}
              />
              <FormErrorMessage>
                {errors.phone}
              </FormErrorMessage>
            </FormControl>
            
            <FormControl isInvalid={errors.description}>
              <FormLabel htmlFor='description'>Assunto</FormLabel>
              <Input
                id='description'
                placeholder='Assunto'
                {...register("description")}
                onChange={(event) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    description: event.target.value,
                  }))
                }}
              />
              <FormErrorMessage>
                {errors.description}
              </FormErrorMessage>
            </FormControl>
            
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
              Enviar
            </Button>
          </VStack>
        </form>
      )
}

export default ContactForm;