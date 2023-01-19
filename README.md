<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bitruns/GymManagmentSystem"></a>

<h3 align="center">Matthew Sharpe's Gym Managment System</h3>

  <p align="center">
    A Simple Gym Managment System made for Naveed Ejaz and Salim Choudhury
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!--[![Product Name Screen Shot][product-screenshot]](https://example.com)-->

### Node.js + MySQL Gym managment system! <br> Built with passport and sequelizer for authentication and storage. <br> Plans to integrate BCrypt for password encryption.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Node.js]][Node-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This project uses Node.js with MySQL for the backend, and HTML and Bootstrap as the frontend.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  npm install 
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bitruns/GymManagmentSystem.git
   ```
2. Install NPM packages/dependencies
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Construct Data Structures for member-trainers-admins-timeslot
    - [ ] MySQL Sequelize models admin-gym-member-trainer-timeslot
    - [ ] User Auth Passports (local) for admin-member
    - [ ] Add menu for trainer with own passport
    - [ ] Possibly encrypt passwords? Bcrypt
- [ ] Construct Routes for admin-member
  - [ ] Member route populate
    - [ ] Member Authentication (MUST HAVE)
    - [ ] POST - Login access point for member
    - [ ] GET - Account Information retreival access point for member
    - [ ] POST - Ask for trainer
    - [ ] PUT - Update Account Info AP for member
    - [ ] POST - Member timeslot selection
  - [ ] Admin Route Populate
    - [ ] Admin Auth (MUST HAVE)
    - [ ] POST - Login access point for admin to admin dashboard
    - [ ] POST - Create new Gym
    - [ ] POST - Create new member
    - [ ] POST - Create new trainer
    - [ ] GET - Get Gym info
    - [ ] GET - Get member info
    - [ ] GET - Get Trainer info
    - [ ] PUT - Update Gym info
    - [ ] PUT - Update member info
    - [ ] PUT - Update Trainer info
    - [ ] PUT - Change admin password
    
- [ ] Feature 3
    - [ ] Nested Feature

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Matthew Sharpe - matthew0sharpe@gmail.com

Project Link: [https://github.com/bitruns/GymManagmentSystem](https://github.com/bitruns/GymManagmentSystem)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Naveed Ejaz]()
* [Salim Chouhoudry]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/matt-sharpe/
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/Node-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Node-url]: https://nodejs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 