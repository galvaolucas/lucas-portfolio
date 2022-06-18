interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    templateFile: string,
    emailData: any,
  ): Promise<void>;
}

export default IMailProvider;
