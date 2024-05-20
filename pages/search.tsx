import { newsArticles } from "@/Utils/models";
import GridMaker from "@/componants/gridMaker";
import NewsArticleCards from "@/componants/newsArticleEntry";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

const MySearchPage = () => {
    const[searcResults,setSearchResults]=useState<newsArticles[] | null>(null)
    const[loading,setLoadingState]=useState(false)
    const[error,setError]=useState(false)
   async function getTheResults(e:FormEvent<HTMLFormElement>){
      // this prevent the page from refreshing the page 
      e.preventDefault()
      const formData=new FormData(e.target as HTMLFormElement)
      const searchQuery=formData.get("search")?.toString()

      if(searchQuery){
            try {
               
               setLoadingState(true)
               setSearchResults(null)
               setError(false)

               const response = await fetch("/api/searchNews?q=" + searchQuery)
               const results:newsArticles[]= await response.json() 
               setSearchResults(results)

            } catch (error) {
               console.log(error)
               setLoadingState(true)
               setError(true)

            }finally{
               setLoadingState(false)
            }
      }
   }
   return ( 
         
        <main>
         <h1>search news</h1>
          <Form onSubmit={getTheResults}>
            <Form.Group>

               <Form.Label >search</Form.Label>
               <Form.Control 
                  name="search"
                  placeholder="search any subject"

               />
               <Button type="submit" className="mt-3" disabled={loading} > search</Button>
            </Form.Group>

            
          </Form>

          <div className="d-flex flex-colum align-items-center">
               {loading && <Spinner animation="border" />}
               {error &&  <h1>some Thing went wrong please try later</h1>}
               {searcResults?.length === 0 &&  <h1>Nothing was found. try another query</h1> }
               {searcResults &&  <GridMaker articles={searcResults} />}
          </div>
        </main>
     );
}
 
export default MySearchPage;
