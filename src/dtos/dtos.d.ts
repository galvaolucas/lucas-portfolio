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

export default IMailProvider;
    