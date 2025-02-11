import { Star } from "lucide-react";
import Image from "next/image";

export default function TopArtist({data}) {
    return (
        <div className="flex px-3 gap-7 border-dashed border-b-2 py-5">
            <div className="flex gap-2"><span className="font-geistBungee   text-5xl font-semibold shrink-0 w-8 self-center text-center">{data.id.slice(-1)}</span>
            <Image src={data.image} alt="" width={50} height={50} className="w-full rounded-md z-30 relative" />
            </div>
            <div className="self-center">
                <p className="font-medium mb-2">{data.name}</p>
                <p className="text-xs">AVG {data.averageRating} <Star className="inline" size={12}/></p>
            </div>
        </div>
    )
}
