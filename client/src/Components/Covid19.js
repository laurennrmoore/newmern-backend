// import React from 'react';
import React, { Component } from 'react';
import '../Components/covid.css';
import covidflyer from '../img/covidflyer';




export default class Covid extends Component{
    render(){
    return (
        <div className="container">
        <div><h4 className="center" id="aboutTitle"></h4>
         
{/* 
        <video id="videobcg" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                        <source src={ covidflyer } type="video/mp4"/>
                        <source src="movie.webm" type="video/webm"/>Sorry, your browser does not support HTML5 video.
                    </video> */}

    {/* <img src={ covidflyer } alt="covidflyer with precautions"/>

 */}

</div>
        <p>We of the Cincinnati Tourism group are deeply committed to the safety and well-being of our citizens and guests. We strongly encourage using the recommendations of the Center for Disease Control and Prevention. These practices include:</p>
<ul className="covid-list">
<li>Wearing a mask when you go out in public</li>
<li>Practice social distancing and keep 6 feet away from people</li>
<li>Wash your hands often with soap and water for at least 20 seconds. If soap and water are not available, use an alcohol-based hand sanitizer.</li>
<li>Avoid touching your eyes, nose, and mouth with unwashed hands</li>
<li>Avoid close contact with people who are sick.</li>
<li>Stay home when you are ill, even if symptoms are mild</li>
<li>Cover your cough or sneeze with a tissue, then throw the tissue in the trash</li>
<li>Clean and disinfect frequently touched objects and surfaces</li>
<li>Protecting vulnerable populations</li>
<li>Additionally, the City strongly encourages residents to adjust their personal social etiquette practices accordingly:</li>
<li>Eliminate handshaking, as it requires close contact.</li>
<li>Opt for video meetings or conference calls</li>
<li>Don’t pass mobile phones, laptops or other personal belongings to others</li>
<li>Make hand sanitizer visibly available</li>
<li>Thank you for your care and commitment during this challenging time</li>
</ul> 
 


</div>

)}
    };



