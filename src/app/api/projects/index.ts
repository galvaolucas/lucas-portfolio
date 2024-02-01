import { IProject } from "@/global/types";
import { setHeaders } from "@/utils/setHeaders";

interface IProjectRestClient {
  create: (project: IProject) => Promise<IProject | undefined>;
}

export class ProjectRestClient implements IProjectRestClient {
  baseUrl: string;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  }

  create = async (data: IProject): Promise<IProject | undefined> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'POST',
        headers: setHeaders(),
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Ocorreu um erro ao cadastrar os dados pessoais do usuário.');
      return await response.json();
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };

  update = async (data: IProject): Promise<IProject | undefined> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${data._id}`, {
        method: 'PUT',
        headers: setHeaders(),
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Ocorreu um erro ao atualizar os dados pessoais do usuário.');
      return await response.json();
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };

  getProjectsByUserId = async (userId: string): Promise<IProject[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${userId}`, {
      method: 'GET',
      headers: setHeaders(),
    });
    if (!response?.ok) {
      throw new Error('Ocorreu um erro ao consultar os dados pessoais do usuário.');
    };
    return await response.json();
  }
}