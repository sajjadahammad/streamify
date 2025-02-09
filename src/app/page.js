import IndexCard from "@/components/cards/IndexCard";
import TopArtist from "@/components/cards/TopArtist";
import { ChartOne} from "@/components/charts/ChartOne";
import ChartTwo from "@/components/charts/ChartTwo";
import { apiUrl, getArtist, getData } from "@/lib/data";



export default async function Home() {

    const response = await fetch(`${apiUrl}/indexdata`);
    const data = await response.json();
    const chartOneData = await getData()
    const artistData = await getArtist()
    

  return (
    <div className="pt-3">
      <div className="flex gap-4">
        <div className="basis-2/3 space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((item,i)=>(
              <IndexCard key={i} data={item}/>
            ))}
          </div>
          <div className="h-60">
            <ChartOne data={chartOneData}/>
          </div>
        </div>
        <div className="basis 1/3 shrink-0 ps-4">
              <div>
                <h5>Popular artists</h5>
                <div className="py-4 space-y-5">
                  {artistData.map((artist,i)=>(
                    <TopArtist key={i} data={artist}/>
                  ))}
                  
                  </div>
                  <ChartTwo/>
              </div>
        </div>
      </div>
    </div>
  );
}
