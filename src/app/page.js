import Header from "./section/header";
import Footer from "./section/footer";
import background from "../app/asset/svg/mask.svg";
import Hero from "./section/hero";
import Main from "./section/main";

export default function Home() {
  return (
    <div className="w-full">
           
      <section
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full"
      >
   <Header />
        <Hero />
      </section>

      <Main />
      <Footer />
    </div>
  );
}
