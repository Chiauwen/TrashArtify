import React from 'react'

import PropTypes from 'prop-types'

import Question from './Question'
import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-faq">
      <div className="faq-faq-container">
        <div className="faq-faq1">
          <div className="faq-container">
            <span className="faq-text sectionTitle">
              <span>FAQ</span>
              <br></br>
            </span>
            <h2 className="faq-text03 heading2">{props.heading}</h2>
            <span className="faq-text04">
              <span>
                Here are some of the most common questions that we get.
              </span>
              <br></br>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="faq-container1">
            <Question
              Answer="Trash Artify is an AI-driven platform that allows users to scan recyclables through object detection. The platform then generates personalized craft ideas using the Image Generator API."
              Question="How does Trash Artify work?"
            ></Question>
            <Question
              Answer="The purpose of Trash Artify is to create a vibrant hub for sustainable creativity. It aims to empower individuals to turn trash into art and contribute to a greener, artistic future."
              Question="What is the purpose of Trash Artify?"
            ></Question>
            <Question
              Answer="Yes, Trash Artify encourages users to contribute their own projects. The website showcases a diverse gallery of community-contributed projects, fostering engagement and inspiration."
              Question="Can I contribute my own projects to Trash Artify?"
            ></Question>
            <Question
              Answer="By using Trash Artify and turning trash into art, users can have a positive environmental impact. They are able to repurpose recyclables and reduce waste, contributing to a more sustainable future."
              Question="What is the environmental impact of using Trash Artify?"
            ></Question>
            <Question
              Answer="Yes, Trash Artify is designed to be mobile-responsive. It can be accessed and used on various devices, including smartphones and tablets."
              Question="Is Trash Artify mobile-friendly?"
            ></Question>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  heading: 'Common questions',
}

FAQ.propTypes = {
  heading: PropTypes.string,
}

export default FAQ
