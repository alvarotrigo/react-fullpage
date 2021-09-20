import React, { useState } from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '../../../components';
import Styles from './styles.css';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
  * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
  */
};

const
  originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'],
  originalPages = [{ text: "Section 1" }, { text: "Section 2" }, { text: "Section 3" }];

const Hooks = () => {
  const
    [sectionsColor, setsectionsColor] = useState([...originalColors]),
    [fullpages, setfullpages] = useState([...originalPages]);

  const
    onLeave = (origin, destination, direction) => {
      console.log("onLeave", { origin, destination, direction });
      // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    },

    handleChangeColors = () => {
      const newColors =
        sectionsColor[0] === "yellow"
          ? [...originalColors]
          : ["yellow", "blue", "white"];
      return setsectionsColor(newColors);
    },

    handleAddSection = () => {
      const { length } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random()
      });
      return setfullpages([...fullpages])
    },

    handleRemoveSection = () => {
      const newPages = [...fullpages];
      newPages.pop();
      return setfullpages(newPages)
    },

    moveSectionDown = () => {
      return fullpage_api.moveSectionDown();
    }

  const Menu = () => (
    <div
      className="menu"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100
      }}
    >
      <ul className="actions">
        <li>
          <button onClick={handleAddSection}> Add Section </button>
          <button onClick={handleRemoveSection}> Remove Section </button>
          <button onClick={handleChangeColors}> Change background colors </button>
          <button onClick={moveSectionDown}> Move Section Down </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="App">
      <Menu />
      <ReactFullpage
        debug /* Debug logging */

        // Required when using extensions
        pluginWrapper={pluginWrapper}

        // fullpage options
        licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage']}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        sectionsColor={sectionsColor}

        render={() => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ text }) => (
              <div key={text} className={SEL}>
                <h1>{text}</h1>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}
const rootElement = document.getElementById('react-root');
ReactDOM.render(<Hooks />, rootElement);