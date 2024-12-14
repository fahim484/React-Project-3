import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Contact() {
  const Items = [
    {
      img: "./Img/cart/Influencer.png",
      heading: "Become an Influencer",
      description:
        "Join a company that’s passionate about design and technology.",
      website: "hablu-programmer.com",
    },
    {
      img: "./Img/cart/help.png",
      heading: "Need help?",
      description:
        "Join a company that’s passionate about design and technology.",
      website: "hablu-programmer.com",
    },
    {
      img: "./Img/cart/refund.png",
      heading: "Refunds & Others",
      description:
        "Join a company that’s passionate about design and technology.",
      website: "hablu-programmer.com",
    },
  ];

  return (
    <section>
      <div className="lg:w-[70%] mx-auto">
        {/* main section */}
        <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
          {/* left side */}
          <div className="lg:w-1/2 w-full mb-20 md:pb-20 text-center lg:text-start">
            <h2 className="text-[42px] leading-[54px] font-bold text-[#26395C] mb-2 ">
              Contact Us
            </h2>
            <p className="w-[65%] text-[#656B89] text-base leading-[27px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc,
              quisque ultricies netus elit massa aliquam quis cras. Enim leo, in
              massa sapien facilisi netu.
            </p>

            <div className="text-[#26395C] mt-5 w-[50%] mx-auto lg:w-full lg:mx-0">
              <p className="flex gap-5 font-medium text-base leading-[18px] mb-[21px]">
                <img className="w-6 h-5" src="./Img/cart/phone.png" alt="" />{" "}
                <span>01816986263</span>{" "}
              </p>
              <p className="flex gap-5 font-medium text-base leading-[18px]">
                <img className="w-6 h-5" src="./Img/cart/email.png" alt="" />{" "}
                <span>habluprogrammer@gmail.com</span>{" "}
              </p>
            </div>
          </div>

          {/* right section  */}
          <div className="md:w-1/2 w-full bg-white py-12 px-[30px] rounded-3xl shadow-lg">
            <form className="space-y-8">
              <div className="flex flex-cols md:flex-row gap-4">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  labelPlacement="outside"
                />
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  labelPlacement="outside"
                />
              </div>

              <div className="flex flex-cols md:flex-row gap-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="habluprogrammer@gmail.com"
                  labelPlacement="outside"
                />
                <Input
                  label="Phone Number"
                  type="number"
                  placeholder="Phone Number"
                  labelPlacement="outside"
                />
              </div>

              <div className="!mt-14">
                <Select
                  label="Subject"
                  placeholder="Select an Option"
                  labelPlacement="outside"
                >
                  <SelectItem>Frontend Web development course</SelectItem>
                  <SelectItem>Full Stack Web development course</SelectItem>
                </Select>
              </div>

              <div className="!mt-6">
                <Textarea
                  isRequired
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  minRows={6}
                />
                <Button
                  color="primary"
                  className="w-full mt-[30px] text-white font-bold"
                  radius="sm"
                  size="lg"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* card section  */}
        <div className="mt-[100px] mb-[118px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Items.map((item, index) => (
              <div
                key={index}
                className="text-center justify-center items-center"
              >
                <img
                  className="w-[130px] h-[130px] object-cover rounded mb-5 mx-auto"
                  src={item.img}
                  alt=""
                />
                <h3 className="text-[22px] leading-[27px] font-bold text-[#26395C] mb-3">
                  {item.heading}
                </h3>
                <p className="text-[#656B89] text-base leading-[27px] mb-3 w-[60%] mx-auto">
                  {item.description}
                </p>
                <a
                  href={item.website}
                  className="text-[#0E8BFF] text-base leading-[27px] hover:underline cursor-pointer"
                >
                  {item.website}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="w-full bg-[#FBFCFF] p-24">
        <div className="lg:w-[60%] mx-auto">
          <h3 className="text-[#26395C] text-center font-bold text-3xl leading-[38px]">
            Frequently Asked Questions
          </h3>
          <p className="text-[#656B89] text-base leading-[27px] text-center lg:w-[50%] mx-auto mb-12 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc, purus est sem volutpat at at. Ultricies erat leo risus, eget venenatis tristique morbi.
          </p>
          <Accordion
            className="gap-6 font-semibold"
            variant="splitted"
            defaultExpandedKeys={["1"]}
          >
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Do you offer refunds for purchased products?"
              className="py-9 px-10 font-bold text-[#26395C]"
            >
              <p className="text-[#656B89] text-base leading-[27px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="How does Chillsbay work?"
              className="py-[35px] px-[33px] font-bold text-[#26395C]"
            >
              <p className="text-[#656B89] text-base leading-[27px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Can I pay with Crypto on Chillsbay.com? "
              className="py-[35px] px-[33px] font-bold text-[#26395C]"
            >
              <p className="text-[#656B89] text-base leading-[27px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title="How can I become a Chillsbay Host?"
              className="py-[35px] px-[33px] font-bold text-[#26395C]"
            >
              <p className="text-[#656B89] text-base leading-[27px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 5"
              className="py-[35px] px-[33px] font-bold text-[#26395C]"
              title="Can I pay with Crypto on Chillsbay.com? "
            >
              <p className="text-[#656B89] text-base leading-[27px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Contact;
