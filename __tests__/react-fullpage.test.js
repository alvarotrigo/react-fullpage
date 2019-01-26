import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import ReactFullpage from '../components';

describe('<FullPages />', () => {
  it('FullPages', async () => {
    const { debug, getByText, getByTestId } = render(
      <div data-testid="test">
        <ReactFullpage
          navigation
          render={({ fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">Section 1</div>
                <div className="section">Section 2</div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </div>
    );
    await waitForElement(() => getByTestId('test'));
  });
});
