import { readDB } from "@/lib/db";
import { NextResponse } from 'next/server';
import { errorHandler } from "@/utils/error-handler";

export async function GET() {
    try {
      const data = await readDB();
      
      const allSongs = data.artists.popularArtists.flatMap(artist => 
        artist.songs.map(song => ({
          ...song,
          artistName: artist.name
        }))
      );
  
      const topSongs = allSongs
        .sort((a, b) => b.streams - a.streams)
        .slice(0, 5)
        .map(song => ({
          name: song.name,
          artistName: song.artistName,
          streams: song.streams,
        }));
  
      return NextResponse.json(topSongs);
    } catch (error) {
      return errorHandler(error);
    }
  }