import React, { useState } from "react";
import images from "./Assets/image.jpg";
import akshit from "./Assets/akshit.jpg";
import vinayak from "./Assets/vinayak.jpg";
import shubham from "./Assets/shubham.jpg";
import yeeshu from "./Assets/yeeshu.jpg";
import parth from "./Assets/parth.jpg";
import harsh from "./Assets/harsh.jpeg";
import prashant from "./Assets/prashant.jpg";
import gaurav from "./Assets/gaurav2.png";
import ambar from "./Assets/ambar.jpg";
import moksh from "./Assets/moksh.jpeg";
import nikhil from "./Assets/nikhil.jpg";
import pratiman from "./Assets/pratimaan.png";
import rounak from "./Assets/rounak.jpg";
import sahil from "./Assets/sahil.png";
import shrey from "./Assets/shrey.jpeg";
import garg from "./Assets/garg.jpeg";
import sudhanshu from "./Assets/sudhanshu.jpg";
import vinay from "./Assets/vinay.jpg";
import yathart from "./Assets/yathart.jpg";
import waquee from "./Assets/waquee.jpg";
import "./team.css"
import linked from "./Assets/icon2.png";
import inst from "./Assets/icon3.png";
import baba from "./Assets/cough.png"

const MeetTheTeam = () => {
  const [selectedCommittee, setSelectedCommittee] = useState("executive");
  const committees = {
    patron: {
      title: "ADVISORY BOARD",
      members: [
        {
          name: "Shri Narendra Modi",
          position: "Hon'ble Prime Minister of India",
          image: images,
        },
        {
          name: "Shri Narendra Modi",
          position: "Hon'ble Prime Minister of India",
          image: images,
        },
        {
          name: "Shri Narendra Modi",
          position: "Hon'ble Prime Minister of India",
          image: images,
        },
        {
          name: "Shri Narendra Modi",
          position: "Hon'ble Prime Minister of India",
          image: images,
        },
        {
          name: "Shri Narendra Modi",
          position: "Hon'ble Prime Minister of India",
          image: images,
        },
        {
          name: "Shri Narendra Modi",
          position: "Hon'ble Prime Minister of India",
          image: images,
        },
      ],
    },
    executivePatron: {
      title: "EXECUTIVE BOARD",
      members: [
        {
          name: "Akshit Kain",
          position: "Chairperson",
          image: akshit,
          linkedin: "https://www.linkedin.com/in/akshitkain/",
          insta: "https://www.instagram.com/akshit_kain/",
        },
        {
          name: "Parth Bansal",
          position: "Vice Chairperson",
          image: parth,
          linkedin: "https://www.linkedin.com/in/parth-bansal-627724290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          insta: "https://www.instagram.com/parth._.04/profilecard/?igsh=MW5vYWozamtxc2pqNw==",
        },
        {
          name: "Vinayak Sharma",
          position: "Club Co-ordinator",
          image: vinayak,
          linkedin: "https://www.linkedin.com/in/vinayak-sharma-b8379a302/",
          insta: "https://www.instagram.com/ig.vinayaksharma/?utm_source=ig_web_button_share_sheet",
        },
        {
          name: "Prashant Singh",
          position: "Secretary",
          image: prashant,
          linkedin: "https://www.linkedin.com/in/prashant-singh-30314a2a9/",
          insta: "https://www.instagram.com/_prashant__4646/",
        },
        {
          name: "Baba Tillu",
          position: "Treasurer",
          image: baba,
          linkedin: "",
          insta: "",
        },
        {
          name: "Gaurav Patel",
          position: "Software & IT Chair",
          image: gaurav,
          linkedin: "https://www.linkedin.com/in/gaurav-patel-50a6041b5/",
          insta: "https://www.instagram.com/gaurav6.0/",
        },
        {
          name: "Harsh Bassal",
          position: "Technical Chair",
          image: harsh,
          linkedin: "https://www.linkedin.com/in/harsh-bassal-3a47811b0/",
          insta: "https://www.instagram.com/harsh_bassal_/",
        },
        {
          name: "Shubham Kumar",
          position: "Program Chair",
          image: shubham,
          linkedin: "https://www.linkedin.com/in/shubhamkumar56018/",
          insta: "",
        },
        {
          name: "Yeeshu",
          position: "Finance Chair",
          image: yeeshu,
          linkedin: "https://www.linkedin.com/in/yeeshu-nayak-314787251",
          insta: "https://www.instagram.com/yeeshu0111/profilecard/?igsh=MXBycjRqMjdoa2UzMg==",
        },
      ],
    },
    copatron: {
      title: "CORE COMMITTEE",
      members: [
        {
          name: "Ambar Chaurasiya",
          position: "Member",
          image: ambar,
          linkedin: "https://www.linkedin.com/in/ambar-chaurasiya-5759242a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          insta: "https://www.instagram.com/ambar_chaurasiya?igsh=MW1pZDAyNGRkZnhhcg==",
        },
        {
          name: "Moksh Garg",
          position: "Member",
          image: moksh,
          linkedin: "https://www.linkedin.com/in/moksh-garg-6092b7291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          insta: "https://www.instagram.com/mokshgarrg/profilecard/?igsh=d3MzZDhoaWhudjJ3",
        },
        {
          name: "Nikhil Mathuriya",
          position: "Member",
          image: nikhil,
          linkedin: "",
          insta: "https://www.instagram.com/nikhilmathuriya9/profilecard/?igsh=YWQ4Mzk0MjFsaDd1",
        },
        {
          name: "Pratimaan Tripathi",
          position: "Member",
          image: pratiman,
          linkedin: "http://linkedin.com/in/pratimaan-tripathi-9a80b2294",
          insta: "https://www.instagram.com/_pratimaannnn/profilecard",
        },
        {
          name: "Rounak Kumar Jha",
          position: "Member",
          image: rounak,
          linkedin: "https://www.linkedin.com/in/rounak-jha-92a867333/",
          insta: "https://www.instagram.com/jharounak13/",
        },
        {
          name: "Sahil Minz",
          position: "Member",
          image: sahil,
          linkedin: "https://www.linkedin.com/in/sahil-minz-939655275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          insta: "https://www.instagram.com/sahil_minz13/profilecard/?igsh=MWJkOW45cmo0aG16ZQ==",
        },
        {
          name: "Shreyvardhan Singh",
          position: "Member",
          image: shrey,
          linkedin: "https://www.linkedin.com/in/shreyvardhan-singh-13a923202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          insta: "https://www.instagram.com/shrey_vardhan_singh/profilecard/?igsh=djg1bmZrcWFmaTBr",
        },
        {
          name: "Shubham Garg",
          position: "Member",
          image: garg,
          linkedin: "https://www.linkedin.com/in/shubham-garg-48ab3a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          insta: "https://www.instagram.com/shubham_garg4444/profilecard/?igsh=MXYwYmg2MnlhYjFkZw==",
        },
        {
          name: "Sudhanshu Rajput",
          position: "Member",
          image: sudhanshu,
          linkedin: "",
          insta: "",
        },
        {
          name: "Vinay Kumar",
          position: "Member",
          image: vinay,
          linkedin: "https://www.linkedin.com/in/vinay-kumar-100a94311",
          insta: "https://www.instagram.com/hii_i_am_vinay/profilecard/?igsh=N3BubzN4bjYzNWsx",
        },
        {
          name: "Waquee Mubarak",
          position: "Member",
          image: waquee,
          linkedin: "https://www.linkedin.com/in/waquee-mubarak-a69041208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          insta: "https://www.instagram.com/waquee_mk/profilecard/?igsh=dTUwejdsdnpicGRw",
        },
        {
          name: "Yatharth Pal",
          position: "Member",
          image: yathart,
          linkedin: "https://www.linkedin.com/in/yatharth-pal-3b31a4226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          insta: "https://www.instagram.com/yattharrthh/profilecard/?igsh=MXZvbzZhYjUyMXBqZg==",
        },
      ],
    },
  };

  const CommitteeButtons = () => (
    <div className="button-container">
      <div
        className={`committee-button executive ${
          selectedCommittee === "executive" ? "active" : ""
        }`}
        onClick={() => setSelectedCommittee("executive")}
      >
        Executive Board
      </div>
      <div
        className={`committee-button core ${
          selectedCommittee === "core" ? "active" : ""
        }`}
        onClick={() => setSelectedCommittee("core")}
      >
        Core Committee
      </div>
    </div>
  );

  const onLinkedIn = (linkedinURL)=>{
    window.location.href= linkedinURL
  }

  const onInstagram = (instaURL)=>{
    window.location.href = instaURL
  }

  const MemberCard = ({ name, position, image, linkedin, insta }) => (
    <div className="cardTeam">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <h3 className="card-name">{name}</h3>
      <p className="card-position">{position}</p>
      <div className="socialLinks">
        <div className="social">
          <img style={{cursor:"pointer"}} onClick={()=>onLinkedIn(linkedin)} src={linked} alt="linkedIn Url" />
          <img style={{cursor:"pointer"}} onClick={()=>onInstagram(insta)} src={inst} alt="Instagram URL" />
        </div>
      </div>
    </div>
  );

  const PatronSection = ({ title, members }) => (
    <div className="section patron">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="members-flex">
        <div className="row row-single">
          <MemberCard {...members[0]} />
        </div>
        <div className="row row-two">
          <MemberCard {...members[1]} />
          <MemberCard {...members[2]} />
        </div>
        <div className="row row-three">
          <MemberCard {...members[3]} />
          <MemberCard {...members[4]} />
          <MemberCard {...members[5]} />
        </div>
        <div className="row row-three">
          <MemberCard {...members[6]} />
          <MemberCard {...members[7]} />
          <MemberCard {...members[8]} />
        </div>
      </div>
    </div>
  );

  const Section = ({ title, members, className }) => (
    <div className={`section ${className}`}>
      {title && <h2 className="section-title">{title}</h2>}
      <div className="members-flex">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <CommitteeButtons />
      {selectedCommittee === "executive" && (
        <PatronSection
          title={committees.executivePatron.title}
          members={committees.executivePatron.members}
        />
      )}
      {selectedCommittee === "core" && (
        // <PatronSection title={committees.patron.title} members={committees.patron.members} />
        <Section
          title={committees.copatron.title}
          members={committees.copatron.members}
          className="copatron"
        />
      )}
      {/* <Section
                title={committees.copatron.title}
                members={committees.copatron.members}
                className="copatron"
            /> */}
    </div>
  );
};

export default MeetTheTeam;
