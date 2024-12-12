type Complaint = {
    complain_id: number;
    consignment_id: number;
    created_time: string;
    message: string | null;
    delayed_time: string;
  };
  
  interface IComplaintTable {
    complaints?: Complaint[];
    onComplaintClick?: (id: number) => void;
  }
  
  export function ServerComplaintTable({
    complaints = [],
    onComplaintClick,
  }: IComplaintTable) {
    return (
      <div className="bg-white p-4">
        {complaints.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-gray-500 text-lg font-semibold">
            No complaints present.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[3fr] gap-4">
            {complaints.map((item) => (
              <div
                key={item.complain_id}
                onClick={() => onComplaintClick?.(item.complain_id)}
                className="cursor-pointer p-3 bg-gray-100 rounded-md shadow hover:bg-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-sm font-bold text-gray-900">
                    Complaint ID: CD{item.complain_id}
                  </h1>
                  <span className="text-gray-500 text-sm">
                    {new Date(item.created_time).toLocaleDateString()}
                  </span>
                </div>
  
                <p className="text-sm text-gray-700 mb-3">
                  {item.message ?? "No message provided."}
                </p>
  
                <div className="flex justify-between items-center">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-blue-400"
                  >
                    Delayed Time: {item.delayed_time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  