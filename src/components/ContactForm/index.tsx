import { Flex, VStack} from "@chakra-ui/react";
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'
import { FormEvent, useState } from "react";
import { IForm } from "../../dtos/dtos";
import { FiUser } from "react-icons/fi";


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

        await api.post('/users/contact', body);
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
                isRequired={true}
              />
              <FormErrorMessage>
                {errors.name}
              </FormErrorMessage>
            </FormControl>
            
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                id='email'
                type="email"
                placeholder='email@example.com'
                {...register("email")}
                onChange={(event) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    email: event.target.value,
                  }))
                }}
                isRequired={true}
              />
              <FormErrorMessage>
                {errors.email}
              </FormErrorMessage>
            </FormControl>
            
            <FormControl isInvalid={errors.phone}>
              <FormLabel htmlFor='phone'>Telefone</FormLabel>
                <Input as={InputMask} mask="(99) 99999-9999"
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
                isRequired={true}
              />
              <FormErrorMessage>
                {errors.description}
              </FormErrorMessage>
            </FormControl>
          </VStack>
          <Flex w="100%" align="center" justifyContent="center">
            <Button mt={8} colorScheme='teal' isLoading={isSubmitting} type='submit'>
              Enviar
            </Button>
          </Flex>
        </form>
      )
}

export default ContactForm;