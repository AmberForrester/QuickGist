import { logo } from "../assets";

const Hero = () => {
  return (
    <header className=" w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-2">
        <img src={logo} alt="QuickGist Logo" className="w-56 h-auto object-contain" />

        <button
          type="button"
          onClick={() => {
            window.open('https://github.com/AmberForrester/QuickGist')
          }}
          className="black_btn">
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
          Simplify your reading with QuickGist, an open-source summarizer that converts lengthy articles into clear and concise insights.
      </h2>
    </header>
  );
};

export default Hero;