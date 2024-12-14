import { Button, cn } from "@nextui-org/react";

const footerData = {
  socialIcons: [
    "Img/home/footer/fb.png",
    "Img/home/footer/Twitter.png",
    "Img/home/footer/Instagram.png",
    "Img/home/footer/linkdin.png",
    "Img/home/footer/yt.png",
    "Img/home/footer/tiktok.png",
  ],

  sections: [
    {
      title: "Menu",
      menus: [
        { items: ["Home", "Eat", "Drink", "Events", "Club"] },
        { items: ["Blog", "Careers", "Contact", "FAQs"] },
      ],
    },
    {
      title: "Utility Pages",
      menus: [
        {
          items: [
            "Start Here",
            "Pay with Crypto",
            "Style Guide",
            "Password Protected",
            "404 Not Found",
          ],
        },
      ],
    },
  ],

  partnerSection: {
    image: "Img/home/footer/partner.png",
    title: "Become a Partner",
    description:
      "Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
  },

  logo: "/Img/main-logo.png",
  copyright: `© ${new Date().getFullYear()} All rights reserved.`,
};

const MenuSection = ({ title, menus, isDark }) => {
  return (
    <div>
      <p className={cn("text-[#26395C] font-bold text-base leading-[18px] border-b-1 border-[#E4E7EC] mb-5 py-3", isDark && "text-[#FFFFFF]")}>{title}</p>
      <div className="flex gap-10">
        {menus.map((menu, index) => (
          <ul key={index}>
            {menu.items.map((item, idx) => (
              <li key={idx} className={cn("mb-4 text-[#656B89] text-base leading-[27px] cursor-pointer", isDark && "text-[#E4E7EC]")}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ isDark }) => {
  const { socialIcons, sections, partnerSection, logo, copyright } = footerData; // Destructuring

  return (
    <footer className="p-12">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">

        {/* left side */}
        <div className="col-span-1">
          <img className="w-fit" src={logo} alt="Footer Logo" />
          <p className={cn("text-[#26395C] text-[15px] leading-6 mb-4", isDark && "text-[#969DAA]")}>{copyright}</p>
          <div className="flex space-x-5">
            {socialIcons.map((icon, index) => (
              <a href="#" key={index} className="gap-4">
                <img className="w-4 h-4" src={icon} alt="Footer Icon" />
              </a>
            ))}
          </div>
        </div>

        {/* right side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 ms-auto col-span-3">
          {sections.map((section, index) => (
            <MenuSection
              key={index}
              isDark={isDark}
              title={section.title}
              menus={section.menus}
            />
          ))}

          <div className={cn("w-full bg-[#F5FAFF] py-[30px] px-6", isDark && "bg-[#D0D8E7]/10")}>
            <img className="mb-4" src={partnerSection.image} alt="" />
            <h3 className={cn("text-[22px] leading-[27px] text-[#26395C] font-bold", isDark && "text-white")}>
              {partnerSection.title}
            </h3>
            <p className={cn("text-base leading-[27px] text-[#656B89] mt-3 mb-6", isDark && "text-[#969DAA]")}>
              {partnerSection.description}
            </p>
            <Button color="primary" className="w-full font-bold text-[15px] leading-4" size="xl">
              Join Now
            </Button>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
