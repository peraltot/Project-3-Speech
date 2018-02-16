import React from "react";
import {Row, Col, CardPanel} from "react-materialize";

const StoryPanel = props =>
    <Row>
        <Col s={20} m={10}>
            <CardPanel className="blue-grey darken-1">
                <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
            </CardPanel>
        </Col>
    </Row>;

export default StoryPanel;
