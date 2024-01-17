import { IExperience, IUser } from '@/global/types';

interface IExperienceRestClient {
  createExperience: (data: IExperience, userId: string) => Promise<any>;
  getExperiencesByUserId: (userId: string) => Promise<any>;
}

export class ExperienceRestClient implements IExperienceRestClient {
  baseUrl: string;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  }

  createExperience = async (
    data: IExperience,
    userId: string,
  ): Promise<any> => {
    try {
      if (userId) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience/${userId}`, {
          method: 'POST',
          headers: { 'Content-Type':'application/json' },
          body: JSON.stringify(data),
        });
      }
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };

  getExperiencesByUserId = async (
    userId: string,
  ): Promise<any> => {
    try {
      console.log('funca', userId)
      if (userId) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience/user/${userId}`, {
          method: 'GET',
          headers: { 'Content-Type':'application/json' },
        });
        if (!response.ok) {
          throw new Error('Erro ao consultar as experiências do usuário');
        }
        return await response.json();
      }
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };
}
