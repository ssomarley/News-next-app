// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NewsResponse } from "@/Utils/models";
import type { NextApiRequest, NextApiResponse } from "next";


export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    // q is just a name it can be anything and we don't have to make that a string how ever thats what we expect
  const query = req.query.q?.toString()
  if (!query){
    return res.status(400).json({error: "Invalid query"})
  }

  const response= await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY} `)
  const newsResponse:NewsResponse=await response.json();

  res.status(200).json(newsResponse.articles);
}
