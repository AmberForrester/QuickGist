<a id="readme-top"></a>

<h1 align="center">QuickGist | OpenAI Article Summarizer :mechanical_arm::brain:</h1> 

<div align="center">

<img src="/src/assets/QuickGist.png" alt="Picture of QuickGist an open-source summarizer that converts lengthy articles into clear and concise insights.">

<p align="center">QuickGist makes reading smarter and faster by delivering essential insights from lengthy articles. This open-source summarizer leverages AI to condense information into concise summaries, giving you the core takeaways at a glance.
<br/>
<br/>
With QuickGist, deep-dive into knowledge or skim for key points effortlessly, keeping your reading efficient and impactful.
<br />
<br />
<a href="https://quickgist.amberforrester.io">QuickGist Live Link</a>
<br />
<br />

<a href="https://github.com/AmberForrester/QuickGist"><strong>Source Code »</strong></a>
<br />
<br />
<br />
<br />
<a href="https://github.com/AmberForrester/QuickGist/issues/new?assignees=&labels=bug&projects=&template=bug-report-%F0%9F%90%9E.md&title=">Report Bug</a>
.
<a href="https://github.com/AmberForrester/QuickGist/issues/new?assignees=&labels=enhancement&projects=&template=feature-request-%F0%9F%9A%80.md&title=">Request Feature</a>
</p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#steps-to-install">Steps to Install</a></li>
    <li><a href="#how-to-run-the-application">How to Run the Application</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />



## Features
- **Modern User Interface:** Enjoy a sleek and intuitive design that prioritizes user experience, making navigation and interaction seamless.
- **AI-Powered Summary Generation:** Quickly summarize lengthy articles by simply pasting the URL. The app uses OpenAI's GPT-4 to generate concise, insightful summaries that capture the essence of the content.
- **Local History Management:** Automatically saves summaries in your local storage, allowing you to access and manage your reading history effortlessly. 
- **Quick Copy to Clipboard:** Copy summaries to your clipboard for sharing or storing, creating easily access to your summarized content.
- **Delete Functionality:** Keep your history organized by deleting individual summaries with a single click, using an intuitive close icon.
- **Optimized API Requests with RTK Query:** Leverage Redux Toolkit (RTK) Query for efficient, conditional API requests that only fire when needed, optimizing data retrieval and app performance.

...and much more, including well structured code architecture and high resuability for seamless feature expansion! 

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Installation

### Prerequisites
- **React.js:** [React](https://react.dev/learn/start-a-new-react-project).
- **Vite:** [Vite](https://vite.dev/guide/)
- **Redux Toolkit:** [Redux Toolkit Store](https://redux-toolkit.js.org/api/configureStore)
- **Tailwind CSS:** [Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
- **Rapid API Account:** [Rapid API](https://rapidapi.com/) Create an account to receive your Rapid API Key needed for this project.



### Steps to Install

Set up the project locally on your machine by following these steps. 
Keep in mind, they are specific to using Windows.

1. **Clone the Repository:**
  ```bash
  git clone https://github.com/AmberForrester/QuickGist
  ```

2. **Navigate to the project directory:**
  ```bash
  cd QuickGist
  ```

3. **Install Required Dependencies:** 

Run the following command to install the project dependencies using npm:
  ```bash
  npm install
  ```

4. **Set Up Environment Variables:**

Create a new file named `.env` in the root of your project directory and add the following:
   ```bash
   VITE_RAPID_API_ARTICLE_KEY=your_rapid_api_key
   ```

Use the key provided after creating your account with [Rapid API](https://rapidapi.com/). 

5. **Add `.env` to `.gitignore`**

> [!CAUTION]
> To ensure your sensitive information does not get committed to version control:
  - Open (or create) the `.gitignore` file in the root directory.
  - Add the following line to the file:
   ```
   .env
   ```

This step will prevent the `.env` file from being tracked by Git and keep your sensitive credentials secure. 

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### How to Run the Application

1. Open your terminal in the project directory and run the following command: 
   ```bash
   npm run dev
   ```

2. Paste `http://localhost:5173` in your browser to view the project.



### Contributing

I have learned that contributions are the heart of what makes the open source community such an amazing place! We are constantly able to learn, grow, inspire eachother, and create incredible things. Any contributions you make are **greatly appreciated**, we are so lucky to be here together.

If you have a suggestion that would make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please, don't forget to give the project a :star:! 

I appreciate you!

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### Acknowledgments

Please take some time to check out the links below! I found value in each and every one of them while creating this project, so my hope is that you will to!

* [AI Application](https://youtu.be/vpvtZZi5ZWk?si=-LBo_eWYiC6Eet0M) - Special thank you to _JavaScript Mastery_ for the tutorial!
* [React Icons - Installation ](https://www.npmjs.com/package/react-icons)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Rapid API - Article Extractor and Summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Basic Syntax: Markdown Guide](https://www.markdownguide.org/basic-syntax/#reference-style-links)
* [Formatting Syntax: GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#animal-bug)

<p align="right">(<a href="#readme-top">top of page</a>)</p>