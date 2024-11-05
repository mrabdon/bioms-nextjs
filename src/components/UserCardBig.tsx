import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-xl bg-white p-4  flex-1 min-w-[150px]">
      <div className="text-left md:table-cell">

         <div className="flex items-center gap-2 p-1">
            <Image
              src={"/line.png"}
              alt=""
              width={100}
              height={40}
              className=" xl:block w-10 h-10 rounded-xl object-cover"
              />
            <div className="flex flex-col justify-between">
              <h3 className="font-semibold">{type}</h3>
              <p className="text-xs text-gray-500">Total</p>
             
            </div>
            <div className="items-center flex-1">
              
              <h1 className="font-semibold">0</h1>
           
            </div>
          </div>
       

              
        </div>
    </div>

    );
};

export default UserCard;
