import ArtistTable from '@/components/data-table/ArtistTable'
import { getArtist } from '@/lib/data'

export default async function TopArtists() {

  const artistData = await getArtist()

  return (
    <div>
      <h1 className='text-2xl font-semibold pt-5'>Artist List</h1>
      <div className="py-12 w-80 sm:w-[600px] md:w-full">
        <ArtistTable data={artistData} />
      </div>
    </div>
  )
}
