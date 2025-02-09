export const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000' 

export async function getData() {
    try {
      const [usersRes, revenueRes] = await Promise.all([
        fetch(`${apiUrl}/users`, { cache: "no-store" }),
        fetch(`${apiUrl}/revenue`, { cache: "no-store" }),
      ]);
  
      if (!usersRes.ok || !revenueRes.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const usersData = await usersRes.json();
      const revenueData = await revenueRes.json();
  
      // Extract nested arrays correctly
      const userGrowthData = usersData.growthData || [];
      const revenueTrend = revenueData.monthlyTrend || [];
  
      // Combine user and revenue data
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
  
  export async function getArtist(){
    const res = await fetch(`${apiUrl}/artists`)
    const data =await res.json()

    return data.popularArtists
  }