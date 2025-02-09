import IndexCard from "@/components/cards/IndexCard";
import { Suspense } from "react";


export default async function Home() {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000' 
    const response = await fetch(`${apiUrl}/indexdata`);
    const data = await response.json();


  return (
    <div className="pt-3">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item,i)=>(
          <Suspense key={i} fallback={<p>loading</p>}>
          <IndexCard data={item}/>
          </Suspense>
        ))}

      </div>
      
    </div>
  );
}
