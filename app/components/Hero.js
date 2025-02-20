import Image from "next/image";
import Logo from "@/public/scan-heart-2.svg";
import LoginButton from "./LoginButton";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Image
            src={Logo}
            alt="logo"
            className="h-40 w-40 sm:h-50 sm:w-50 bg-base-100 shadow-lg rounded-3xl p-5 mx-auto mb-8 sm:mb-12"
          />
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight sm:leading-snug lg:leading-30">
            Track your{" "}
            <span className="bg-secondary rounded-2xl px-2">pressure</span>.
            Take control.
          </h1>
          <p className="py-4 sm:py-6 text-lg sm:text-xl lg:text-2xl max-w-3xl font-semibold mx-auto">
            A simple, beautiful way to monitor your blood pressure, spot trends,
            and share progress with your doctor or loved ones.
          </p>
          <LoginButton size={"xl"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
