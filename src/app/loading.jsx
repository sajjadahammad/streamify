
export default function loading() {
  return (
    <div className="pt-3 animate-pulse"> 
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:basis-3/4 space-y-7">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => ( 
              <div key={i} className="bg-gray-200 rounded-lg h-32"></div> 
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="bg-gray-200 rounded-lg h-64 w-full lg:w-1/2"></div> 
            <div className="flex-grow bg-gray-200 rounded-lg h-64"></div>      
          </div>
        </div>
        <div className="pt-10 lg:pt-0 shrink-0 ps-4">
          <h5>Top 5 artists</h5>
          <div className="py-4 flex flex-col h-full">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-16 mb-2"></div> 
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
