import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

function Restaurants({ title }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  return (
    <section className="bg-[#F5FAFF] p-10">
      <div className="w-[80%] mx-auto">

        <div className="flex justify-between items-center">
          <h2 className="text-[#26395C] font-bold text-xl md:text-[32px] leading-[38px] mb-6 mt-6">{title}</h2>
          <Button
            variant="outline"
            radius="sm"
            size="lg"
            className="text-[#0E8BFF] text-sm lg:text-2xl leading-[38px] font-semibold"
          >
            See More
          </Button>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {data.map((myData) => (
            <div key={myData.id}>
              <img
                className="w-[400px] object-cover rounded-[18px] mb-[8px]"
                src={myData.img}
                alt=""
              />
              <h2 className="text-[#26395C] font-bold text-2xl leading-[34px] mb-2">{myData.title}</h2>
              <p className="text-[15px] leading-[15px] text-[#26395C] font-medium mb-2">{myData.des}</p>
              <p className="text-[15px] leading-[15px] text-[#26395C]">{myData.tags}</p>
              <Button color="primary" size="lg" radius="sm" className="font-bold text-sm lg:text-[15px] lg:leading-[16px] mt-4 mb-4">
                Reserve Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Restaurants;
