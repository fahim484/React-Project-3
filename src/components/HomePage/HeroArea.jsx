import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";

function HeroArea() {
  return (
    <section className="bg-[url('/Img/hero-bg-img.png')] w-full min-h-[100vh] bg-no-repeat bg-cover overflow-hidden">
      <div className="container w-[80%] mx-auto mt-10">
        <h1 className="w-[full] lg:w-[50%] text-[#FFFFFF] text-3xl lg:text-[62px] lg:leading-[74.4px] font-bold pb-10 xl:py-10 xl:px-10 mt-10 leading-tight text-center lg:text-start">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        <div className="bg-[#FBFCFF] w-full h-auto lg:w-[750px] lg:h-[150px] py-10 px-10 xl:ms-10 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div>
              <Autocomplete
                defaultItems="Oshodi"
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                variant="bordered"
                color="dark"
                className="max-w-xs sm:max-w-full w-[100%]"
              >
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Oshodi
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem value="Stack Learner" className="text-black">
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <div>
              <Autocomplete
                defaultItems="Date"
                labelPlacement="outside"
                label="Date"
                placeholder="Date"
                variant="bordered"
                color="dark"
                className="max-w-xs sm:max-w-full w-[100%]"
              >
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Date
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem value="Stack Learner" className="text-black">
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <div>
              <Autocomplete
                defaultItems="Night Clubs"
                labelPlacement="outside"
                label="Activities"
                placeholder="Night Clubs"
                variant="bordered"
                color="dark"
                className="max-w-xs sm:max-w-full w-[100%] "
              >
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Night Clubs
                </AutocompleteItem>
                <AutocompleteItem
                  value="Hablu Programmer"
                  className="text-black"
                >
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem value="Stack Learner" className="text-black">
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <div>
              <Button className="bg-[#0E8BFF] text-[#FFFFFF] max-w-xs sm:max-w-full w-full p-8 mt-2">
                Search
              </Button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default HeroArea;
