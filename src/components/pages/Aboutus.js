import React, { useState } from "react";
import styled from "styled-components";
import HeaderBarCover from "../HeaderBarCover";
import Fade from "react-reveal/Fade";

function Aboutus() {
  return (
    <Container>
      <HeaderBarCover />
      <ImageCover>
        <div className="backdrop" />
        <img src="/image-file/about-cover.png" />
        <Fade left>
          <h1>
            THE MANDATE <br />
            <hr />
            "Now the Hour has Come to Liberate the World from all oppression of
            the devil through the preaching of the word of faith"
          </h1>
        </Fade>
      </ImageCover>
      <ContentBody>
        <div className="content-div">
          <AboutUsContent
            imgLink="/image-file/bishop-about-image.jpg"
            imgAlt="bishop-image"
            contentTitle="Bishop David O. Oyedepo"
            imgDescription="David Oyedepo received a mandate from God in an 18 hour 
            long vision in May 1981 to liberate the world from all oppression of the 
            devil through the preaching of the word of faith. This is the inaugural vision 
            that led to the founding of the Living Faith Church World Wide (LFCWW), 
            first called Liberation Faith Hour Ministries, in 1981. In 1982 he married 
            Florence Abiola Akano (now known as Faith). They have four children together 
            (David Jr., Isaac, Love and Joys). David Jr. and Isaac Oyedepo were ordained as 
            Pastors in May 2007 by Kenneth Copeland. David Jr. is the Resident Pastor of Faith 
            Tabernacle, Ota, Nigeria, while Isaac Oyedepo is the current Resident Pastor of
            Winners Chapel International, Maryland. On September 27, 1954, Bishop David Olaniyi Oyedepo, 
            a native of Omu-Aran, Kwara State, Nigeria, was born in Osogbo into a religiously 
            mixed family. His father, Ibrahim, was a Muslim healer, while his mother, Dorcas, 
            was a member of the Eternal Order of the Cherubim and Seraphim Movement , a branch 
            of the Aladura Movement in Nigeria. He was raised by his grandmother in Osogbo, who 
            inculcated in him the virtues of Christian life through the early morning prayers 
            which he attended with her. She also taught him the importance of tithing and other
            basic Christian virtues. David Oyedepo was “born again” in 1969 through the 
            influence of his former teacher, Ms. Betty Lasher, who took special interest in 
            him during his high school days. He studied Architecture at Kwara State Polytechnic,
            Ilorin and worked briefly with the Federal Ministry of Housing in Ilorin before 
            resigning to concentrate on missionary work.  David Oyedepo also earned a Ph.D. in 
            Human Development from Honolulu University, Hawaii, United States of America. 
            David Oyedepo received a mandate from God in an 18 hour long vision in May 1981 to 
            liberate the world from all oppression of the devil through the preaching of the 
            word of faith. This is the inaugural vision that led to the founding of the Living 
            Faith Church World Wide (LFCWW), first called Liberation Faith Hour Ministries, in 
            1981. Two years after, on September 17, 1983, Pastor Enoch Adeboye, the General 
            Overseer of the Redeemed Christian Church of God, ordained David Oyedepo and his 
            wife, Florence Abiola Akano (now known as Faith Abiola Oyedepo) as pastors and also 
            officially commissioned the newly started church. Five years after, David Oyedepo 
            was ordained a Bishop. Living Faith Church (AKA Winners Chapel) started in Kaduna, 
            but David Oyedepo moved to Lagos, the former capital of Nigeria in September 1989, 
            to start a new branch after receiving an instruction from God to reach out to the 
            population in Lagos. This Church in Lagos grew to become the International 
            headquarters of Living Faith Church, with a constantly increasing flow of crowds 
            spilling over to adjacent roads, and on decks of uncompleted buildings nearby, 
            compelling people to stand for hours to listen to his teachings. This led to the 
            building of the renowned Faith Tabernacle, as instructed by God.
            David Oyedepo is an acclaimed author and publisher who has written over 70 
            titles apart from periodicals.  He is also Chairman/Publisher of Dominion Publishing 
            House (DPH), a publishing arm of his ministry.  DPH has over 4 million prints in 
            circulation to date. Through God’s grace upon him, Covenant University, Landmark 
            University, Faith Academy and Kingdom Heritage Model Schools have been established 
            to equip the youth for impact."
          />
          <AboutUsContent
            imgLink="/image-file/faith-tabernacle.jpg"
            imgAlt="bishop-image"
            contentTitle="Faith Tabernacle"
            imgDescription="In 1998, David Oyedepo set forth to build a new building to 
            accommodate the increasing number of worshippers. This resulted in the Ministry’s 
            acquisition of the initial 530-acre (2.1 km2) facility, known as Canaanland, 
            which serves as the headquarters of the Ministry. It is the home of the 50,000-seat 
            capacity auditorium, the ‘Faith Tabernacle’, which is reputed to be the largest 
            Church auditorium in the world; a feat also recorded in the Guinness Book of 
            Records. The speed of the construction of Faith Tabernacle was breath taking, 
            considering the size of the building. Construction of this gigantic project was 
            completed within 12 months, which experts claim could only have been a miracle, 
            because such a project should normally take a minimum of three years to complete. 
            To the glory of God, this building was built debt-free. This 50,000-seat edifice 
            was dedicated on September 18, 1999.
            Canaanland is in Ota, a suburb of Lagos and is a 10,500-acre (42 km2) campus 
            that houses the 50,000-seat church building, the church secretariat, the church’s 
            youth chapel, a primary school called Kingdom Heritage Model School, a full 
            boarding mission secondary school called Faith Academy with over 1,500 students, 
            and Covenant University which accommodates over 7,000 students, fully resident in 
            ultra-modern hostel facilities, with fully equipped faculty buildings and numerous 
            staff housing facilities.  Canaanland also houses the Canaancity estate, other 
            establishments operated by the church such as a bakery, a bottled water processing 
            plant, petrol stations, various restaurants and shopping stores, several residential 
            houses that provide for the over 2,000 church employees, and guest houses. Four banks 
            are also located in this estate, three of which are branches of external commercial 
            banks and one which is a community and micro-finance bank operated by the Church."
          />
          <AboutUsContent
            imgLink="/image-file/wci-biyem-assi-abt.jpg"
            imgAlt="bishop-image"
            contentTitle="Winnners' Chapel International Biyem Assi"
            imgDescription="Winners' Chapel Internation Biyem is an extension of Faith tabernacle Canaanland
            in Biyem-Assi, Yaounde, Cameroon. Winners' Chapel Biyem-Assi is noted to be the home
            of signs and wonders where God manifests miracles, signs, wonders, all matter of healings
            academic breakthrough, the wonders are endless. At Winners' Chapel Biyem-Assi, God confirms his
            word which he gave through Bishop David O. Oyedepo as the mandate through the preaching of 
            the word of faith through representatives of Bishop in Biyem-Assi. Winners' Chapel Biyem-Assi
            current Resident Pastor is Pastor Aniekan Sam. At winners' chapel Biyem-Assi, we have variety
            of weekly programs going from covenant hour of Prayers early in the morning from 6:00-7:00 am
            to sundays services (where we have 2 services: first from 7:00-9:15am and second 9:15-11:15am)
            check the programs page for more information of all our programs"
          />
        </div>
      </ContentBody>
    </Container>
  );
}

function AboutUsContent(props) {
  const [showMore, setShowMore] = useState(false);
  function showMoreState() {
    setShowMore(!showMore);
    console.log(showMore);
  }
  return (
    <ContentContainer>
      <div className="content-container">
        <h2>
          {props.contentTitle} <hr />
        </h2>
        <h1 read={showMore}>{props.imgDescription}</h1>
        <div className="read-more" onClick={showMoreState}>
          Read More
        </div>
      </div>
      <div className="image-container">
        <img src={props.imgLink} alt={props.imgAlt} />
      </div>
    </ContentContainer>
  );
}

export default Aboutus;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentBody = styled.div`
  display: flex;
  width: 100%;
  .content-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .aside-div {
    width: calc(100%-80%);
  }
`;

const ImageCover = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .backdrop {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  h1 {
    position: absolute;
    left: 1cm;
    bottom: 5cm;
    font-family: times new roman;
    font-size: 3em;
    width: 20cm;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    hr {
      margin: 0 2em;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.5em;
  overflow: hidden;
  .image-container {
    width: 50%;
    height: 16cm;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .content-container {
    width: 50%;
    overflow: inherit;
    padding: 10px 20px;
    font-family: times new roman;
    background-color: rgba(0, 0, 0, 0.15);
    h1 {
      overflow: hidden;
      height: ${(props) => (props.read ? "16cm" : "12cm")};
    }
    h1,
    h2 {
      font-weight: normal;
      font-size: 20px;
      padding: 0px 30px;
      line-height: 1.5em;
      text-align: justify;
    }

    h2 {
      font-weight: bold;
      text-align: center;
      margin-bottom: 10px;
      hr {
        margin: 5px 2cm;
      }
    }
  }
  .read-more {
    padding: 10px 20px;
    font-size: 20px;
    background-color: rgb(240, 195, 60);
    text-align: center;
    color: white;
    font-family: times new roman;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
