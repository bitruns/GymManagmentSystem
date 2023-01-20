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
<a name="windowssql">https://www.geeksforgeeks.org/how-to-install-mysql-on-linux/</a>
<a name="macsql">https://www.geeksforgeeks.org/how-to-install-mysql-on-macos/</a>
<a name="linuxsql">https://www.geeksforgeeks.org/how-to-install-mysql-on-linux/</a>
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
# Getting Started

This project uses Node.js with **DETACHED** MySQL for the backend, and HTML + Bootstrap/CSS as the frontend.

The Node Backend is made to use an external MySQL server for a database. <br><br>
Hence, the mechanisms for shipping the program to a cloud hosting service are already in place. <br><br>Due to this however, MySQL will need to be installed on YOUR machine, and the database-creds.json file must be populated by you.
<br><br>
#### Windows MySQL Installation Guide: [Here](#windowssql) <br>
#### Mac MySQL Installation Guide: [Here](#macsql) <br>
#### Linux MySQL Installation Guide (My Setup): [Here](#linuxsql) <br>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Once a database is created (ex: gym_database), and because of the local DB installation, you can populate the "database-creds.json" file with your: <br>
1. **Root Login information**, 
2. **Databse Host** <em>(localhost)</em>, 
3. **Database Port** <em>(default is 3306)</em>,
4. **Database Name** <em>(tables will be created by script)</em>,
5. **Node Server Port** <em>(3000 by convention)</em>,
6. **Node Server Host** <em>(localhost)</em>
</ol>
If this were an online service, you would setup accounts of varying security clearances, but for a local database you can use root.

Once the database is setup, proceed to prerequisites and installation.
# Prerequisites
1. Install Node.js Latest on your machine
  - https://nodejs.org/en/download/
  - Or do ``` nvm install 19.4.0``` to use the LTS used on this project

2. Make sure NPM (node package manager) is installed and updated to LTS
  - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
  - Or do ```npm install -g npm@latest``` to update NPM to LTS

 
# Installation
Once Prerequisites are installed do the following

1. Clone the repo
   ```sh
   git clone https://github.com/bitruns/GymManagmentSystem.git
   ```
2. Unzip Folder and open GymManagementSystem/ directory with terminal

3. Once in master directory: Install NPM packages/dependencies
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
# Usage
Once all dependencies have been installed use the next two commands to run the app

1. Repo comes with prebuilt css files however for development you can enable live scss updates with
  ```sh
  npm run csswatch
  ```
2. From a terminal different to where you ran csswatch, run the following to start the program
  ```sh
  nodemon app.js
  ```

3. Using any web browser (preferrably Chrome), visit
  ```sh
  http://localhost:3000
  ```
4. Top left is the navigation menu. There are no default member accounts. However there is one admin account initialized when the program was built.
  ```sh
  Admin ID: 1
  Admin Password: password
  ```

5. In original navigation menu, the options will have changed. Visit the admin dashboard
  - Here you can create new users by inputing their Name and Password
    - Once the account is created, a page will display its Name, Password, and **MemberID**
  - You can retrieve member account data by inputing their ID into the ID bar and pressing request. Invalid MemberIDs will result in nothing.

6. Once a member has been created, logout in the nav menu and access the Member Login. Enter the MemberID and Password, you will be redirected to the member profile management page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Construct Data Structures for member-trainers-admins-timeslot
    - [X] MySQL Sequelize models admin-gym-member-trainer-timeslot
    - [X] User Auth Passports (local) for admin-member
    - [ ] Add menu for trainer with own passport
    - [ ] Possibly encrypt passwords? Bcrypt
- [x] Construct Routes for admin-member
  - [x] Member route populate
    - [x] Member Authentication (MUST HAVE)
    - [x] POST - Login access point for member
    - [x] GET - Account Information retreival access point for member
    - [x] POST - Ask for trainer
    - [x] PUT - Update Account Info AP for member
    - [x] POST - Member timeslot selection
  - [x] Admin Route Populate
    - [x] Admin Auth (MUST HAVE)
    - [x] POST - Login access point for admin to admin dashboard
    - [x] POST - Create new Gym
    - [x] POST - Create new member
    - [x] POST - Create new trainer
    - [x] GET - Get Gym info
    - [x] GET - Get member info
    - [x] GET - Get Trainer info
    - [x] PUT - Update Gym info
    - [x] PUT - Update member info
    - [x] PUT - Update Trainer info
    - [x] PUT - Change admin password
    
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