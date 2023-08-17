import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

function Profile() {
  const { title, info_title, infoLabel, infoData, about, p1, p2 } =
    useContext(DarkModeContext).data.profile;
  return (
    <div className="bg-light-grey">
      <div className="circle-decoration">
        <div className="circle-1"></div>
      </div>

      <div className="bg-light-grey  dark:bg-dark-grey flex justify-center pb-16">
        <div className="container">
          <h2 className="skills-heading  text-center mt-16 dark:text-white">
            {title}
          </h2>
          <div className="profile-info">
            <div className="basic-info bg-white dark:bg-[#525252]">
              <h3 className="info-h3 text-pembe mb-8">{info_title}</h3>
              <div className="personal-info">
                {infoLabel.map((info, idx) => (
                  <div className="info-pair dark:text-white" key={idx}>
                    <p className="info-label font-semibold">{info}</p>
                    <p className="info-data">{infoData[idx]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-me dark:text-white">
              <div className="about-highlighted">
                <h3 className="info-h3 text-black dark:text-white pb-5">
                  {about}
                </h3>
              </div>
              <div className="flex flex-col gap-5">
                <p>
                  {p1} <br />
                </p>
                <p>{p2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
