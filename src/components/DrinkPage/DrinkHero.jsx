import React from "react";
import { Button } from '@nextui-org/react'

function DrinkHero() {
  return (
    <section className='bg-[url("./Img/drink/eat-and-drink-hero-bg.png")] w-full h-[70vh] bg-no-repeat bg-top md:bg-cover overflow-hidden mx-auto'>
      <div className="flex flex-col justify-start items-center lg:items-start lg:py-[100px] p-4 pt-6 w-[80%] mx-auto">
        <div className="bg-[#FBFCFF] container w-full max-w-[330px] md:max-w-[600px] rounded-lg p-[18px] md:py-[30px] md:px-8">
          <h1 className="text-[#26395C] text-2xl lg:text-[42px] lg:leading-[37px] font-bold pb-3.5 lg:pb-6">
            Our top pick for the week!
          </h1>
          <h4 className="text-[#26395C] font-bold text-lg lg:text-[32px] lg:leading-[38px]">Nok by Alara</h4>
          <p className="text-[#26395C] text-xl leading-[30px] w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor .
          </p>

          <div className="flex justify-end items-center">
            <Button color="primary" size="lg" radius="sm"  className="font-bold text-[15px] leading-[16px]"> Reserve Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DrinkHero;
