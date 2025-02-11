export const baseUrl = 'https://streamify-puce.vercel.app/'
// export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export async function getIndexData(){
  try {
    const response = await fetch(`${baseUrl}/api/index-data`);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error fetching index data:", error);
    return [];
  }
}

export async function getData() {
    try {
      const [usersRes, revenueRes] = await Promise.all([
        fetch(`${baseUrl}/api/users`),
        fetch(`${baseUrl}/api/revenue`),
      ]);
  
      if (!usersRes.ok || !revenueRes.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const usersData = await usersRes.json();
      const revenueData = await revenueRes.json();
  
      const userGrowthData = usersData.growthData || [];
      const revenueTrend = revenueData.monthlyTrend || [];
  
      const chartData = userGrowthData.map((user) => {
        const revenueMatch = revenueTrend.find((rev) => rev.month === user.month);
        return {
          month: user.month,
          users: user.totalUsers,
          revenue: revenueMatch ? revenueMatch.amount : 0,
        };
      });
  
      return chartData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  
  export async function getArtist() {
    try {
      const res = await fetch(`${baseUrl}/api/artists`);
      const data = await res.json();
      return data.popularArtists;
    } catch (error) {
      console.error("Error fetching artist data:", error);
      return [];
    }
  }

  export async function getRevenue() {
    try {
      const res = await fetch(`${baseUrl}/api/revenue`);
      const data = await res.json();
      return data
    } catch (error) {
      console.error("Error fetching artist data:", error);
      return [];
    }
  }


  export async function getTopSongs() {
    try {
      const res = await fetch(`${baseUrl}/api/top-songs`);
      const data = await res.json();
      return data
    } catch (error) {
      console.error("Error fetching artist data:", error);
      return [];
    }
  }

  export async function getStreamingData() {
    try {
      const res = await fetch(`${baseUrl}/api/streaming`);
      const data = await res.json();
      return data
    } catch (error) {
      console.error("Error fetching artist data:", error);
      return [];
    }
  }