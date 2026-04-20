import "./EditorialTeam.css";
import Malindu from "./images/CS-26_27-Malindu-AssistantSecretary.jpg";
import Shanaka from "./images/CS-26_27-Shanaka-Treasurer.jpg";
import Himasha from "./images/CS-26_27-Himasha-AssistantTreasurer.jpg";
import Pulith from "./images/CS-26_27-Pulith-Editor.jpg";
import HeidiErin from './images/Heidi-Erin.jpg'
import ThisaraDewinda from './images/Thisara-Dewinda.jpg'
import TharakaNuwan from './images/Tharaka-Nuwan.jpg'

import KishenDeemud from './images/Kishen Deemud.jpg'
import DeshanMadhushanka from './images/Deshan Madhushanka.jpg'
import GangulalWijekoon from './images/Gangulal Wijekoon.jpg'
import Heshini from './images/Heshini.JPG'
import KavinduPerera from './images/Kavindu Dulanjana Perera.jpg'
import ShashikaKahatapitiya from './images/Shashika Kahatapitiya.jpg'
import SubanistaThaneswaran from './images/Subanista Thaneswaran.jpg'
import ThanutiPiyarathne from './images/Thanuti Piyarathne.jpg'
import WithushanPhilip from './images/Withushan Philip.jpg'
import AdithyaLiyanaarachchi from "./images/Adithya-Liyanaarachchi.jpg";
import IndudiniThennakone from "./images/Indudini-Thennakone.jpg";
import KanzurrizkRihan from "./images/Kanzurrizk-Rihan.jpg";


import Maleesha from "./images/Maleesha.jpg";
import YasiruVithana from "./images/Yasiru-Vithana.jpg";
import HeshanGimhana from "./images/Heshan-gimhana.jpg";
import AzriMuhsin from "./images/Azri-Muhsin.jpg";
import Ridmi from "./images/Ridmi.jpg";
import Nethni from "./images/Nethni.jpg";

import teamPhoto from './images/teamPhoto.jpg'


const EditorialTeam = () => {
  return (
    <div className="editorialteamframe-wrapper">
      <div className="editorialteamframe">
        <div className="editorialteamframe1">
          <div className="framegroup">
            <h3 className="editorial-team">Committee Members</h3>
          </div>
        </div>

        <div className="publicity-frame">

          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={Malindu}
                onClick={() => window.open("https://www.linkedin.com/in/malindu-gurunada-07239b300/", "_blank")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Malindu Gurunada</p>
              <p className="member">Assistant Secretary</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={Shanaka}
                onClick={() => window.open("https://www.linkedin.com/in/shanaka-kalubowilage/", "_blank")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Shanaka Kalubowilage</p>
              <p className="member">Treasurer</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={Himasha}
                onClick={() => window.open("https://www.linkedin.com/in/himasha-hettiarachchi-a37577256/", "_blank")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Himasha Hettiarachchi</p>
              <p className="member">Assistant Treasurer</p>
            </b>
          </div>
          <div className="lead-pic-member2">
            <div className="rectangle-parent1">
              <div className="frame-child2" />
              <img
                className="member-icon1"
                loading="eager"
                alt=""
                src={Pulith}
                onClick={() => window.open("https://www.linkedin.com/in/pulitht", "_blank")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <b className="dasith-sathpura-member-container">
              <p className="dasith-sathpura">Pulith Thewmika</p>
              <p className="member1">Editor</p>
            </b>
          </div>
        </div>

        <br />
        <div className="editorialteamframe1">
          <div className="framegroup">
            <h3 className="editorial-team">Past Committee 25/26</h3>
          </div>
        </div>

        <div className="publicity-frame">
          <div className="lead-pic-member">
            <div className="anjula-member">
              <div className="anjula-member-child" />
              <img
                className="lead-pic-icon"
                loading="eager"
                alt=""
                src={AzriMuhsin}
              />
            </div>
            <b className="abiru-abayapala-leader-container">
              <p className="abiru-abayapala">Azri Adheel Muhsin</p>
              <p className="leader">Chairperson</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={Ridmi}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Ridmi Vivipem</p>
              <p className="member">Vice Chairperson</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={Nethni}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Nethni Dias</p>
              <p className="member">Secretary</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={YasiruVithana}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Yasiru Vithana</p>
              <p className="member">Assistant Secretary</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={Maleesha}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Maleesha Wijerathne</p>
              <p className="member">Treasurer</p>
            </b>
          </div>
          <div className="lead-pic-member2">
            <div className="rectangle-parent1">
              <div className="frame-child2" />
              <img
                className="member-icon1"
                loading="eager"
                alt=""
                src={HeshanGimhana} />
            </div>
            <b className="dasith-sathpura-member-container">
              <p className="dasith-sathpura">Heshan Gimhana</p>
              <p className="member1">Editor</p>
            </b>
          </div>
        </div>


        <br />
        <div className="editorialteamframe1">
          <div className="framegroup">
            <h3 className="editorial-team">Past Committee 23/24</h3>
          </div>
        </div>

        <div className="publicity-frame">
          <div className="lead-pic-member">
            <div className="anjula-member">
              <div className="anjula-member-child" />
              <img
                className="lead-pic-icon"
                loading="eager"
                alt=""
                src={AdithyaLiyanaarachchi}
              />
            </div>
            <b className="abiru-abayapala-leader-container">
              <p className="abiru-abayapala">Adithya Liyanaarachchi</p>
              <p className="leader">Chairperson</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={IndudiniThennakone}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Indudini Thennakoon</p>
              <p className="member">Vice Chairperson</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={KanzurrizkRihan}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="abiru-abayapala">Kanzurrizk Rihan</p>
              <p className="member">Secretary</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={HeidiErin}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Heidi Hettiarachchi</p>
              <p className="member">Assistant Secretary</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={ThisaraDewinda}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Thisara Dewinda</p>
              <p className="member">Event Coordinator</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={TharakaNuwan}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Tharaka Nuwan</p>
              <p className="member">Web Master</p>
            </b>
          </div>

        </div>

        <br />
        <div className="editorialteamframe1">
          <div className="framegroup">
            <h3 className="editorial-team">Past Committee 22/23</h3>
          </div>
        </div>

        <div className="publicity-frame">
          <div className="lead-pic-member">
            <div className="anjula-member">
              <div className="anjula-member-child" />
              <img
                className="lead-pic-icon"
                loading="eager"
                alt=""
                src={KishenDeemud}
              />
            </div>
            <b className="abiru-abayapala-leader-container">
              <p className="abiru-abayapala">Kishen Deemud</p>
              <p className="leader">Chairperson</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={DeshanMadhushanka}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Deshan Madhushanka</p>
              <p className="member">Vice Chairperson</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={Heshini}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="abiru-abayapala">Heshini Weerasinghe</p>
              <p className="member">Secretary</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={SubanistaThaneswaran}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Subanista Thaneswaran</p>
              <p className="member">Treasurer</p>
            </b>
          </div>

        </div>
        <br />


        <div className="editorialteamframe1">
          <div className="framegroup">
            <h3 className="editorial-team">Past Committee 21/22</h3>
          </div>
        </div>

        <div className="publicity-frame">
          <div className="lead-pic-member">
            <div className="anjula-member">
              <div className="anjula-member-child" />
              <img
                className="lead-pic-icon"
                loading="eager"
                alt=""
                src={KavinduPerera}
              />
            </div>
            <b className="abiru-abayapala-leader-container">
              <p className="abiru-abayapala">Kavindu Perera</p>
              <p className="leader">Chairperson</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={WithushanPhilip}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Withushan Philip</p>
              <p className="member">Coordinator</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={GangulalWijekoon}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="abiru-abayapala">Gangulal Wijekoon</p>
              <p className="member">Secretary</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={KishenDeemud}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Kishen Deemud</p>
              <p className="member">Committee Member</p>
            </b>
          </div>
          <div className="lead-pic-member2">
            <div className="rectangle-parent1">
              <div className="frame-child2" />
              <img
                className="member-icon1"
                loading="eager"
                alt=""
                src={ThanutiPiyarathne} />
            </div>
            <b className="dasith-sathpura-member-container">
              <p className="dasith-sathpura">Thanuti Piyarathne</p>
              <p className="member1">Committee Member</p>
            </b>
          </div>
        </div>



        <br />
        <div className="editorialteamframe1">
          <div className="framegroup">
            <h3 className="editorial-team">Web Development Team</h3>
          </div>
        </div>

        <div className="publicity-frame">
          <div style={{
            width: '70%'
          }}>
            <img src={teamPhoto} alt="Team" style={{
              width: '100%', borderRadius: '30px'
            }} />
          </div>
        </div>


      </div>
    </div>
  );
};

export default EditorialTeam;
