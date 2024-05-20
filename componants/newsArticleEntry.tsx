import { newsArticles } from "@/Utils/models";
import Image from "next/image";
import { Card, CardImg } from "react-bootstrap";
import placeHolder from "@/assets/newsPick_placeHolder.jpeg"

interface props {
    article:newsArticles
}
const NewsArticleCards = ({article:{title,content,description,url,urlToImage} }:props) => {
    const valiUrl=(url.startsWith("http://") || url.startsWith("https://")) ? urlToImage : undefined

    return ( 
        <a href={url}>
            
            <Card className="h-100">
                <Image
                   
                    src={valiUrl || placeHolder}
                    width={500}
                    height={250}
                    alt="news Article image "
                    className="card-img-top object-fit-cover"
                />

                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
               
            </Card>

        </a>
     );
}
 
export default NewsArticleCards ;