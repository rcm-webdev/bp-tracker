import Image from "next/image";
import Logo from "@/public/scan-heart.svg";
import LoginButton from "./LoginButton";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-5xl">
          <Image
            src={Logo}
            alt="logo"
            className="h-50 w-50 bg-base-100 shadow-lg rounded-3xl p-5 mx-auto mb-12"
          />
          <h1 className="text-8xl font-bold leading-30">
            Track your{" "}
            <span className="bg-secondary rounded-2xl px-2">pressure</span>.
            Take control.
          </h1>
          <p className="py-6 text-2xl max-w-3xl font-semibold mx-auto">
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
