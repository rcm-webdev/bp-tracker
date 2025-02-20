function Features() {
  return (
    <div className="bg-base-200 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl font-bold mb-12">
          Smart features. Smarter{" "}
          <span className="bg-primary rounded-2xl px-2">health</span>.
        </h2>
        <div className="grid grid-cols-4 grid-rows-4 gap-4  min-h-screen">
          <div className="col-span-2 row-span-3">
            <div className="card h-full bg-base-100 card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-[#109480]">Scan. Save. Done</h2>
                <p className="text-lg font-semibold mb-6">
                  Snap a photo of your blood pressure reading — our AI reads and
                  logs it instantly. No typing, no hassle.
                </p>
                <div className="mockup-phone border-base-200 shadow-lg h-[30rem]">
                  <div className="mockup-phone-camera"></div>
                  <div className="mockup-phone-display">
                    <img
                      alt="wallpaper"
                      src="https://img.daisyui.com/images/stock/453966.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-3 col-start-3">
            <div className="card h-full bg-base-100 card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-[#109480]">
                  See the bigger picture
                </h2>
                <p className="text-lg font-semibold">
                  Visualize your progress with smart charts and weekly insights.
                  Spot trends before they become issues.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 row-span-3">
            <div className="card bg-base-100 card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-[#109480]">
                  Your data, your support.
                </h2>
                <p className="text-lg font-semibold">
                  Easily share your readings with doctors, family, or care teams
                  — securely and on your terms.
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
