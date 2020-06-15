import React from 'react';
import {StyledApp, StyledContainer, Button} from './App.styles';
import Row from './../components/Row';
import Title from './../components/common/Title';
import Description from './../components/common/Description';
import Item from './../components/common/Item';
import Calendar from './../components/Calendar';

function App() {
    return (
        <StyledApp>
            <StyledContainer>
                <Row>
                    <Item marginLeft="24px">
                        <Title>Have you sold subject to contract?</Title>
                        <Description>Enter your exchange date to unlock the tools you need for the next stage of your sale.</Description>
                    </Item>
                    <Item marginLeft="100px">
                        <Calendar />
                    </Item>
                    <Item>
                        <Button>Submit</Button>
                    </Item>
                </Row>
            </StyledContainer>
        </StyledApp>
    );
}

export default App;
