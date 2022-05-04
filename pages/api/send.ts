import * as sendgrid from '@sendgrid/mail';
import type {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    sendgrid.setApiKey(process.env.SENDGRID_API as string);

    const msg = {
      to: req.body.email,
      from: 'hikaru.kobayashi0719@gmail.com',
      subject: 'お問合せありがとうございます。',
      text: `${req.body.name}様\nお問合せを受け付けいたしました。\n回答をお待ちください。`,
    };

    try {
      await sendgrid.send(msg);
    } catch (error) {
      console.error(error);
    }

    res.status(200).send(msg);
  }
}
