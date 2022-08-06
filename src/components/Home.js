import React from 'react';

import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container flex flex-col mx-auto mb-10">
      <div className="rounded-full drop-shadow-2xl">
        <img
          src={require('../assets/me.JPG')}
          alt="work please"
          width="200"
          height="200"
          className="rounded-full drop-shadow-2xl home-pic shadow-outline"
        />
      </div>

      <div className="home-text">
        <h2 className="text-xl mb-2 font-bold">🤗 about me </h2>
        <hr />
        <p>
          hi! my name is cheyenne — soon-to-be{' '}
          <span className="blue-text">management consultant</span> in nyc 🏙️,
          former <span className="yellow-text">cs major</span> at princeton 🐯,
          born-and-raised <span className="green-text">seattleite</span> ⛰️.
        </p>
        <p>
          welcome to my little corner of the internet where i talk about career,
          self-improvement, life, and whatever other random thoughts cross my
          mind :)
        </p>
        <p className="italicized-text">
          other interests that i may or may not write about include: travel,
          food, film, the asian-american experience, health + fitness, and kpop!
        </p>
        <h2 className="text-xl mb-2 my-4 font-bold"> 💫 currently </h2>
        <hr />
        <ul className="about-list">
          <li>
            {' '}
            enjoying my post-grad summer — alternating between traveling the
            world and spending precious time at home before moving to nyc to
            start work full time{' '}
            <ul className="nested-list">
              <li className="nested-list-item">
                favorite destinations this year include: istanbul 🇹🇷, guayaquil
                🇪🇨, and busan 🇰🇷
              </li>
            </ul>
          </li>

          <li>
            reading:{' '}
            <a
              href="https://www.goodreads.com/book/show/40121378-atomic-habits"
              className="green-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              atomic habits{' '}
            </a>{' '}
            by james clear;{' '}
            <a
              href="https://www.goodreads.com/en/book/show/55871780-skinship"
              className="lavender-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              skinship{' '}
            </a>{' '}
            by yoon choi
          </li>

          <li>
            listening to:{' '}
            <a
              href="https://open.spotify.com/track/2FA4veLVh3jf7O8q5VhNh5?si=539029f87987471b"
              className="yellow-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              somebody!
            </a>{' '}
            by loco and hwasa, the ~perfect summer song~
          </li>

          <li>grinding duolingo italian 🇮🇹</li>

          <li>
            beating my dad in chess, albeit less frequently than in high school
            😔
          </li>
          <li>
            developing the website that you are currently reading! (this is a
            cry for help i am a react noob)
          </li>
        </ul>
        <h2 className="text-xl mb-2 my-4 font-bold"> 📩 contact </h2>
        <hr />
        <p>
          feel free to connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/cheyenne-zhang/"
            className="bolded-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          , follow me on{' '}
          <a
            href="https://github.com/cheyzhang"
            className="bolded-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          , or shoot me an{' '}
          <a
            href="mailto:cheyenne1318@outlook.com"
            className="bolded-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
          !
        </p>
        <p>
          for more fun content, you can find me on my{' '}
          <a
            href="https://instagram.com/cheyeatsfood"
            className="bolded-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            food/travel instagram
          </a>{' '}
          or{' '}
          <a
            href="https://letterboxd.com/chey13/"
            className="bolded-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            letterboxd 🎬
          </a>{' '}
        </p>
      </div>
    </div>
  );
};

export default Home;
