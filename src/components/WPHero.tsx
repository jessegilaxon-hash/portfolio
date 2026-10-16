// import Hyperlink from "./Hyperlink/Hyperlink";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-around min-h text-center pt-2 bg-blue-50 m-5 font-sans">
      <div className="flex w-full max-w-4xl items-center justify-center gap-4">
        <img
          src="/magnific_image_1.svg"
          alt="Company employees using web search"
          className="h-auto w-1/2 max-w-md opacity-55"
        />
        <img
          src="/magnific_image_2.svg"
          alt="Financial consultant explaining financial literacy"
          className="h-auto w-1/2 max-w-md right-14 opacity-55"
        />
      </div>
      <div className="max-w-3xl mx-auto m-5">
        <h1 className="flex flex-col m-5 ">
          <span className="uppercase m-5 text-gray-500">
            Managed Hosting & Beyond
          </span>{" "}
          <span className="text-4xl m-5 font-times">
            Intelligent platforms built for your digital future
          </span>
        </h1>
        <p className="text-center m-8">
          Powering 5 million websites, WP Engine brings together enterprise-grad
          software, managed hosting, developer tools, and cutting-edge AI across
          its ecosystem to help sites get found, gain attention, and convert.
        </p>
        <div className="m-5">
          <a
            className="m-2 rounded-full py-2 px-4 bg-blue-500 text-white"
            href="https://examle.com"
          >
            Plans & Pricing
          </a>
          <a
            className="m-2 rounded-full py-2 px-4 outline-black outline-2"
            href="https://example.com"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
