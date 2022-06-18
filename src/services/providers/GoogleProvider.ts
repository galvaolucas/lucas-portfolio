import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import { google } from 'googleapis';
import IMailProvider from '../../dtos/dtos';

interface IGoogleCredential {
    client_id: string;
    client_secret: string;
    redirect_uri: string;
    refresh_token: string;
  }

export class GoogleProvider implements IMailProvider {
  private client: Transporter;
  private oAuth2Client: any;
  private credentials: IGoogleCredential;

  constructor() {
    fs.readFile('.google-credentials/credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        this.credentials = JSON.parse(content.toString());
        this.oAuth2Client = new google.auth.OAuth2(
          this.credentials.client_id,
          this.credentials.client_secret,
          this.credentials.redirect_uri,
        );
        this.oAuth2Client.setCredentials({
          refresh_token: this.credentials.refresh_token,
        });
      });
  }

  async sendMail(
    to: string,
    subject: string,
    templateFile: string,
    emailData: any,
    ): Promise<void> {
    const client_id = process.env.GOOGLE_CLIENT_ID;
    const client_secret = process.env.GOOGLE_CLIENT_SECRET;
    const redirect_uri = process.env.REDIRECT_URI;
    const refresh_token = process.env.REFRESH_TOKEN;

    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);
    oAuth2Client.setCredentials({ refresh_token: refresh_token });

    const accessToken = await this.oAuth2Client.getAccessToken();

    const emailFile = await fs.promises.readFile(templateFile, {
      encoding: 'utf-8',
    });

    this.client = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'lucasmelogalv@gmail.com',
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken,
      },
    });

    await this.client.sendMail({
      to,
      from: process.env.MAIL_FROM,
      subject,
      html: handlebars.compile(emailFile)(emailData),
    });
  }
}

module.exports = { GoogleProvider };

