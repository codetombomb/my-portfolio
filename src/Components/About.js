import React, { Component } from 'react';

class About extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>I worked in the Motorcycle Industry as a mechanic, doing repairs and service,  
                    and a service adviser, helping customers,  for almost 10 years. I transitioned 
                    into web development after helping my father in law with social media marketing 
                    project and found that I liked HTML and CSS. I attended Flatiron School and made 
                    my first computer game and fell in love. Because of my background as a mechanic, 
                    I tend to pay attention to details and think outside of the box creatively. I am 
                    actively seeking employment as a web developer and expanding my knowledge in 
                    Computer Science.</p>
            </div>
        )
    }
}

export default About;