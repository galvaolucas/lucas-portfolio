/* eslint-disable import/no-anonymous-default-export */
import { query as q } from 'faunadb';
import { faunaClient } from '../../services/fauna';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { GoogleProvider } from '../../services/providers/GoogleProvider';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {

        const response = req.body;

        const name = response.name;
        const phone = response.phone;
        const email = new GoogleProvider;
       
        try {
            let query = await faunaClient.query(
                q.Create(
                    q.Collection('form'), {
                        data: {
                            name: response.name,
                            email: response.email,
                            phone: response.phone,
                            description: response.description,
                        }
                    }
                )
            )
            
            const email_path = path.join(
                __dirname,
                '..',
                '..',
                '..',
                '..',
                'services',
                'providers',
                'views',
                'emailLayout.hbs',
            );

            await email.sendMail(response.email, 'Email de Confirmação' , email_path, {
                name,
            });
            
            return res.status(200).json(query);

        } catch(error) {
            console.log(error);
        }
    }
    else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method not allowed");
    }
}