import IndexCard from "@/components/cards/IndexCard";
import TopArtist from "@/components/cards/TopArtist";
import { ChartOne} from "@/components/charts/ChartOne";
import ChartThree from "@/components/charts/ChartThree";
import ChartTwo from "@/components/charts/ChartTwo";
import { getArtist, getData, getIndexData, getRevenue, getTopSongs } from "@/lib/data";



export default async function Home() {

  
// Fetched all data in server for faster loading 
  const [indexData, chartOneData, artistData, revenueData,topSongsData] = await Promise.all([
    getIndexData(),
    getData(),
    getArtist(),
    getRevenue(),
    getTopSongs()
  ]);
    

  return (
    <div className="pt-3">
      <h1 className="pt-4 pb-7 text-xl lg:text-3xl font-medium">Welcome back , Admin</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className=" lg:basis-3/4 space-y-7">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {indexData.map((item,i)=>(
              <IndexCard key={i} data={item}/>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* pie chart to show revenuedata */}
            <ChartTwo revenue={revenueData}/>
              <div className="flex-grow ">
                {/* Bar chart to show the top 5 songs */}
              <ChartThree data={topSongsData}/>
              </div>
          </div>
         {/* Line chart to display revenue and user activity */}
          <ChartOne data={chartOneData}/>
        </div>
        <div className="pt-10 lg:pt-0 shrink-0 ps-4">
             
                <h5>Top 5 artists</h5>
                <div className="py-4 flex flex-col  h-full">
                  {artistData.slice(0,5).map((artist,i)=>(
                    <TopArtist key={i} data={artist}/>
                  ))}
                  
                  </div>
                  
        
        </div>
      </div>
    </div>
  );
}
