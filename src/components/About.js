import React from 'react';

export default function About() {
    return (
        <div className="about-wrapper">
            <div>
                <h1>Hi, I am Abhishek! 👋</h1>
                <blockquote>
                    <p>💻 Full-stack Software Engineer | React + Python</p>
                </blockquote>
                <p className="about-links-container">
                    <a href="https://twitter.com/krptic_07">
                        <img
                            src="https://img.shields.io/twitter/follow/krptic_07?style=social"
                            alt="Twitter: @krptic_07"
                        />
                    </a>
                    <a href="https://github.com/krptic07">
                        <img
                            src="https://img.shields.io/github/followers/krptic07?label=follow&style=social"
                            alt="GitHub: @krptic07"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/krabhishek26/">
                        <img
                            alt="Linkedin: @krabhishek26"
                            src="https://img.shields.io/badge/-Kumar%20Abhishek-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/krabhishek26/"
                        />
                    </a>
                    <a href="mailto:kumarabhishek22101997@gmail.com">
                        <img
                            src="https://img.shields.io/badge/Gmail-@krptic07-red"
                            alt="Gmail: @krptic07"
                        />
                    </a>
                </p>
                <p>
                    My passion lies in solving challenging problems, designing algorithms, and
                    communicating complex ideas to non-technical stakeholders.
                </p>
                <p>
                    I always look to exceed expectations and am effective both working as an
                    individual and as part of a team.
                </p>
                <p>
                    In my spare time, I like to travel 🚶, read books 📚, listen to music 🎧 and
                    watch movies 📺.
                </p>
                <p>
                    I enjoy learning new things and connecting with people across a range of
                    industries. If you ever want to bounce ideas off of me, please feel free to
                    reach out on twitter or email. 😄
                </p>
                <hr className="about-separator" />
                <h2>⚡ Technical Skills ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Area</th>
                        <th>Proficiencies</th>
                    </tr>
                    <tr>
                        <td>FrontEnd</td>
                        <td>React, Redux, Angular, RxJs, SASS, TypeScript</td>
                    </tr>
                    <tr>
                        <td>BackEnd</td>
                        <td>Node.js, Express, Django</td>
                    </tr>
                    {/* <tr>
                        <td>CI/CD</td>
                        <td>CircleCI, GitHub Actions, Azure Pipelines</td>
                    </tr> */}
                    {/* <tr>
                        <td>DevOps</td>
                        <td>Docker, Ansible, Fastlane, Nginx, Makefile</td>
                    </tr> */}
                    <tr>
                        <td>Mobile</td>
                        <td>React Native</td>
                    </tr>
                    {/* <tr>
                        <td>Bots</td>
                        <td>Botkit, Rasa</td>
                    </tr> */}
                    <tr>
                        <td>UI Frameworks</td>
                        <td>Material-UI, Bootstrap</td>
                    </tr>
                    <tr>
                        <td>Web technologies</td>
                        <td>HTML5, CSS3, ES7+</td>
                    </tr>
                    <tr>
                        <td>Databases</td>
                        <td>MongoDB, PostgreSQL</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Git, Eslint, Prettier, Webpack</td>
                    </tr>
                    {/* <tr>
                        <td>Languages</td>
                        <td>C, C++, Java</td>
                    </tr> */}
                </table>
            </div>
        </div>
    );
}
