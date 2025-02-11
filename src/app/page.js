import IndexCard from "@/components/cards/IndexCard";
import TopArtist from "@/components/cards/TopArtist";
import { ChartOne} from "@/components/charts/ChartOne";
import ChartTwo from "@/components/charts/ChartTwo";
import { apiUrl, getArtist, getData, getIndexData, getRevenue } from "@/lib/data";



export default async function Home() {

  

    const indexData = await getIndexData()
    const chartOneData = await getData()
    const artistData = await getArtist()
    const revenueData = await getRevenue()
    

  return (
    <div className="pt-3">
      <div className="flex gap-4">
        <div className="basis-3/4 space-y-7">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {indexData.map((item,i)=>(
              <IndexCard key={i} data={item}/>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            <ChartTwo revenue={revenueData}/>
              <div className="flex-grow ">
                <ChartOne data={chartOneData}/>
              </div>
          </div>
        </div>
        <div className=" shrink-0 ps-4">
             
                <h5>Popular artists</h5>
                <div className="py-4 flex flex-col justify-between h-full">
                  {artistData.map((artist,i)=>(
                    <TopArtist key={i} data={artist}/>
                  ))}
                  
                  </div>
                  
        
        </div>
      </div>
    </div>
  );
}
