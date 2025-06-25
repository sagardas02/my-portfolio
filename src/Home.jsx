import React from "react";
import emoji from "./image/myemoji2.png";
import linkedin from "./image/linkedin.svg"
import github from "./image/github.svg"
import facebook from "./image/facebook.svg"

export default function Home() {
  return (
    <div className="main">
      <div className="header">
        <h1 className="intro">Hii,I am Sagar!</h1>
        <div className="img">
          <img src={emoji} alt="" className="my-img" />
        </div>
        <h1 className="intro1">DevOps Engineer</h1>
        <p>I craft pipelines, tame servers, and turn complex deployments into smooth, repeatable magic.</p>
      </div>
      <div className="main-content">
        <div className="sub-content">
          <div className="content-part1">
            <div className="about">
              <h1>About me</h1>
              <p>
               As a motivated and detail-oriented fresher in DevOps, I am passionate about automating workflows, optimizing infrastructure, and ensuring seamless software deployment. I have a solid foundation in Linux, AWS, and CI/CD tools, with prior experience in web development using HTML, CSS, JavaScript, and React.js. This background gives me a strong understanding of application development and deployment. I am a quick learner, adept at problem-solving, and committed to staying updated with industry trends. My goal is to contribute effectively to a dynamic team, enhance my technical skills, and build scalable, efficient, and secure DevOps solutions.
              </p>
            </div>
            <div className="skills">
              <h1>Skills</h1>

              <div className="strong">
                <strong>Linux, Docker</strong>
                <div className="hr"></div>
              </div>
              <div className="strong">
                <strong>Jenkins, Gitlab, ArgoCD</strong>
                <div className="hr2"></div>
              </div>
              <div className="strong">
                <strong>Kubernetes, Terraform</strong>
                <div className="hr3"></div>
              </div>
              <div className="strong">
                <strong>Javascript, ReactJs</strong>
                <div className="hr4"></div>
              </div>
            </div>
          </div>
          <div className="content-part2">
            <div className="education">
              <h1>Experience</h1>
              <div className="bca-container">
 <h3>Apprenticeship in Full Stack Development</h3>
                <h4>AcesofTech Academy, Kolkata,India</h4>
                <h6>April 2024 - September</h6>
                <p>
                  During my apprenticeship, I gained hands-on experience in full-stack development using React, Express, MongoDB, JWT, Multer, Cloudinary, and Axios, building secure, efficient, and dynamic web applications.
                </p>
              </div>
            </div>
            <div className="love">
              <h1>What else I Love❤️</h1>
              <p>
                In my spare time, you will find me reading books, writing
                articles, contributing to community and occasionally cooking
                especially with friends and family.
              </p>
              <p>
                I am a social person, I like listening to stories and real life
                experiences. Travelling and exploring lands are always my
                favorite break from work.
              </p>
            </div>
          </div>
          <div className="content-part3">
            <div className="contact">
              <h1>Contact</h1>
              <p>Guwahati, India</p>
              <p>Kolkata, India</p>
              <p>sagardas4work@gmail.com</p>
              <a href="https://www.linkedin.com/in/sagar-das-87669625a/">
          <img src={linkedin} alt="" className="linkedin-icons" />
          </a>
          <a href="https://github.com/sagardas02">
          <img src={github} alt="" className="github-icons" />
          </a>
          <a href="https://www.facebook.com/sagartitu.das?mibextid=LQQJ4d">
          <img src={facebook} alt="" className="facebook-icons" />
          </a>
            </div>
            <div className="experience">
              <h1>Education</h1>
              <div className="exp-container">
                               <h3>Bachelors in Computer Application</h3>
                <h4>Gauhati University, Guwahati,India</h4>
                <h6>September 2020 - Present</h6>
 
                               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-part4">
        <div className="project">
          <h1>PROJECTS</h1>
          <h4>1. MY PORTFOLIO PROJECT</h4>
          <p>
            I developed a portfolio website using HTML, CSS, and
            React.js. It showcases my web development skills, projects, and
            experiences, featuring interactive elements and smooth navigation.
            The site highlights my expertise in front-end development and my
            commitment to creating user-friendly web applications. Explore my
            portfolio to learn more.
          </p>
          <h4>2. NEWS PORTAL PROJECT</h4>
          <p>
          I am developing a comprehensive News Portal utilizing HTML,
                  CSS, and React.js for the frontend, and Express.js and MongoDB
                  for the backend. The project incorporates various libraries,
                  including JSON Web Token for secure authentication and
                  Cloudinary for efficient image uploading. This project aims to
                  deliver a seamless user experience by providing up-to-date
                  news content, user authentication, and multimedia management.
                  Through this endeavor, I am honing my skills in full-stack
                  development, learning to integrate different technologies, and
                  ensuring a responsive and user-friendly interface for optimal
                  user engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
