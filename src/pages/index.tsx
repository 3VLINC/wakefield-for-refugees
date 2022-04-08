import * as React from "react"
import Logo from "../images/wfr-logo-colour.jpg"
import styled from 'styled-components';
import { Layout } from "../shared/Layout";

const LogoImg = styled.img`
  width: 320px;
`;

const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <MainDiv>
        <title>Wakefield for Refugees</title>
        <LogoImg src={Logo} alt="Wakefield for Refugees" />
        <h1>About Us</h1>
        <p>
        Wakefield for Refugees is a group of community members based in and around Wakefield (Québec) Canada involved in sponsoring and resettling refugees to Canada.
The group was established in 2015 to respond to the Syrian refugee crisis. Thanks to the tremendous support from our local community, we successfully sponsored three Syrian families under the Canadian government's Private Sponsorship Program, and supported them during their first full year in Canada. Those families are now permanently settled in the region, working and going to school.
Given the devastating refugee crisis in Ukraine, our group has reconvened to see how we can help. Our aim is to support Ukrainian families with a soft landing upon their arrival in our community, by helping them to find housing, work, childcare, and access to healthcare, among other needs. 

        </p>
          <h2>About Wakefield, Quebec</h2>
        <p>
          Wakefield is a small, primarily English-speaking village in western Quebec, an approximately 25-minute drive from Ottawa, Canada's capital. We are a tight-knit, compassionate community made up of artists, government workers, farmers, tradespeople, among others, that care deeply about social justice and human rights issues. This is a rural area, best suited to those who enjoy living in nature. 
        </p>
        <h2>Latest Updates</h2>
        <p>
<ul>
  <li>
    Volunteer Outreach - We are reaching out to our community members to build a roster of volunteers who can help provide Ukrainians with a soft landing when they arrive in our community. We are looking for people who can provide temporary and long-term housing, childcare, transportation, translation, among other needs. Complete our VOLUNTEER FORM. 
  </li>
  <li>
    Ukrainian Outreach - We are seeking Ukrainian families who would be interested in settling in our community, either temporarily or longer-term. Wakefield, Quebec and its surroundings are primarily rural areas established along the Gatineau River. The village of Wakefield has several shops and services, including a hospital and English elementary school, but for most job and educational opportunities, families would need to drive to the larger cities of Gatineau, Quebec or Ottawa, Ontario, as public transportation is limited. Our volunteers are here to help with transportation, as well as other settlement needs. 
  </li>
</ul>


	
</p>
<h2>How to Reach Us:</h2>
<p>
	We can be reached at EMAIL. 
</p>
<h2>Get Involved: </h2>
<p>

Do you have housing to offer? Can you help drive people to appointments? Want to join one of our committees? 

Fill out our VOLUNTEER FORM to let us know how you can help and we will be in touch. 

        </p>
      </MainDiv>

    </Layout>
  )
}

export default IndexPage
