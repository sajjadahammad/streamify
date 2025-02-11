import StreamTable from "@/components/data-table/StreamTable"
import { getStreamingData } from "@/lib/data"

export default async function RecentStreams() {

    const streamingData =await getStreamingData()

    console.log('st',streamingData);
    return (
        <div>
            <h1 className='text-2xl font-semibold pt-5'>Stream List</h1>
            <div className="py-12 w-80 sm:w-[600px] md:w-full">
                <StreamTable data={streamingData}/>
            </div>
        </div>
    )
}
