import { allPostsQuery } from './../../../utils/queries';
import { client } from './../../../utils/client';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function  handler({ req, res }: { req: NextApiRequest; res: NextApiResponse<Data> }): Promise<void> {
    if (req.method === 'GET') {
        // Process a GET request 
        const query = allPostsQuery()  
        const data = await client.fetch(query)

        res.status(200).json(data)
    } 
}
