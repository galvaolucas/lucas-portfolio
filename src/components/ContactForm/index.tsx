import { Box, Flex, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'
import { useState } from "react";

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm({mode: "all"});
    
      async function submitForm() {
        var formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("subject", subject);

        console.log(formData);
      }
    
      return (
        <form onSubmit={handleSubmit(submitForm)}>
        <VStack spacing={4}>
        <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor='name'>Nome</FormLabel>
            <Input
              id='name'
              placeholder='Nome'
              {...register('name', {
                required: 'Campo Obrigatório',
              })}
              onChange={(event) => {
                setName(event.target.value)
            }}
            />
            <FormErrorMessage>
              {errors.name}
            </FormErrorMessage>
          </FormControl>
          
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor='name'>Email</FormLabel>
            <Input
              id='email'
              placeholder='Email'
              {...register('email', {
                required: 'This is required',
              })}
              onChange={(event) => {
                setEmail(event.target.value)
            }}
            />
            <FormErrorMessage>
              {errors.email}
            </FormErrorMessage>
          </FormControl>
          
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor='name'>Telefone</FormLabel>
            <Input
              id='phone'
              placeholder='Telefone'
              {...register('phone', {
                required: 'This is required',
              })}
              onChange={(event) => {
                  setPhone(event.target.value)
              }}
            />
            <FormErrorMessage>
              {errors.email}
            </FormErrorMessage>
          </FormControl>
          
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor='name'>Assunto</FormLabel>
            <Input
              id='subject'
              placeholder='Assunto'
              {...register('subject', {
                required: 'This is required',
              })}
              onChange={(event) => {
                setSubject(event.target.value)
            }}
            />
            <FormErrorMessage>
              {errors.email}
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