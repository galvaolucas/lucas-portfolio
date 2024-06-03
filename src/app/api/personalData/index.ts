import { IPersonalData } from '@/global/types';
import { setHeaders } from '@/utils/setHeaders';

interface IPersonalDataRestClient {
  create: (user: IPersonalData) => Promise<IPersonalData | undefined>;
}

export class PersonalDataRestClient implements IPersonalDataRestClient {
  baseUrl: string;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  }

  create = async (data: IPersonalData): Promise<IPersonalData | undefined> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/personalData`,
        {
          method: 'POST',
          headers: setHeaders(),
          body: JSON.stringify(data),
        },
      );
      if (!response.ok)
        throw new Error(
          'Ocorreu um erro ao cadastrar os dados pessoais do usuário.',
        );
      return await response.json();
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };

  update = async (data: IPersonalData): Promise<IPersonalData | undefined> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/personalData/${data._id}`,
        {
          method: 'PUT',
          headers: setHeaders(),
          body: JSON.stringify(data),
        },
      );
      if (!response.ok)
        throw new Error(
          'Ocorreu um erro ao atualizar os dados pessoais do usuário.',
        );
      return await response.json();
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };

  getPersonalDataByUserId = async (userId: string): Promise<IPersonalData> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/personalData/${userId}`,
      {
        method: 'GET',
        headers: setHeaders(),
      },
    );
    if (!response?.ok) {
      throw new Error(
        'Ocorreu um erro ao consultar os dados pessoais do usuário.',
      );
    }
    return await response.json();
  };
}

