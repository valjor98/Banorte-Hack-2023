# Enhancing Banorte's Hybrid Banking Experience

## Introduction

### Project Background
This project was realized for Banorte, a leading Mexican bank, in its 2023 24-hour Hackathon. Among 50 participants, we won first place and received a 40K MXN check. The project addresses the challenges faced by Banorte in the aftermath of the 2020-2022 pandemic. As digital banking surged due to health constraints, a significant shift back to physical banking was observed once restrictions eased. Our aim is to improve the hybrid human/digital banking infrastructure, particularly targeting young adults (18-29 years) and seniors (>60 years), who are currently underserved by the banking sector.
<p align="center">
  <img src="https://github.com/valjor98/HackathonBan23/assets/76230623/317b01ab-6f75-4fba-a748-26f16c6def54" width="450" title="Team receiving the first place award">
</p>

### Problem Statement
The project's goal is to optimize customer service channels by digitizing certain processes, relieving the strain on physical branches while enhancing the in-branch customer experience. Additionally, the project aims to increase inclusivity by catering to younger adults and seniors.

### FYI
This repository originally only included the back-end. The front-end was in a private repository. I added it here in order to submit the whole application for the MLH Fellowship. Below are my personal contributions to the project:
- Front-end
    - Expense Management
    - Face-recognition 
- Back-end
    - Function
    - DialogFlow integration
    - Intends implementation

## Proposed Solution
Our solution is presented as a collection of three pillars that include both internal improvement factors (enhancements for the physical branches and mobile banking) as well as external strategies (for attracting and retaining customers). These pillars are digital banking, traditional banking, and hybrid banking.

### Digital Banking
The digital banking solution proposes changes to digital channels (mobile banking and products intended for use outside physical locations). This includes a UI redesign, the introduction of a virtual assistant, and emotion recognition for improved user experience.

### UI Redesign
A significant overhaul of the app’s UI has been proposed, aiming to modernize the application’s appearance and make it more user-friendly without compromising current functionality. The design employs the 60-30-10 color palette technique, providing a pleasing perspective to the user.
<p align="center">
  <img src="https://github.com/valjor98/HackathonBan23/assets/76230623/687fe725-6a0c-4ff4-b6ab-78f74d34dba5" width="250" title="Chatbot">
</p>

### Virtual Assistant - Sr. Banorte
The integration of an AI virtual assistant, Sr. Banorte, within the mobile banking application aims to enhance user experience. Sr. Banorte is designed to provide financial coaching, learn and automate expenses, detect fraud, conduct transactions, and offer personalized communication based on user-specific characteristics. It was built using Google Cloud services and DialogFlow. 
<p align="center">
  <img src="https://github.com/valjor98/HackathonBan23/assets/76230623/4e23fcef-feec-4499-b6d2-51bff046f0da" width="400" title="Chatbot">
</p>

### Emotion Recognition for Enhanced User Experiences
Banorte emphasized taking the user’s emotional state into account in our solution. Thus, we proposed a feature to recognize the user’s current emotional well-being when logging in with facial recognition. Due to time, we did not add a login system to the app, as it was a low priority and of low value. However, we added a stand-alone face recognition feature to showcase the proposal in _/face-recognition_.  
<p align="center">
  <img src="https://github.com/valjor98/HackathonBan23/assets/76230623/e8f1cda2-50ad-4272-b127-e463965a9424" width="650" title="Emotion recognition demo">
</p>

### Hybrid Banking
Our hybrid banking strategy, Banorte Generations, focuses on creating a direct link between traditional and digital banking. It aims to capture new customers across different demographics by creating three targeted campaigns - Banorte Youth, Banorte Lifetime, and Banorte University. We included different screens for these programs in the app. These screens are informational more than anything.

- **Banorte Youth**: The Banorte Youth campaign proposes a credit card, Banorte Young, for young adults. It's designed to retain customers beyond their use of the payroll card, incentivizing continued use of Banorte’s mobile banking services.

- **Banorte Lifetime**: The Banorte Lifetime campaign targets older adults, offering extra security measures against phishing and providing exclusive intergenerational benefits.

- **Banorte University**: Banorte University is an educational initiative offering users financial literacy resources.
<p align="center">
  <img src="https://github.com/valjor98/HackathonBan23/assets/76230623/43ca41b0-4c2a-4d89-8194-7bc5f20f3108" width="500" title="Screens">
</p>

### Banorte Expense Management
This feature allows you to create a group and effortlessly divide costs among members. Just input your expenses, specify the participants, and let the feature handle the calculations. It eliminates the need for manual calculations and spreadsheets, making the process of splitting bills hassle-free.
<p align="center">
  <img src="https://github.com/valjor98/HackathonBan23/assets/76230623/1bff9ada-b871-4820-a1c9-e927c3be3d72" width="800" title="Process of dividing payment among a group of people">
</p>

### Tech Stack
Here are the technologies used for the application. Banorte gave us the information that most of its user enters its webpage from their cellphone; Thus, we decided to use React, so it was compatible with cellphones and computers. DialogFlow was used to create the intents and the conversation flow with the user. Firebase was used to store data from the user when chatting with the chatbot.
<p align="center">
  <img src="https://github.com/valjor98/HackathonBan23/assets/76230623/973fb0c5-8ead-4b18-b800-cd7be9e8d97b" width="400" title="Architecture Diagram">
</p>

### Deployment
Link to deploy the application.

## Running the project locally
To run this project, you will need to set up both the front-end and back-end servers on your local machine.

### Front-end setup
The front-end is built with React and TypeScript. To set up the front-end:

- Clone the repository to your local machine.
- Navigate to the front-end directory (cd /path-to-your-dir/front-end).
- Install the dependencies by running ```npm install```.
- Start the server by running npm start. The application will be available at ```http://localhost:3000```.

### Back-end setup
The back-end is built with DialogFlow and Firebase. To set up the back-end:
- Clone the repository to your local machine.
- Navigate to the back-end directory (cd /path-to-your-dir/back-end).
- Start the server by running ```firebase deploy --only functions```. 

### Installation and Run Instructions
This project uses two main components, the front-end developed using React with TypeScript, and the back-end developed to run the DialogFlow chatbot. Follow the instructions below to set up and run the project locally.

# Front-end (React with TypeScript)
First, clone the repository to your local machine using git clone. Then:

- Navigate to the root directory of the cloned repository.
- Install the necessary dependencies using ```npm install```.
- After the installation is complete, you can start the React application using ```npm start```.
- The application should now be accessible via ```http://localhost:3000```.

# Back-end (DialogFlow Chatbot)
You will need to create a DialogFlow project. Here's a helpful guide to create a new DialogFlow project:

- After setting up the DialogFlow project, you'll need to generate a service-account.json file from Google Cloud Console. This file contains the credentials that allow your back-end service to interact with the DialogFlow API.
- Save the service-account.json in the root directory of your project. Please make sure to add service-account.json to your .gitignore file to prevent your credentials from being exposed publicly.
- Install the necessary dependencies for the back-end with ```npm install```.
- After the installation is complete, you can start the DialogFlow Chatbot function using ```firebase deploy --only functions```.

Please remember to replace all placeholders in the .env file with your actual details, such as the project id and other necessary environmental variables.

# Contributors
This project exists thanks to all the people who contribute, my hackahton team. 

# Contact
If you want to contact me you can reach me at a00831133@tec.mx.
