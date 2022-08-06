import React from 'react';

import '../styles/projects.css';

const Projects = () => {
  return (
    <div className="projects-container flex flex-col mx-auto mb-10">
      <div className="w-2/6 bg-white mb-16 p-3 border rounded-md border-gray-400 p-10">
        <p className="text-xl float-left">bilingual semantic networks</p>
        <p className="text-base float-right">2021-2022 </p>
        <p className="text-sm clear-both">
          Written as a Senior Thesis for the Princeton University Department of
          Computer Science —{' '}
          <span className="italic">
            "Apples, Xiang-jiao, and Naranjas: Category Semantic Networks in
            Bilinguals"
          </span>{' '}
          advised by Professor Adele Goldberg, Christiane Fellbaum, and Tom
          Griffiths. This work examines category semantic networks in
          English-Chinese and Spanish-English bilinguals; that is, the structure
          of how bilinguals store words in their "mental lexicon." We use
          methods from network theory to find evidence that suggests that no
          significant difference exists in the organization of a bilingual's
          first and second languages.
        </p>
        <img
          class="my-4 h-52 w-full object-cover"
          src={require('../assets/thesis_ex.png')}
        />
        <a
          href="https://dataspace.princeton.edu/handle/88435/dsp01mp48sc83w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="w-full mx-auto text-sm hover:bg-gray-100 border border-blue-200 text-gray-600 py-1 px-2.5 rounded-full">
            click to view
          </button>
        </a>
      </div>

      <div className="w-2/6 bg-white mb-16 p-3 border rounded-md border-gray-400 p-10">
        <p className="text-xl float-left">the cakery bakery</p>
        <p className="text-base float-right">spring 2021 </p>
        <p className="text-sm clear-both">
          The Cakery Bakery is an interactive cake-making game where players
          rush against time to complete cake orders. The interface consists of
          plates passing by on a conveyor belt, and the player will have to drag
          the correct cake base, frosting flavor, and toppings onto it to
          construct cakes according to the current customer's order. Created in
          conjunction with Alicia Liu for COS426: Computer Graphics at Princeton
          University.
        </p>
        <img
          class="my-4 h-52 w-full object-cover"
          src={require('../assets/thecakerybakerygif.gif')}
        />
        <a
          href="https://github.com/cheyzhang/thecakerybakery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="w-full mx-auto text-sm hover:bg-gray-100 border border-blue-200 text-gray-600 py-1 px-2.5 rounded-full">
            click to view
          </button>
        </a>
      </div>
      <div className="w-2/6 bg-white mb-16 p-3 border rounded-md border-gray-400 p-10">
        <p className="text-xl float-left">name map</p>
        <p className="text-base float-right">spring 2021 </p>
        <p className="text-sm clear-both">
          NameMap is a map application which maps the spread of individuals of a
          given Chinese surname over time and provides insights about these
          groups of people. It currently supports the top 150 most common
          Chinese surnames, and is built on the{' '}
          <a
            href="https://projects.iq.harvard.edu/cbdb/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            China Biographical Database
          </a>
          , or CBDB.
        </p>
        <img
          class="my-4 h-52 w-full object-cover"
          src={require('../assets/namemap.gif')}
        />
        <a
          href="https://github.com/cheyzhang/namemap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="w-full mx-auto text-sm hover:bg-gray-100 border border-blue-200 text-gray-600 py-1 px-2.5 rounded-full">
            click to view
          </button>
        </a>
      </div>
      <div className="w-2/6 bg-white mb-16 p-3 border rounded-md border-gray-400 p-10">
        <p className="text-xl float-left">crosslingual question-answering</p>
        <p className="text-base float-right">fall 2020 </p>
        <p className="text-sm clear-both">
          <span className="italic">
            Improving Cross-lingual English-Chinese Work Through
            Question-Answering Tasks
          </span>{' '}
          was advised by Professor Danqi Chen. This work uses the lens of
          Question-Answering systems to examine how well we can generalize
          English-language resources to other languages; specifically, Chinese.
          Through monolingual Chinese-Chinese tasks and cross-lingual
          English-Chinese tasks, its contributions are twofold: one, to
          establish performance of current technologies and understand what is
          already possible in the current state of the field; two, to
          qualitatively analyze results from each of these tasks and for the
          cross-lingual English-Chinese task, understand what the system
          currently lacks and identify areas for improvement.
        </p>
        <img
          class="my-4 h-52 w-full object-cover"
          src={require('../assets/fall2020iw.png')}
        />
        <a
          href="mailto:cheyenne1318@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="w-full mx-auto text-sm hover:bg-gray-100 border border-blue-200 text-gray-600 py-1 px-2.5 rounded-full">
            contact me if interested in this work!
          </button>
        </a>
      </div>
      <div className="w-2/6 bg-white mb-16 p-3 border rounded-md border-gray-400 p-10">
        <p className="text-xl float-left">
          visualizing text with keyphrase extraction
        </p>
        <p className="text-base float-right">summer 2020 </p>
        <p className="text-sm clear-both">
          <span className="italic">
            How to Extract Keyphrases and Visualize Text
          </span>{' '}
          was written as the culmination of one of my projects at my internship
          at{' '}
          <a
            href="https://www.nlmatics.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NLMatics
          </a>
          , a startup which harnesses the power of NLP to improve the experience
          of reading long, tedious, technical documents. It walks through the
          process of extracting the most meaningful keyphrases from a body of
          text and visualizing these insights meaningfully using the{' '}
          <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">
            d3 library
          </a>
          .
        </p>
        <img
          class="my-4 h-52 w-full object-cover"
          src={require('../assets/nlmatics.gif')}
        />
        <a
          href="https://blogs.nlmatics.com/keyphrase-extraction/visualization/text/nlp/python/javascript/keppler-mapper/d3/2020/08/07/How-to-Extract-Keyphrases-and-Visualize-Text.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="w-full mx-auto text-sm hover:bg-gray-100 border border-blue-200 text-gray-600 py-1 px-2.5 rounded-full">
            click to read
          </button>
        </a>
      </div>

      <div className="w-2/6 bg-white mb-16 p-3 border rounded-md border-gray-400 p-10">
        <p className="text-xl float-left">shiftscheduler</p>
        <p className="text-base float-right">spring 2020 </p>
        <p className="text-sm clear-both">
          ShiftScheduler was created as an intuitive, streamlined alternative
          for shift scheduling at the Wu-Wilcox Dining Hall at Princeton
          University. Developed for COS333 — Advanced Programming Techniques,
          Spring 2020 at Princeton University.
        </p>
        <img
          class="my-4 h-52 w-full object-cover"
          src={require('../assets/shiftscheduler.png')}
        />
        <a
          href="https://github.com/aliekingurgen/shiftscheduler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="w-full mx-auto text-sm hover:bg-gray-100 border border-blue-200 text-gray-600 py-1 px-2.5 rounded-full">
            click to view
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
