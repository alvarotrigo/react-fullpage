import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import ReactFullpage from '../components';

describe('<ReactFullpage />', () => {
  const sectionOneContent = 'Section 1';
  const sectionTwoContent = 'Section 2';
  const testId = 'test';

  it('renders fullpage sections', async () => {
    const { getByText, getByTestId } = render(
      <div data-testid={testId}>
        <ReactFullpage
          navigation
          render={({ fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">{sectionOneContent}</div>
                <div className="section">{sectionTwoContent}</div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );

    await waitForElement(() => getByTestId(testId));
    await waitForElement(() => getByText(sectionOneContent));
    await waitForElement(() => getByText(sectionTwoContent));
  });
});
