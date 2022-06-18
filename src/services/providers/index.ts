import { container } from 'tsyringe';
import IMailProvider from '../../dtos/dtos';
import { GoogleProvider } from './GoogleProvider';

const mailProvider = {
  google: container.resolve(GoogleProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  mailProvider[
    process.env.MAIL_PROVIDER as 'google'
  ],
);
