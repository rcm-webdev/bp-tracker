import Example from "./ChartExample";

function Features() {
  return (
    <div className="bg-base-200 pb-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-12 text-center">
          Smart features. Smarter{" "}
          <span className="bg-primary rounded-2xl px-2">health</span>.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6">
          {/* First Card */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-3">
            <div className="card h-full bg-base-100 card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-[#109480]">Scan. Save. Done</h2>
                <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
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

          {/* Second Card */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-3">
            <div className="card h-full bg-base-100 card-xl shadow-sm">
              <div className="card-body">
                <div className="rounded-2xl">
                  <h1 className="font-bold text-center text-lg sm:text-xl">
                    📅 Weekly Report
                  </h1>
                  <Example />
                </div>
                <h2 className="card-title text-[#109480] mt-6">
                  See the bigger picture
                </h2>
                <p className="text-base sm:text-lg font-semibold">
                  Visualize your progress with smart charts and weekly insights.
                  Spot trends before they become issues.
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 row-span-3">
            <div className="card bg-base-100 card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-[#109480]">
                  Your data, your support.
                </h2>
                <p className="text-base sm:text-lg font-semibold">
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
