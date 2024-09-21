import { useEffect, useState } from "react"
import { ShimmerCards } from "./ShimmerCards";
import { SkeltonCards } from "./Shimmer";




export interface CardType {
  url:string;
  author:string;
  title:string;
}

const ShimmerContainner = () => {

  const [isCards,setCards]=useState<CardType[]|[]>([])
  
  
  useEffect(()=>{

    async function fetchData(){

      const jsonData=await fetch('https://meme-api.com/gimme/wholesomememes/20')
      const data=await jsonData.json();

      if(data.memes){

        let refactorData:CardType[]=data.memes.map((cur:any)=>(
          {
            url:cur.url,
            title:cur.title,
            author:cur.author,
          
          }
        ))

     
        setCards(refactorData)
  
      }



    }



    

    fetchData()

  },[])
  

  return (
    <div className="flex flex-wrap gap-4 justify-center  mx-auto">{
      isCards&&isCards.length?(
        isCards.map((card)=>{
          return (
               <ShimmerCards data={card} />
          )
        })
      ):(<>
     <SkeltonCards/>
      </>)
      }</div>
  )
}
export default ShimmerContainner