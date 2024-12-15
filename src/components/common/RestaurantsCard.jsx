import { useState, useEffect } from "react";
import { Button, cn } from "@nextui-org/react";

const Restaurants = ({ title, isDark, api }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      });
  }, [api]);

  return (
    <section className={cn("bg-[#F5FAFF] p-10", isDark && "bg-black text-white")}>
      <div className="w-[80%] mx-auto">

        <div className="flex justify-between items-center">
          <h2 className={cn("text-[#26395C] font-bold text-xl md:text-[32px] leading-[38px] mb-6 mt-6", isDark && "text-white")}>{title}</h2>
          <Button
            variant="outline"
            radius="sm"
            size="lg"
            className={cn("text-[#0E8BFF] text-sm lg:text-2xl leading-[38px] font-semibold", isDark && "text-white")}
          >
            See More
          </Button>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {data.map((myData) => (
            <div key={myData.id} className="relative">
              {isDark && (
                <Button
                  className="text-[#26395C] bg-white absolute top-2.5 lg:top-4 right-2.5 lg:right-4 font-bold"
                  size="md"
                >
                  {myData.date}
                </Button>
              )}
              <img
                className="w-[400px] object-cover rounded-[18px] mb-[8px]"
                src={myData.img}
                alt=""
              />
              <h2 className={cn("text-[#26395C] font-bold text-2xl leading-[34px] mb-2", isDark && "text-white")}>{myData.title}</h2>
              <p className={cn("text-[15px] leading-[15px] text-[#26395C] font-medium mb-2", isDark && "text-slate-100")}>{myData.des}</p>
              <p className={cn("text-[15px] leading-[15px] text-[#26395C]", isDark && "text-slate-100")}>{myData.tags}</p>
              <Button color="primary" size="lg" radius="sm" className="font-bold text-sm lg:text-[15px] lg:leading-[16px] mt-4 mb-4">
              {isDark ? "Book  Now" : "Reserve Now"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Restaurants;
