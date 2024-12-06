import Image from "next/image";
import GradientLine from "./GradientLine";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-xl bg-white p-4  flex-1 min-w-[150px]">
      <div className="text-left md:table-cell">

      <div className="flex items-center gap-2 p-4">
        <div className="flex flex-col items-center ">
              <h3 className="font-semibold">{type}</h3>
             
              <GradientLine />
                  
              <ul className="text-left list-none">
              <li className="relative pl-4">

                
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 rounded-full h-2 w-2"></span>
                Item 1
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 rounded-full h-2 w-2"></span>
                Item 2
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full h-2 w-2"></span>
                Item 3
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full h-2 w-2"></span>
                Item 3
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full h-2 w-2"></span>
                Item 3
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full h-2 w-2"></span>
                Item 3
              </li>
            </ul>
            </div>
    
          </div>

              
        </div>
    </div>

    );
};

export default UserCard;
