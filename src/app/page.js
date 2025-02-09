import IndexCard from "@/components/cards/IndexCard";


export default async function Home() {

  
    const response = await fetch('http://localhost:5000/indexdata');
    const data = await response.json();


  return (
    <div className="pt-3">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item,i)=>(
          <IndexCard key={i} data={item}/>
        ))}

      </div>
      
    </div>
  );
}
