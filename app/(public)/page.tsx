import Agreements from "@/components/agreements";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Location from "@/components/location";
import Main from "@/components/main";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <div className="bg-(--color-emerald-400) rounded-b-[32px]">
        <Header />
        <Main />
      </div>
      <Services />
      <Agreements />
      <Location />
      <Footer />
    </div>
  );
}
