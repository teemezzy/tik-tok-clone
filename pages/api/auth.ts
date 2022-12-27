import { client } from './../../utils/client';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function  handler( req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a GET request 
        const user = req.body;
        client.create(user).then(() => {
            res.status(200).json('Successful' )
        });

    }  else if (req.method === 'POST') {
      const user = req.body;
      client.create(user).then(() => {
        res.status(200).json('Successful' )
      });
    }
}
