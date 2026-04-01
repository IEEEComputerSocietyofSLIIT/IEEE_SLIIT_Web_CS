import "./ExecutiveCommittee.css";
import ShashikaLokuliyana from "./images/Shashika-Lokuliyana.JPG";
import HesaraPerera from "./images/CS-26_27-Hesara-Chairperson.jpg";
import RaveenThilakarathna from "./images/CS-26_27-Raveen-ViceChairperson.jpg";
import GayuthWaidyaratne from "./images/CS-26_27-Gayuth-Secretary.jpg";



const MEMBERSHIP = () => {
  return (
    <section className="m-e-m-b-e-r-s-h-i-p" id="exec">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="lorem-ipsum-dolor-sit-amet-co-wrapper"></div>
        <div className="f-r-a-m-e2">
          <h2 className="executive-committee">Executive Committee</h2>
          <div className="groupframe-parent">
            <div className="groupframe">
              <div className="f-r-a-m-e3">
                <div className="f-r-a-m-e-item" />
                <img
                  className="f-r-a-m-e-inner"
                  loading="eager"
                  alt=""
                  src={ShashikaLokuliyana}
                />
              </div>
              <div className="t-e-x-t">
                <h3 className="yohan-joseph-chairperson-container">
                  <p className="yohan-joseph">Mrs. Shashika Lokuliyana</p>
                  <p className="chairperson">Chapter Advisor</p>
                  <div className="flex my-4">
                    <a
                      href="http://linkedin.com/in/shashikalokuliyana"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </i>
                    </a>
                  </div>
                </h3>
              </div>
              <div className="vicechairpersonframe">
                <div className="vicechairpersonframe-child" />
                <h3 className="prabhasa-dharmarathne-vice-container">
                  <p className="prabhasa-dharmarathne">
                    Hesara Perera
                  </p>
                  <p className="vice-chairperson">Chairperson</p>
                  <div className="flex my-5 justify-end">
                    <a
                      href="https://www.linkedin.com/in/hesaraperera/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="white"
                        >
                          <path
                            d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </i>
                    </a>
                  </div>
                </h3>
                <img
                  className="vicechairpersonframe-item"
                  loading="eager"
                  alt=""
                  src={HesaraPerera}
                />
              </div>
            </div>
            <div className="frame-container">
              <div className="rectangle-group">
                <div className="frame-item" />
                <img
                  className="frame-inner"
                  loading="eager"
                  alt=""
                  src={GayuthWaidyaratne}
                />
              </div>
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <img
                  className="group-icon"
                  loading="eager"
                  alt=""
                  src={RaveenThilakarathna}
                />
                <h3 className="devni-dharmasooriya-secretary-container">
                  <p className="devni-dharmasooriya">Raveen Sanjeew Thilakarathna</p>
                  <p className="secretary">Vice Chairperson</p>
                  <div className="flex my-5 justify-start">
                    <a
                      href="https://www.linkedin.com/in/raveen-thilakarathna-b8b149376/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </i>
                    </a>
                  </div>
                </h3>
              </div>
              <div className="pasan-senarath-treasurer-wrapper">
                <h3 className="pasan-senarath-treasurer-container">
                  <p className="pasan-senarath">Gayuth Waidyaratne</p>
                  <p className="treasurer">Secretary</p>
                  <div className="flex my-5 justify-end">
                    <a
                      href="https://www.linkedin.com/in/gayuth-waidyaratne/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </i>
                    </a>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MEMBERSHIP;
