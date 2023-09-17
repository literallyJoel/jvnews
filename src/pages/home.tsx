import BaseHTML from "../components/base";
import * as elements from "typed-html";

const Home = () => {
  return (
    <BaseHTML>
      <main class="flex min-h-screen flex-col items-center p-8 text-white bg-gradient-to-b from-[#A50010] to-[#A3343F]">
        <span class="text-3xl">JVNews</span>
      </main>
    </BaseHTML>
  );
};

export default Home;
