import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const MainWrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

const App = () => {
    return(
        <MainWrapper>
            <Button>Submit</Button>
        </MainWrapper>
    )
};

export default App;