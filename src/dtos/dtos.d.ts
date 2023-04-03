export interface IForm {
    name: string;
    email: string;
    phone: string;
    description: string;
}

export interface IMailProvider {
    sendMail(
      to: string,
      subject: string,
      templateFile: string,
      emailData: any,
    ): Promise<void>;
}

export interface IProject {
  key: number;
  card: {
    title: string;
    description: string;
    file: StaticImageData;
    link?: string;
    technologies?: string[];
  }
}

export default IMailProvider;
    