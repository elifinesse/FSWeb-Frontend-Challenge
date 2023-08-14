function Profile() {
  const infoTR = [
    "Doğum Tarihi",
    "İkamet Şehri",
    "Eğitim Durumu",
    "Tercih Ettiği Rol",
  ];
  const infoLabel = [
    "Date of Birth",
    "Place of Residence",
    "Undergrad Education",
    "Master's",
    "Preferred Role",
  ];
  const infoData = [
    "14.03.1994",
    "Aydin/Turkey",
    "Bogazici Uni. English 2017",
    "Heidelberg Uni. Transcultural Studies 2021",
    "Frontend, UI",
  ];
  return (
    <div className="bg-light-grey">
      <div class="circle-decoration">
        <div className="circle-1"></div>
      </div>

      <div className="bg-light-grey  dark:bg-dark-grey flex justify-center pb-16">
        <div className="container">
          <h2 className="skills-heading  text-center mt-16 dark:text-white">
            Profile
          </h2>
          <div className="profile-info">
            <div className="basic-info bg-white dark:bg-[#525252]">
              <h3 className="info-h3 text-pembe mb-8">Basic Information</h3>
              <div className="personal-info">
                {infoLabel.map((info, idx) => (
                  <div className="info-pair dark:text-white">
                    <p className="info-label font-semibold">{info}</p>
                    <p className="info-data">{infoData[idx]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-me dark:text-white">
              <div className="about-highlighted">
                <h3 className="info-h3 text-black dark:text-white pb-5">
                  About me
                </h3>
              </div>
              <div className="flex flex-col gap-5">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veniam aut, odit laborum aliquam voluptatum nisi mollitia.{" "}
                  <br />
                </p>
                <p>
                  Mnima accusamus ratione soluta aperiam sit voluptate? Dicta
                  quod deserunt quam temporibus cumque magnam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
