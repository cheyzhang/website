import React from 'react';

import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-pic">
        {/* <img
          src={require('../assets/meandtortoise.JPG')}
          alt="work please"
          width="200"
          height="200"
        /> */}
      </div>

      <div className="home-text">
        <h2>🤗 about me </h2>
        <hr />
        <p>
          hi! my name is cheyenne — avid{' '}
          <span className="lavender-text">world traveler</span> 🌎, soon-to-be{' '}
          <span className="blue-text">management consultant</span> in nyc 🏙️,
          former <span className="yellow-text">cs major</span> at princeton 🐯,
          forever <span className="green-text">seattleite</span> ⛰️.
        </p>
        <p>
          welcome to my little corner of the internet where i talk about{' '}
          <span className="bolded-text">travel, food, career</span>, and
          whatever other random thoughts cross my mind :)
        </p>
        <p className="italicized-text">
          other interests that i may or may not write about include: film, the
          asian-american experience, self-help books, health + fitness, and
          kpop!
        </p>
        <h2> 💫 currently </h2>
        <hr />
        <ul className="about-list">
          <li>
            {' '}
            enjoying my post-grad summer — alternating between traveling the
            world and spending precious time at home before moving to nyc to
            start work full time{' '}
            <ul>
              <li>
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
        <h2> 📩 connect with me! </h2>
        <hr />
        <p>
          would love to have you join my newsletter, a once-a-month combo of
          travel inspiration and tips, aesthetic food pics, and career advice —
          delivered straight to your inbox! plus, some extra special content
          only for those on the mailing list :o{' '}
        </p>
        <p>
          otherwise, you can find me on my{' '}
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
          for other content, i'm also occasionally on{' '}
          <a
            href="https://github.com/cheyzhang"
            className="bolded-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            github 💻
          </a>{' '}
          (peep the code for this website) and frequently on{' '}
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
