import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { css } from "@emotion/react";
import Link from "next/link";

const stories = [
  {
    name: "Rethinking React State",
    readingTimeMinutes: 6,
    date: "2019-01-28",
    link: "https://medium.com/@mjewell/rethinking-containers-and-presenters-82aa1a8a5a72",
    blurb:
      "Eventually some of your React components will get too complicated to easily maintain. When they do, it can be helpful to split them up into smaller parts...",
    img: {
      src: "/rethinking-react-state.png",
      width: 828,
      height: 505,
    },
  },
  {
    name: "Multi-Page Mobx",
    readingTimeMinutes: 4,
    date: "2018-07-02",
    link: "https://medium.com/@mjewell/multi-page-mobx-a5c6bff7cc54",
    blurb:
      "Mobx is very unopinionated about how you structure your app, which is ultimately a great thing, but it can be intimidating when you are building something bigger...",
    img: {
      src: "/medium.png",
      width: 483,
      height: 245,
    },
  },
  {
    name: "Pulling State out of React",
    readingTimeMinutes: 4,
    date: "2018-04-06",
    link: "https://medium.com/@mjewell/pulling-state-out-of-react-e01fa218bda3",
    blurb:
      "A pretty common pattern in React is to use container and presenter components...",
    img: {
      src: "/pulling-state-out-of-react.png",
      width: 483,
      height: 323,
    },
  },
  {
    name: "Maximizing Higher-Order Component Reusability",
    readingTimeMinutes: 2,
    date: "2017-11-02",
    link: "https://medium.com/@mjewell/maximizing-higher-order-component-reusability-289950410b83",
    blurb:
      "Much like regular React components are the core unit for sharing UI elements in an app, higher-order components are the core unit for sharing behavior...",
    img: {
      src: "/medium.png",
      width: 483,
      height: 245,
    },
  },
  {
    name: "Functional Composition of React Components",
    readingTimeMinutes: 6,
    date: "2017-03-27",
    link: "https://medium.com/@mjewell/functional-composition-of-react-components-527f6930a42",
    blurb:
      "Functional composition is a mechanism to build complex functions by combining multiple simpler functions...",
    img: {
      src: "/medium.png",
      width: 483,
      height: 245,
    },
  },
  {
    name: "Designing React Components for Modularity, Reusability, and Testability",
    readingTimeMinutes: 5,
    date: "2017-03-13",
    link: "https://medium.com/@mjewell/designing-react-components-for-modularity-reusability-and-testability-edf4a68147e9",
    blurb:
      "The single responsibility principle states that each component of a system should only do one thing. It’s a pretty widely accepted best practice, but it can be hard to follow at times...",
    img: {
      src: "/medium.png",
      width: 483,
      height: 245,
    },
  },
  {
    name: "formobx: Simple forms with MobX",
    readingTimeMinutes: 4,
    date: "2017-01-08",
    link: "https://medium.com/@mjewell/formobx-simple-forms-with-mobx-fe373e1e52b0",
    blurb:
      "Chances are, a lot of web development you do revolves around writing forms...",
    img: {
      src: "/medium.png",
      width: 483,
      height: 245,
    },
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Michael Jewell</title>
        <meta name="description" content="Michael Jewell's Personal Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        css={css`
          min-height: 100vh;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          flex: 1;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            margin-bottom: 4rem;
          `}
        >
          <div
            css={css`
              width: 6.9rem;
              height: 6.9rem;
            `}
          >
            <Image
              css={css`
                border-radius: 1rem;
              `}
              width={384}
              height={384}
              src="https://mjewell.github.io/static/media/mjewell.9d802493.jpg"
              alt="Photo of Michael Jewell"
            />
          </div>
          <div
            css={css`
              display: flex;
              flex: 1;
              flex-direction: column;
              justify-content: space-around;
              margin-left: 1rem;
            `}
          >
            <p
              css={css`
                margin: 0;
                font-size: 1.69rem;
              `}
            >
              Personal Blog by Michael Jewell
            </p>
            <p
              css={css`
                margin: 0;
                font-size: 1.2rem;
                color: #696969;
              `}
            >
              Thoughts on React, Typescript, and software engineering in general
            </p>
          </div>
        </div>
        {stories.map((story) => (
          <div key={story.name}>
            <hr />
            <div
              css={css`
                display: flex;
                flex-direction: row;
                margin: 2rem 0;
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                `}
              >
                <div
                  css={css`
                    width: 9rem;
                  `}
                >
                  <Image
                    width={story.img.width}
                    height={story.img.height}
                    src={story.img.src}
                    alt="Medium Logo"
                  />
                </div>
              </div>
              <div
                css={css`
                  margin-left: 1rem;
                  display: flex;
                  flex: 1;
                  flex-direction: column;
                  justify-content: space-between;
                `}
              >
                <Link href={story.link} passHref>
                  <h2
                    css={css`
                      font-size: 1.4rem;
                      margin: 0;
                      cursor: pointer;
                    `}
                  >
                    {story.name}
                  </h2>
                </Link>
                <p
                  css={css`
                    color: #696969;
                    margin: 0.5rem 0;
                  `}
                >
                  {story.blurb}
                </p>
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                  `}
                >
                  <p
                    css={css`
                      color: #696969;
                      margin: 0;
                    `}
                  >
                    {new Date(story.date).toLocaleDateString("en-US", {
                      timeZone: "UTC",
                    })}
                  </p>
                  <p
                    css={css`
                      color: #696969;
                      margin: 0;
                    `}
                  >
                    {story.readingTimeMinutes} minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
