import React from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-pricing">
      <div className="pricing-pricing1">
        <div className="pricing-container">
          <h2 className="pricing-pricing-heading">
            {props.PricingHeading}
          </h2>
          <span className="pricing-pricing-sub-heading">
            {props.PricingSubHeading}
          </span>
        </div>
        <div className="pricing-container01">
          <div className="pricing-pricing-card">
            <div className="pricing-container02">
              <span className="pricing-text03">{props.text}</span>
              <span className="pricing-free-plan-description">
                {props.FreePlanDescription}
              </span>
            </div>
            <div className="pricing-container03">
              <span className="pricing-text04">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-free-plan-price">
                {props.FreePlanPrice}
              </span>
            </div>
            <div className="pricing-container04">
              <div className="pricing-container05">
                <span className="pricing-text07">{props.text4}</span>
                <span className="pricing-free-plan-features">
                  {props.FreePlanFeatures}
                </span>
              </div>
              <div className="pricing-container06">
                <span className="pricing-text08">{props.text5}</span>
                <span className="pricing-free-plan-features1">
                  {props.FreePlanFeatures1}
                </span>
              </div>
              <div className="pricing-container07">
                <span className="pricing-text09">{props.text6}</span>
                <span className="pricing-free-plan-features2">
                  {props.FreePlanFeatures2}
                </span>
              </div>
              <div className="pricing-container08">
                <span className="pricing-text10">{props.text7}</span>
                <span className="pricing-free-plan-features3">
                  {props.FreePlanFeatures3}
                </span>
              </div>
            </div>
            <button className="pricing-button">{props.button}</button>
          </div>
          <div className="pricing-pricing-card1">
            <div className="pricing-container09">
              <span className="pricing-text11 heading3">{props.text1}</span>
              <span className="pricing-basic-plan-description">
                {props.BasicPlanDescription}
              </span>
            </div>
            <div className="pricing-container10">
              <span className="pricing-text12">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-basic-plan-pricing">
                {props.BasicPlanPricing}
              </span>
              <span className="pricing-text15">{props.text2}</span>
            </div>
            <div className="pricing-container11">
              <div className="pricing-container12">
                <span className="pricing-text16">{props.text8}</span>
                <span className="pricing-text17">{props.Text}</span>
              </div>
              <div className="pricing-container13">
                <span className="pricing-text18">{props.text9}</span>
                <span className="pricing-basic-plan-features">
                  {props.BasicPlanFeatures}
                </span>
              </div>
              <div className="pricing-container14">
                <span className="pricing-text19">{props.text10}</span>
                <span className="pricing-basic-plan-features1">
                  {props.BasicPlanFeatures1}
                </span>
              </div>
              <div className="pricing-container15">
                <span className="pricing-text20">{props.text11}</span>
                <span className="pricing-basic-plan-features2">
                  {props.BasicPlanFeatures2}
                </span>
              </div>
              <div className="pricing-container16">
                <span className="pricing-text21">{props.text12}</span>
                <span className="pricing-basic-plan-features3">
                  {props.BasicPlanFeatures3}
                </span>
              </div>
            </div>
            <button className="pricing-button1">{props.button1}</button>
          </div>
          <div className="pricing-pricing-card2">
            <div className="pricing-container17">
              <span className="pricing-text22 heading3">
                <span>PRO</span>
                <br></br>
              </span>
              <span className="pricing-pro-plan-description">
                {props.ProPlanDescription}
              </span>
            </div>
            <div className="pricing-container18">
              <span className="pricing-text25">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-pro-plan-pricing">
                {props.ProPlanPricing}
              </span>
              <span className="pricing-text28">{props.text3}</span>
            </div>
            <div className="pricing-container19">
              <div className="pricing-container20">
                <span className="pricing-text29">{props.text13}</span>
                <span className="pricing-text30">{props.Text1}</span>
              </div>
              <div className="pricing-container21">
                <span className="pricing-text31">{props.text14}</span>
                <span className="pricing-pro-plan-features">
                  {props.ProPlanFeatures}
                </span>
              </div>
              <div className="pricing-container22">
                <span className="pricing-text32">{props.text15}</span>
                <span className="pricing-pro-plan-features1">
                  {props.ProPlanFeatures1}
                </span>
              </div>
              <div className="pricing-container23">
                <span className="pricing-text33">{props.text16}</span>
                <span className="pricing-pro-plan-features2">
                  {props.ProPlanFeatures2}
                </span>
              </div>
            </div>
            <button className="pricing-button2">{props.button2}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Pricing.defaultProps = {
  PricingHeading: 'Choose Your Plan',
  PricingSubHeading:
    'Unlock the full potential of Trash Artify with our flexible pricing options',
  button: 'Continue with Free',
  button1: 'Try the Basic plan',
  button2: 'Try the PRO plan',
  text: 'Free',
  FreePlanDescription:
    'Access basic features of the Trash Artify platform for free',
  FreePlanPrice: '0',
  text1: 'BASIC',
  BasicPlanDescription:
    'Unlock additional features and benefits with the Basic plan',
  BasicPlanPricing: '7',
  text2: '/ month',
  ProPlanDescription:
    'Get the ultimate Trash Artify experience with the Pro plan',
  ProPlanPricing: '20',
  text3: '/ month',
  text4: '✔',
  FreePlanFeatures: 'Scan up to 10 recyclables per day',
  text5: '✔',
  FreePlanFeatures1: 'Receive craft ideas based on scanned objects',
  text6: '✔',
  FreePlanFeatures2:
    'Access a limited gallery of community-contributed projects',
  text7: '✔',
  FreePlanFeatures3: 'Track your environmental impact',
  text8: '✔',
  Text: 'All features of FREE plan',
  text9: '✔',
  BasicPlanFeatures: 'Scan unlimited recyclables per day',
  text10: '✔',
  BasicPlanFeatures1:
    'Receive personalized craft ideas from Image Generator API',
  text11: '✔',
  BasicPlanFeatures2:
    'Access a diverse gallery of community-contributed projects',
  text12: '✔',
  BasicPlanFeatures3: 'Track and compare your environmental impact over time',
  text13: '✔',
  Text1: ' All features of BASIC plan',
  text14: '✔',
  ProPlanFeatures: 'Scan unlimited recyclables per day',
  text15: '✔',
  ProPlanFeatures1: 'Receive priority access to new craft ideas and features',
  text16: '✔',
  ProPlanFeatures2: 'Access exclusive premium craft templates',
}

Pricing.propTypes = {
  PricingHeading: PropTypes.string,
  PricingSubHeading: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string,
  text: PropTypes.string,
  FreePlanDescription: PropTypes.string,
  FreePlanPrice: PropTypes.string,
  text1: PropTypes.string,
  BasicPlanDescription: PropTypes.string,
  BasicPlanPricing: PropTypes.string,
  text2: PropTypes.string,
  ProPlanDescription: PropTypes.string,
  ProPlanPricing: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  FreePlanFeatures: PropTypes.string,
  text5: PropTypes.string,
  FreePlanFeatures1: PropTypes.string,
  text6: PropTypes.string,
  FreePlanFeatures2: PropTypes.string,
  text7: PropTypes.string,
  FreePlanFeatures3: PropTypes.string,
  text8: PropTypes.string,
  Text: PropTypes.string,
  text9: PropTypes.string,
  BasicPlanFeatures: PropTypes.string,
  text10: PropTypes.string,
  BasicPlanFeatures1: PropTypes.string,
  text11: PropTypes.string,
  BasicPlanFeatures2: PropTypes.string,
  text12: PropTypes.string,
  BasicPlanFeatures3: PropTypes.string,
  text13: PropTypes.string,
  Text1: PropTypes.string,
  text14: PropTypes.string,
  ProPlanFeatures: PropTypes.string,
  text15: PropTypes.string,
  ProPlanFeatures1: PropTypes.string,
  text16: PropTypes.string,
  ProPlanFeatures2: PropTypes.string,
}

export default Pricing
