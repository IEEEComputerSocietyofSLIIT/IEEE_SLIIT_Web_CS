import './AboutUsVisionMission.css'
import Vector from './images/Vector.png'
import Vector1 from './images/Vector-1.png'
import Vector2 from './images/Vector-2.png'

const AboutUsVisionMission = () => {
    return ( 
        <div className="AboutUscontainer">

            <div className="mission">
                <h1>Our <br /> <span>Mission</span></h1>
                <p>Be essential to the global technical community and computer professionals everywhere and be
universally recognized for the contributions of technical undergraduates in developing and applying technology to improve global conditions.
</p>
                <img src={ Vector } alt="" />
            </div>

            <div className="vision">
                <img src={ Vector1 } alt="" />
                <h1>Our <br /> <span>Vision</span></h1>
                <p>To be the leading provider of technical information, community services, and personalized services to the undergraduates of SLIIT.
                </p>
            </div>

            <div className="strategy">
                <img src={ Vector2 } alt="" />
                <h1>Our <br /> <span>Strategy</span></h1>
                <p>Our strategy is to empower SLIIT undergraduates by offering technical education through workshops and competitions, fostering collaboration through mentorship, and providing personalized services. We aim to build global partnerships that offer international exposure and recognition. Additionally, we encourage innovation and leadership by supporting student-led initiatives that contribute to technological advancements and address global challenges.</p>
            </div>

        </div>
     );
}
 
export default AboutUsVisionMission;