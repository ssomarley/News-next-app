
import { NewsResponse, newsArticles } from "@/Utils/models";
import GridMaker from "@/componants/gridMaker";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

interface props{ articles:newsArticles[]}

export const getServerSideProps:GetServerSideProps<props>
=async ()=>{

 
      const response= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey="+ process.env.API_KEY )
      const  newsResponse:NewsResponse= await response.json()
      return {props : {articles:newsResponse.articles}}
 
}
export default function Home({articles} :props) {

  return (  
    <>
     <Head>
        <title key="title">news Article</title>
      </Head>  
      <main >
        <h1>news app with server side props which will be used mostly for SEO</h1>
          <GridMaker articles={articles}/>
      </main>
    </>
  );
}
