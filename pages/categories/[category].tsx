import { NewsResponse, newsArticles } from "@/Utils/models";
import GridMaker from "@/componants/gridMaker";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";

interface props{
    articles:newsArticles[]
}

export const getStaticPaths:GetStaticPaths = async ()=>{
    
    const categorySlugs=[
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
    ];

    // this category must named exacly as [category].tsx 
    const paths=categorySlugs.map(slug =>({params:{ category: slug}}));

    return {
        paths,
       fallback: false
    }
}

export const getStaticProps:GetStaticProps<props>= async ({params})=>{
    const category=params?.category?.toString()
    const response= await fetch(` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.API_KEY}`)

    const  newsResponse:NewsResponse= await response.json()
    return {
        props : {articles:newsResponse.articles},
        revalidate:5 * 60 // this is for revaldating the page every 5 min if person open the page 
    }

}
const CategoryNewsPage = ({articles}:props) => {
    const router=useRouter()
    const catName=router.query.category?.toString()
    return ( 
        <>
        <h1>catagory news</h1>
        <h2>{`category : ${catName}`}</h2>
        <Alert>
            this page uses server <strong>static props</strong> in wich its going to very fast and its going to update evry 5 mins
        </Alert>
        <GridMaker articles={articles} />
        </>
        
     );
}
 
export default CategoryNewsPage;