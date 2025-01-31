import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-xl bg-white p-4  flex-1 min-w-[150px]">
      <div className="text-left md:table-cell">

         <div className="flex items-center gap-2 p-1">
            <Image
              // src={`${type}.png` : "/bioms-logo.png"}
              src={ "/bioms-logo.png"}
              alt=""
              width={40}
              height={40}
              className=" xl:block w-10 h-10 rounded-xl object-cover"
              />
            <div className="flex flex-col justify-between">
              <h3 className="font-semibold">{type}</h3>
              <p className="text-xs text-gray-500">Total</p>
             
            </div>
            <div className="items-center flex-1">
              
              <h1 className="font-semibold text-green-500 ">80 <span className="text-red-400">%</span></h1>
           
            </div>
          </div>
       

              
        </div>
    </div>

    // <div className="grid grid-cols-4 gap-4 mt-6">
  
    //   <div  className="bg-white rounded-lg shadow p-4">
    //     <div className="flex items-center space-x-4">
    //       <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
    //         <span className="text-xl font-semibold">0</span>
    //       </div>
    //       <div>
    //         <h2 className="text-lg font-semibold">{type}</h2>
    //       </div>
    //     </div>
    //   </div>
  
  // </div>
    );
};

export default UserCard;
