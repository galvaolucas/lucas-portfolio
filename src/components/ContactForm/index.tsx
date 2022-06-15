import { Box, Flex, HStack, Image, Text, VStack} from "@chakra-ui/react";
import api from 'axios';
import { useForm } from 'react-hook-form';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'
import { useState } from "react";
import { IForm } from "../../dtos/dtos";

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [formData, setFormData] = useState<IForm>();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm({mode: "all"});

    
      const onSubmit = (data: IForm) => {
        api.post('localhost:3333/email', {
          data,
        })
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
                  setName(event.target.value)
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
                  setEmail(event.target.value)
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
                    setPhone(event.target.value)
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
                  setSubject(event.target.value)
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