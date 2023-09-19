import BaseHTML from "../components/base";
import * as elements from "typed-html";

const Home = () => {
  return (
    <BaseHTML>
      <main class="flex min-h-screen flex-col items-center p-8 text-white bg-gradient-to-b from-[#A50010] to-[#A3343F]">
        <div class="w-full flex flex-row justify-right">
          <div id="user-button" />
        </div>

        <div id="auth-links" class="text-right text-lg w-full">
          <button
            class="pr-4 hover:scale-110 transition-transform"
            onclick="Clerk.openSignUp()"
          >
            Sign Up
          </button>
          <button
            class="hover:scale-110 transition-transform"
            onclick="Clerk.openSignIn()"
          >
            Sign In
          </button>
        </div>

        <img
          class="w-12 h-12"
          src="/public/assets/img/jvnews.png"
          alt="JVNews"
        />

        <div id="no-frontend-api-warning" hidden>
          <h3>No Frontend API found</h3>
          <h4>
            Add it to the top of <code>src/script.js</code>.
          </h4>
        </div>

        <script
          src="public/scripts/clerk.js"
          async
          crossorigin="anonymous"
        ></script>
      </main>
    </BaseHTML>
  );
};

export default Home;
