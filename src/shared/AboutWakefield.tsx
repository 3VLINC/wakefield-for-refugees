import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { Header1 } from "./Header1";
import { Header2 } from "./Header2";
import Snapshot1 from '../images/IMG_4176.jpeg';

const MainDiv = styled.div<WithTheme>(({ theme }) => `
   color: ${theme.darkFont};
    padding:40px;
`);

const Section = styled.div<WithTheme>(({ theme }) => `
   
    margin-bottom:80px;
`);

const Snapshot = styled.img<WithTheme>(({ }) => `
   width: 66.66%; 
   height: auto;
   margin: auto;
   text-align: center;
`);


export const AboutWakefield: React.FC = () => {

    return <MainDiv>
        <Section>
            <Header1>About Wakefield</Header1>
            <p>Wakefield, Quebec and its surroundings are primarily rural areas established along the Gatineau River. Wakefield is part of the larger municipality of La Pêche, QC, which covers an area of 598 square kilometers. The population of La Pêche was 7,863 according to the 2016 census. The population density is approximately 13 people per square kilometer. Nearby communities include Masham, Alcove, Rupert, Chelsea, and Cantley.</p>

            <p>Core sectors of the economy are tourism, agriculture, services, residential construction and related trades. A considerable number of residents work in the public service for the federal government and either commute into the city (Ottawa or Gatineau) or work from home.</p>

            <p>The cost of living is lower than many other parts of Canada. This quiet, primarily rural community is amazing for people who enjoy the outdoors and the village lifestyle. It is also a very safe place for families with young children. It’s a welcoming community made up of many newcomers from other parts of Canada. People take care of their neighbours and there is an amazing community spirit, as well as a vibrant arts scene.</p>
            <Snapshot src={Snapshot1} />
        </Section>
        <Section>
            <Header2>Getting around</Header2>
            <p>For most job and educational opportunities, expect to drive to the larger urban centres of Gatineau, Quebec or Ottawa, Ontario, which are both about 35 kilometers away.</p>

            <p>Public transportation is limited but there is a commuter bus available on weekdays during peak hours. For more information, visit the Transcollines website.</p>
        </Section>
        <Section>
            <Header2>Languages</Header2>
            <p>Wakefield is a primarily Anglophone community, located within a province where French is the official language. The vast majority of local services, including healthcare, can be accessed in English. It is helpful, however, especially when communicating with government service providers and French school administrators to speak some basic French. Free French classes are available through the Government of Quebec.</p>

        </Section>
        <Section>
            <Header2>Local services</Header2>
            <p><em>This is not a complete list but offers a sense of the main services available locally.</em></p>

            <ul>
                <li><a href="https://cisss-outaouais.gouv.qc.ca/hopitaux/wakefield/">Wakefield Memorial Hospital (In French only)</a> and residential and long-term care centre</li>
                <li><a href="https://www.brunet.ca/en/store-locator/wakefield-895-chemin-riverside-j0x-3g0/5110/">Brunet pharmacy</a></li>
                <li><a href="http://wakefield.wqsb.qc.ca/">Wakefield Elementary School(English school)</a> * Please note that under Quebec’s language laws, all immigrants from outside Canada are required to attend school in French</li>
                <li><a href="https://localisateur.bnc.ca/succursale/banque-nationale/741-chemin-riverside-wakefield/">National Bank / Banque nationale branch</a></li>
                <li><a href="https://centrewakefieldlapeche.ca/">Centre Wakefield La Pêche</a> (centre for recreation, culture and community events, including a library)</li>
                <li><a href="https://www.facebook.com/wakefieldgeneralstore/">Wakefield General Store(grocery store)</a></li>
                <li>Medical clinics: <a href="https://cliniquecollines.ca/en/clinique/la_clinique/">Clinique des collines</a> and <a href="https://bonjour-sante.ca/uno/clinic/cdemfamilialedewakefield">Centre de Médecine familiale de Wakefield</a></li>
                <li><a href="https://www.iga.net/en/find_a_store/store/8371-iga-famille-charles-chelsea">IGA Family Charles</a> (larger grocery store)</li>
            </ul>

        </Section>
        <Section>
            <Header2>Local businesses</Header2>
            <p>The village has a small number of restaurants, bars, cafés, and bakeries. There are also several gift shops and hotels that cater to tourists.For a full list of local businesses, visit <a href="http://www.destinationwakefield.com/">Destination Wakefield</a>.</p>

        </Section>
        <Section>
            <Header2>Job opportunities</Header2>
            <p>Jobs could be available in any of the services or shops listed above. Additionally, the community is often looking for people with particular skills and experience in the areas listed below, and a number of these jobs do not require English or French language skills. Some of this work would be seasonal.</p>

            <ul>
                <li>Farming</li>
                <li>Trades(such as woodworking, roofing, home construction, etc)</li>
                <li>Groundskeeping, gardening, landscapers</li>
                <li>Tourism accommodations (cleaning, client services, front desk, property managers for vacation rentals, etc)</li>
                <li>Food services (Bakers, waiters, baristas, cooks, cashiers, etc)</li>
                <li>Childcare services (daycare workers, afterschool care, nannies)</li>
                <li>Housekeeping</li>
                <li>Healthcare, nursing and elder care</li>
            </ul>

            <p>Many workers also commute to Ottawa / Gatineau for higher paid, professional occupations.</p>

        </Section>
        <Section>
            <Header2>Healthcare</Header2>
            <p>Ukrainians arriving in Québec will benefit from health insurance and public drug insurance plans. Our volunteers can assist with obtaining a health insurance card which gives access to essential medical care. <a href="https://www.quebec.ca/en/immigration/welcoming-ukrainians-to-quebec#c145178">More information available here</a>.</p>
        </Section>

        <Section>
            <Header2>Schools</Header2>
            <p>There are several French language elementary schools in the area and a French language high school in the community (<a href="csspo.gouv.gc.ca">French school board</a>). Primary school is for ages 5 - 12; secondary school ages 12 to 17.</p>

            <p>Under Quebec’s language laws, all immigrants from outside Canada are required to attend school in French. Children who need to learn French will go to school in specialized classes in Gatineau. Transportation is provided by the school board.</p>

            <p>Post secondary education in Quebec is inexpensive, compared to other Canadian provinces.</p>

        </Section>
        <Section>
            <Header2>Daycare</Header2>
            <p>Unfortunately, there is a severe shortage of children’s daycare spots in the area. Families with young children (5 and under) should expect to drive into Gatineau (35 km away) for full - time childcare facilities.</p>

            <p>If childcare is hired privately - for example, a Ukrainian family could pay another Ukrainian to take care of their kids, that money would be subsidized by the government up to 90 %. Our group would be happy to help set this up.</p>

        </Section>
        <Section>
            <Header2>Recreation</Header2>
            <p>There are many options for outdoor enthusiasts, such as ski hills, golf courses, rock climbing, hiking, lakes, parks, river activities, and cottaging / camping areas.</p>
        </Section>

    </MainDiv >
}