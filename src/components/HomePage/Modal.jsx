import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { UserIcon } from "@heroicons/react/24/outline";

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const HandleClose = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div className="flex flex-wrap gap-3">
        <Button variant="light" size="md" radius="sm" onPress={handleOpen}>
          <UserIcon className="text-gray-500 w-4 h-4" />
          Account
        </Button>
      </div>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={HandleClose}
        size="5xl"
        placement="top"
      >
        <ModalContent>
          <ModalBody className="px-0 py-0 rounded-xl">
            <div className="flex flex-col md:flex-row w-full h-full md:max-h-[90vh] overflow-y-auto md:overflow-visible">
              {/* left side  */}
              <div className='bg-[url("/Img/home/modal/Log-in-Img.png")] bg-cover bg-no-repeat bg-center flex flex-col text-white w-full md:w-1/3 p-10'>
                <h3 className="text-5xl leading-[63.5px] font-extrabold mb-[30px] mt-[54px]">
                  Sign Up
                </h3>
                <p className="text-[15px] leading-[19.85px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tellus ullamcorper hendrerit quis purus pellentesque. Ac
                  sagittis, convallis non tincidunt interdum eu nullam aliquam
                  maecenas. Enim sed tortor morbi ut suspendisse.{" "}
                </p>
              </div>

              {/* right side  */}

              <div className="w-full md:w-2/3 p-[50px] bg-white">
                <div>
                  <img
                    className="w-fit mx-auto"
                    src="/Img/main-logo.png"
                    alt="Main Logo"
                  />
                  <h2 className="text-[#26395C] text-[32px] leading-[42.34px] font-bold mb-2 mt-[29.65px]">
                    Sign up and get exploring!
                  </h2>
                  <p className="text-[15px] leading-[19.85px] text-[#26395C] font-medium mb-5">
                    Already have an account?{" "}
                    <a href="#" className="text-[#0E8BFF] font-bold">
                      Sign In
                    </a>
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <button className="flex items-center justify-center w-full px-4 py-3 border border-[#0E8BFF] rounded-lg hover:bg-gray-100 text-[#26395C] text-[15px] leading-[16px] font-bold">
                    <img
                      className="w-5 h-5 mr-2"
                      src="/Img/home/modal/google.png"
                      alt=""
                    />
                    Sign Up with Google
                  </button>

                  <button className="flex items-center justify-center w-full px-4 py-3 border border-[#0E8BFF] rounded-lg hover:bg-gray-100 text-[#26395C] text-[15px] leading-[16px] font-bold">
                    <img
                      className="w-5 h-5 mr-2"
                      src="/Img/home/modal/facebook.png"
                      alt=""
                    />
                    Sign Up with Facebook
                  </button>

                  <button className="flex items-center justify-center w-full px-4 py-3 border border-[#0E8BFF] rounded-lg hover:bg-gray-100 text-[#26395C] text-[15px] leading-[16px] font-bold">
                    <img
                      className="w-5 h-5 mr-2"
                      src="/Img/home/modal/apple.png"
                      alt=""
                    />
                    Sign Up with Apple
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center my-6 text-center ">
                  <div className="flex-grow border-t border-[#E4E7EC]"></div>
                  <span className="px-[13px] text-[#26395C] font-medium text-[15px] leading-[19.85px]">
                    or continue with
                  </span>
                  <div className="flex-grow border-t border-[#E4E7EC]"></div>
                </div>

                {/* Manual Signup Form */}
                <form action="" className="mt-10">
                  <div className="mb-[15px]">
                    <Input
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      labelPlacement="outside"
                      className="mb-5"
                    />
                  </div>

                  <div className="mb-8 mt-12">
                    <Input
                      type="password"
                      label="Password"
                      placeholder="Enter your password"
                      labelPlacement="outside"
                    />
                  </div>

                  <button className="w-full bg-[#0E8BFF] text-base leading-4 font-bold text-white py-3 rounded-xl">
                    Sign Up
                  </button>

                  <p className="text-[#26395C] text-[12px] leading-[19px] mt-3 text-center"> 
                  By creating an account, you agree to our <a href="#" className="text-[#0E8BFF]">Terms & Conditions</a> and <a href="#" className="text-[#0E8BFF]">Privacy Policy</a>.
                  </p>

                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}

export default MyModal;
