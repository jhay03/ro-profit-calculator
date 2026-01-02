import Footer from "components/src/footer/footer";
import Navbar from "components/src/navbar/navbar";
import TypingText from "components/src/typing-text/typing-text";
import { AddData } from "components/src/forms/add-data";

export default function Home() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="add-data mt-5 mx-5 flex justify-end">
        <AddData />
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <TypingText />
      </div>
      <Footer />
    </div>
  );
}
