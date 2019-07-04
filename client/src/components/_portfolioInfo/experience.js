import React from "react";
import friendlyDates from "../_includes/friendlyDates";
import TabContainer from "react-bootstrap/TabContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";

function experience(resume) {
    return (
        <section id="experience" className="anchor portfolio-section container-fluid">
            <h3 className="text-center m-5">
                <span className="portfolio-section-header">Where I've been</span>
            </h3>
            <div id="section-experience">
                <TabContainer defaultActiveKey={0}>
                    {resume.employment &&
                    resume.employment.map(({name, position, employment_status, experience}, i) =>
                        <Row id="row-experience">
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey={i}>{name}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <TabContent>
                                    <TabPane eventKey={i}>
                                        <div className="job-info">
                                            <h4><span>{position} <span style={{color: '#888'}}>@ {name}</span></span>
                                            </h4>
                                            <h5>
                                                {`${friendlyDates(employment_status.started)} - ${(
                                                    (employment_status.current && 'Present') ||
                                                    (!employment_status.current && friendlyDates(employment_status.ended))
                                                )}`}
                                            </h5>
                                            <ul>
                                                {experience.map((item) =>
                                                    <li key={item}>
                                                        <span className='angle-right-arrows'>&#187;</span> {item}
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    )}
                </TabContainer>
            </div>
        </section>
    )
}

export default experience;