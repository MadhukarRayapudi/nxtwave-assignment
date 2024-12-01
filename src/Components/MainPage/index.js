import "./index.css"

import { RiVerifiedBadgeFill } from "react-icons/ri";

const MainPage = () =>
    (
        <div className = "main-page">
            <nav className = "navbar">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1732982462/image_45_rb5v3i.png" className = "logo-img" alt = "logo"/>
                <ul className = "navbar-items-container">
                    <li className = "navbar-item"> Home </li>
                    <li className = "navbar-item-active"> Find Doctors </li>
                    <li className = "navbar-item"> About Us </li>
                </ul>
                <div className = "buttons-container">
                    <button className = "login-btn"> Login </button>
                    <button className = "signup-btn"> Sign-up </button>
                </div>
            </nav>
            
            <div className = "about-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1732984597/image_160_bdpzwi.png" alt = "cover-pic" className = "cover-pic" />
                

                <div className = "personal-details-container">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1732984916/Ellipse_727_jownyn.png" alt = "profile-pic" className = "profile-pic" />
                    <div className = "name-and-rating-container">
                        <h1 className = "name"> Dr. Bruce Willis <RiVerifiedBadgeFill/> </h1>
                        <p className = ""> Gynecologist </p>
                        <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733045202/Frame_1000006278_upmwnc.png" alt = "rating" className = "" />
                    </div>

                    <div className = "side-heading-and-result-container">
                        <p className = "side-heading"> Followers </p>
                        <p className = "result"> 850 </p>
                    </div>

                    <div className = "side-heading-and-result-container">
                        <p className = "side-heading"> Following </p>
                        <p className = "result"> 18k </p>
                    </div>

                    <div className = "side-heading-and-result-container">
                        <p className = "side-heading"> Posts </p>
                        <p className = "result"> 250 </p>
                    </div>

                    <button className = "signup-btn"> Book an Appointment </button>
                </div>
            </div>

            <div className = "parent-container">
                <div>
                    <div className = "little-bit-about-me-container">
                        <div className = "heading-and-btn-container">
                            <h1 className = "little-bit-heading"> A Little About me </h1>
                            <button className = "follow-btn"> Follow + </button>
                        </div>
                        <p className = "about-me"> Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the  </p>
                        <p className = "read-more"> Read more </p>

                        <div className = "languages-container">
                            <p className = "language-heading"> Can Speak </p>
                            <p className = "language"> English </p>
                            <p className = "language"> Hindi </p>
                            <p className = "language"> Telugu </p>
                        </div>
                        <div className = "icons-container">
                            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733048871/Frame_1000006076_mocbp4.png" alt = "social-media" className = "social-media-icon"/>
                            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733048964/Frame_1000006077_xlsii4.png" alt = "social-media" className = "social-media-icon"/>
                            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733049010/Frame_1000006078_grmtpz.png" alt = "social-media" className = "social-media-icon"/>
                            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733049059/Frame_1000006079_qcwqxc.png" alt = "social-media" className = "social-media-icon"/>
                        </div>
                    </div>

                    <div className = "little-bit-about-me-container">
                        <div className = "heading-and-btn-container">
                            <h1 className = "little-bit-heading"> I specialize in </h1>
                        </div>

                        <div className = "icons-container">
                            <div className = "img-and-name-container">
                                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733049688/Frame_1000006268_a70hvg.png" alt = "social-media" className = "social-media-icon"/>
                                <p className = "name"> Women's Health </p>
                            </div>

                            <div className = "img-and-name-container">
                                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733049726/Frame_1000006269_ppy6dc.png" alt = "social-media" className = "social-media-icon"/>
                                <p className = "name"> Skin Care </p>
                            </div>

                            <div className = "img-and-name-container">
                                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733049766/Frame_1000006270_qqmgem.png" alt = "social-media" className = "social-media-icon"/>
                                <p className = "name"> Immunity </p>
                            </div>

                            <div className = "img-and-name-container">
                                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733049801/Frame_1000006271_bgnn2d.png" alt = "social-media" className = "social-media-icon"/>
                                <p className = "name"> Hair Care </p>
                            </div>
                        </div>
                    </div>

                    <div className = "little-bit-about-me-container">
                        <div className = "heading-and-btn-container">
                            <h1 className = "little-bit-heading"> The Concerns I Treat </h1>
                        </div>
                
                        <div className = "concerns-container">
                            <p className = "concern-name"> Skin Treatment </p>             
                            <p className = "concern-name"> Pregnancy </p>
                            <p className = "concern-name"> Period Doubts </p>
                            <p className = "concern-name"> Endometriosis </p>
                            <p className = "concern-name"> Pelvic Pain </p>
                            <p className = "concern-name"> Ovarian Cysts </p>

                            <button className = "follow-btn"> + 5 More </button>
                        </div>
                    </div>

                    <div className = "little-bit-about-me-container">
                        <div className = "heading-and-btn-container">
                            <h1 className = "little-bit-heading"> My Work Experience </h1>
                        </div>

                        <h1 className = "practice-description"> I HAVE BEEN IN PRACTICE FOR : 7+ YEARS </h1>
                        <hr />

                        <div className = "experience-details">
                            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733051551/Frame_1000006314_nvyd59.png" alt = "clinic-icon" className = "clinic-img" />
                            <div>
                                <p className = "clinic-name"> Midtown Medical Clicic </p>
                                <p className = "post-name"> Senior doctor </p>
                            </div>
                            <p className = "duration"> 2016-PRESENT </p>
                        </div>

                        <div className = "experience-details">
                            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733051551/Frame_1000006314_nvyd59.png" alt = "clinic-icon" className = "clinic-img" />
                            <div>
                                <p className = "clinic-name"> Midtown Medical Clicic </p>
                                <p className = "post-name"> Senior doctor </p>
                            </div>
                            <p className = "duration"> 2010-2015 </p>
                        </div>
                    </div>

                    <div className = "little-bit-about-me-container">
                        <div className = "heading-and-btn-container">
                            <h1 className = "little-bit-heading"> Featured Reviews (102) </h1>
                        </div>

                        <div className = "review-container">
                            <div className = "reviewer-details-container">
                                <div className = "reviewer-pic-details-container">
                                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733052266/Frame_2608514_fv96wj.png" alt = "profile-pic" className = "reviewer-pic" />
                                    <div>
                                        <p className = "reviewer-name"> Alicent Hightower </p>
                                        <p className = "consulted-for-heading"> Consulted for Skin care </p>
                                    </div>
                                </div>
                                <p className = "consulted-date"> 20 January 2023 </p>
                            </div>

                            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733053171/stars_eojhss.png" className = "rating-img" alt = "rating" />
                            <p className = "review"> Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods </p>
                        </div>

                        <div className = "review-container">
                            <div className = "reviewer-details-container">
                                <div className = "reviewer-pic-details-container">
                                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733052266/Frame_2608514_fv96wj.png" alt = "profile-pic" className = "reviewer-pic" />
                                    <div>
                                        <p className = "reviewer-name"> Alicent Hightower </p>
                                        <p className = "consulted-for-heading"> Consulted for Skin care </p>
                                    </div>
                                </div>
                                <p className = "consulted-date"> 20 January 2023 </p>
                            </div>

                            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733053171/stars_eojhss.png" className = "rating-img" alt = "rating" />
                            <p className = "review"> Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods </p>
                        </div>
                    </div>
                </div>

                <div className = "appointment-details-container">
                    <div className = "appointment-fee-container">
                        <h1 className = "appointment-fee-heading"> Appointment Fee </h1>
                        <p className = "appointment-fee"> ₹699.00 </p>
                    </div>

                    <h1 className = "select-mode-heading"> Select your mode of session </h1>

                    <div className = "modes-container">
                        <div className = "mode">
                            <p className = "mode-heading"> In-Clinic </p>
                            <p className = "mode-duration"> 45 Mins </p>
                        </div>

                        <div className = "mode">
                            <p className = "mode-heading"> Video </p>
                            <p className = "mode-duration"> 45 Mins </p>
                        </div>

                        <div className = "mode">
                            <p className = "mode-heading"> Chat </p>
                            <p className = "mode-duration"> 10 Mins </p>
                        </div>
                    </div>

                    <p className = "select-mode-heading"> Pick a time slot </p>

                    <div className = "slots-container">

                        <div className = "slot">
                            <p className = "date"> Mon, 10 Oct </p>
                            <p className = "slots-available"> 10 slots </p>
                        </div>

                        <div className = "slot">
                            <p className = "date"> Tue, 11 Oct </p>
                            <p className = "slots-available"> 02 slots </p>
                        </div>

                        <div className = "slot">
                            <p className = "date"> Wed, 12 Oct </p>
                            <p className = "slots-available"> 05 slots </p>
                        </div>
                    </div>

                    <h1 className = "select-mode-heading"> Morning </h1>

                    <div className = "slot-times-container">
                        <div className = "time-container">
                            <p className = "time"> 09:00 AM </p>
                        </div>

                        <div className = "time-container">
                            <p className = "time"> 09:30 AM </p>
                        </div>

                        <div className = "time-container">
                            <p className = "time"> 10:00 AM </p>
                        </div>

                        <div className = "time-container">
                            <p className = "time"> 10:15 AM </p>
                        </div>

                        <div className = "time-container">
                            <p className = "time"> 10:45 AM </p>
                        </div>

                        <div className = "time-container">
                            <p className = "time"> 11:00 AM </p>
                        </div>

                    </div>

                    <h1 className = "select-mode-heading"> Evening </h1>

                    <div className = "slot-times-container">
                        <div className = "time-container">
                            <p className = "time"> 04:00 PM </p>
                        </div>

                        <div className = "time-container">
                            <p className = "time"> 04:15 PM </p>
                        </div>

                        <div className = "time-container">
                            <p className = "time"> 04:30 PM </p>
                        </div>

                        <div className = "time-container">
                            <p className = "time"> 04:45 PM </p>
                        </div>

                        <div className = "time-container">
                            <p className = "time"> 05:15 PM </p>
                        </div>

                    </div>
                    <button className = "make-an-appointment-btn"> Make An Appointment </button>
                </div>
            </div>
        </div>
    )


export default MainPage