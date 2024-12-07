function GALLERY() {
    const Gallery = [
      {
        img: "Img/home/gallery/g-1.png",
      },
      {
        img: "Img/home/gallery/g-2.png",
      },
      {
        img: "Img/home/gallery/g-3.png",
      },
      {
        img: "Img/home/gallery/g-4.png",
      },
      {
        img: "Img/home/gallery/g-5.png",
      },
      {
        img: "Img/home/gallery/g-6.png",
      },
    ];
  
    return (
      <section className="border p-10 mb-10">
        <div className="container mx-auto">
          <h3 className="text-[#26395C] text-3xl font-bold text-center lg:text-start">
            See what people are experiencing with{" "}
            <span className="text-[#0E8BFF]">Chillsbay</span>
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 mt-8">
            {Gallery.map((source, i) => (
              <div className="mt-5" key={i}>
                <img
                  className="w-full object-cover h-full"
                  src={source.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // eslint-disable-next-line react-refresh/only-export-components
  export default GALLERY;