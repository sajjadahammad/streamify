import IndexCard from "@/components/cards/IndexCard";


export default async function Home() {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const response = await fetch(`${apiUrl}/indexdata`);
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
