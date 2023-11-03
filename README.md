# Team14-City Explorer

City Explorer is an immersive mobile platform designed specifically for tourists and explorers who desire a rich, authentic experience when visiting new cities. This application integrates user-generated content and real-time event information, creating a comprehensive travel companion that provides a unique, interactive way for users to explore unfamiliar cities.

## ➕ Features

Responsive Design: Crafted for an optimal user experience, the app adjusts smoothly to various screen sizes, ensuring accessibility on all devices.

User Authentication: Provides secure login and sign-up options, requiring a unique username, a valid email address, and a secure password. A guest mode is also available for those who prefer browsing without interaction capabilities.

Video Posts: Users can share their real-time experiences by posting short videos of different city spots, offering viewers an authentic glimpse of various destinations.

Engagement Tools: The app allows for interactive communication through options to like or comment on the video posts, fostering a sense of community among users.

Location-Based Content: Features an adjustable location setting, enabling users to access content specific to their city of interest, facilitating targeted exploration and efficient trip planning.

Upcoming Events Information: Includes a dedicated tab that lists all upcoming local events in the selected city, keeping tourists informed about the latest happenings and activities.

# Technologies Used:

React.js

CSS

TypeScript

Firebase

Spring Boot

Spring Data JPA

Hibernate

MySql

Expo

## 💻 Install
Navigate to the mobile-app folder in the project directory to install all required dependencies. 
```sh
cd mobile-app
```
**For MAC OS**

Please remove existing node modules using below commands 
```sh
rm -rf node_modules/

rm package-lock.json
```

Install the needed packages while in the root folder of the project
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

nvm install 18.17.0

npm install -g npm@10.2.0
```
**For Windows**

Please remove existing node modules using below commands
```sh
npm install -g rimraf
rimraf node_modules
del package-lock.json
npm uninstall -g yarn
```
Please clean npm cache
```sh
npm cache clean --force

```
Install needed npm packages
```sh
npm install
npm install -g npm@10.2.0

```
**Common to both OS:**

To install the expo
```sh
npm install expo
```

First you need to install Nodejs and npm, this is different depending on the OS you are running so it is easier to check the node [page](https://nodejs.org/en/download/)

Install [expo](https://expo.io/learn), if it fails run you might need to run this with sudo
```sh
npm install expo-cli --global
```

## 📱 Usage
Navigate to the mobile-app folder in the project directory 
```sh
cd mobile-app
```

To Start expo all you have to do is run this line
```sh
npx expo start --go
```

Download and install the Expo Go app from the Apple App Store or Google Play Store on your mobile device.

Your computer and mobile device should be on the same Wi-Fi network for seamless connectivity.

Once the Metro Bundler is running and displaying a QR code:

iOS Users: Open the camera app, point it at the QR code, and click on the notification prompt to open the app in Expo Go.

Android Users: Open the Expo Go app and use the "Scan QR Code" option to scan the QR code.

After scanning, the app will begin building and then load on your mobile device. The initial build may take some time depending on the size of the project and your network speed.
