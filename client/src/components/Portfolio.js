import React, {Component} from 'react';
import '../assets/scss/portfolio.scss'
import about from "./_portfolioInfo/about";
import experience from "./_portfolioInfo/experience"
import contact from "./_portfolioInfo/contact";
import introduction from "./_portfolioInfo/introduction";
import Button from "react-bootstrap/Button";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {resume: []};
    }

    componentDidMount() {
        fetch('/api/resume')
            .then(res => {
                return res.json()
            })
            .then((resume) => {
                this.setState({resume});
            }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        let introduction_info;
        let about_info;
        let experience_info;
        let contact_info;


        const resume = this.state.resume;

        if (resume) {
            introduction_info = introduction(resume);
            about_info = about();
            experience_info = experience(resume);
            contact_info = contact();
        }

        return (
            <div key={'portfolio'} id="portfolio">
                <div key={resume.id}>
                    {/*<section className="portfolio-section">*/}
                    {/*    <img src={Image}*/}
                    {/*         alt="New York Mountains"*/}
                    {/*         width="1124"*/}
                    {/*         height="632"/>*/}
                    {/*</section>*/}
                    {introduction_info}
                    {about_info}
                    {experience_info}
                    {contact_info}
                </div>
                <Button id="return-to-top" variant="outline-dark" href="/#">Return to top</Button>
            </div>
        )
    }

}

export default Portfolio;