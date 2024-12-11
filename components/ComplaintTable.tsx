type Complaint = {
  complain_id: string;
  orderId: string;
  status: string;
  message: string;
  created_on: string;
};

interface IComplaintTable {
  complaints?: Complaint[];
}

export function ComplaintTable({ complaints = [] }: IComplaintTable) {
  return (
    <div className="bg-white p-4 ">
      {complaints.length === 0 ? (
        <div className="flex items-center justify-center h-32 text-gray-500 text-lg font-semibold">
          No complaints present.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[3fr] gap-4">
          {complaints.map((item) => (
            <div key={item.complain_id} className="">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-sm font-bold text-gray-900">
                  Complaint ID: CD{item.complain_id}
                </h1>
                <span className="text-gray-500 text-sm">
                  {new Date(item.created_on).toLocaleDateString()}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-3">{item.message}</p>

              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    item.status.toLowerCase() === "resolved"
                      ? "bg-green-400"
                      : "bg-red-400"
                  }`}
                >
                  {item.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
