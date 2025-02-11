export default function Loading() {
    return (
        <div className="p-5">
            <h1 className="text-2xl font-semibold pt-5">Artist List</h1>
            <div className="pt-12">
                <div className="animate-pulse space-y-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="h-12 bg-gray-300 rounded-md"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
