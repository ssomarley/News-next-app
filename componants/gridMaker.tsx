import { newsArticles } from "@/Utils/models";
import { Col, Row } from "react-bootstrap";
import NewsArticleCards from "./newsArticleEntry";

interface props{
    articles:newsArticles[]
}
const GridMaker = ({articles}:props) => {
    return (
            <Row xs={1} sm={2} xl={3} className="g-4">
                    
                {articles.map(child =>(
                    <Col key={child.url}>
                        <NewsArticleCards article={child} />
                    </Col>
                ))}
                
            </Row>
      );
}
 
export default GridMaker;