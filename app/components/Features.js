function Features() {
  return (
    <div className="bg-base-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 grid-rows-7 gap-4">
          <div className="col-span-2 row-span-3  ">
            <div className="card bg-base-100 card-xl shadow-sm ">
              <div className="card-body ">
                <div className="mockup-phone border-base-200 h-[40rem] shadow-lg mb-6 ">
                  <div className="mockup-phone-camera"></div>
                  <div className="mockup-phone-display">
                    <img
                      alt="wallpaper"
                      src="https://img.daisyui.com/images/stock/453966.webp"
                    />
                  </div>
                </div>
                <h2 className="card-title text-[#049d8b]">Xlarge Card</h2>
                <p className="text-lg font-semibold">
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-3 col-start-3 ">
            <div className="card h-full  bg-base-100 card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-[#049d8b]">Xlarge Card</h2>
                <p className="text-lg font-semibold">
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 row-span-4 row-start-4">
            <div className="card  bg-base-100 card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-[#049d8b]">Xlarge Card</h2>
                <p className="text-lg font-semibold">
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
