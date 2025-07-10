import Header from "./section/header";
import Footer from "./section/footer";
import background from "../app/asset/svg/mask.svg";
import Hero from "./section/hero";
import Main from "./section/main";

export default function Home() {
  return (
    <div className="bg-[#111]">
           
      <section
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
   <Header />
        <Hero />
      </section>

      <Main />
      <Footer />
    </div>
  );
}
