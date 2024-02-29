import Cover from "@/components/homePage/cover";
import ProExp from "@/components/homePage/proExp";
import "./styles.css";
import Studies from "@/components/homePage/stud";
import Contact from "@/components/homePage/contact";

export default function Home() {
  return (
    <>
      <Cover />
      <ProExp />
      <Studies />
      <Contact />
    </>
  );
}

