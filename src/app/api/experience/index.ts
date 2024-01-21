import { IExperience, IUser } from '@/global/types';
import { setHeaders } from '@/utils/headers';

interface IExperienceRestClient {
  createExperience: ({data, userId}:IExperienceProps) => Promise<any>;
  updateExperience: ({data, userId}:IExperienceProps) => Promise<any>;
  getExperiencesByUserId: (userId: string) => Promise<any>;
}

interface IExperienceProps {
  data: IExperience,
  userId: string
}

export class ExperienceRestClient implements IExperienceRestClient {
  baseUrl: string;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  }

  createExperience = async ({
    data,
    userId
  }:IExperienceProps): Promise<any> => {
    try {
      if (userId) {
        data.user = userId;
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience`, {
          method: 'POST',
          headers: setHeaders(),
          body: JSON.stringify(data),
        });
      }
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };

  updateExperience = async ({
    data,
    userId
  }:IExperienceProps): Promise<any> => {
    try {
      if (userId) {
        data.user = userId;
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience/${data._id}`, {
          method: 'PUT',
          headers: setHeaders(),
          body: JSON.stringify(data),
        });
      }
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };

  delete = async (
    experienceId: string,
  ): Promise<any> => {
    try {
      if (experienceId) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience/${experienceId}`, {
          method: 'DELETE',
          headers: setHeaders(),
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
      if (userId) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience/user/${userId}`, {
          method: 'GET',
          headers: setHeaders(),
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
