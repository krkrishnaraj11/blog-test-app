# Blog : React Native App 

 
 

Blog App is a react native both in android & ios to view edit delete users blogs

 
 

## Prerequisites 

 
 

- [Node.js > 16](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm)) 

- [Watchman](https://facebook.github.io/watchman) 

- [Xcode 15](https://developer.apple.com/xcode) 

- [Cocoapods 1.13.0](https://cocoapods.org) 

- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) 

- [Android Studio and Android SDK](https://developer.android.com/studio) 

 
 

## Base dependencies 

 
 

- [axios](https://github.com/axios/axios) for networking. 

- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties. 

- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments. 

- [react-navigation](https://reactnavigation.org/) navigation library. 

- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing. 

 
 

## Folder structure 

 
 

This template follows a very simple project structure: 

 
 

- `src`: This folder is the main container of all the code inside your application. 

- `apis`: This folder contains all api list and global api redirect functionalities. 

- `assets`: Asset folder to store all images, vectors, etc. 

- `components`: Folder to store any common component that you use through your app. 

- `config`: Folder to store any kind of constants and config data required throughout the application. 

- `navigation`: Folder to store the navigators and nested navigation functionalities. 

- `screens`: Folder that contains all your application screens/features. 

- `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests. 

- `index.tsx` 

- `styles.ts` 

- `App.js`: Main component that starts your whole app. 

- `index.js`: Entry point of your application as per React-Native standards. 

 
 

## Setup environments 

 
 

### Using scripts from console 

 
 

The project already has scripts to execute the project calling a specific environment defined into the package.json file. 

 
 

#### For iOS 

DEV: `pod install` 

 
 

PROD: `PRODUCTION=1 pod install` 

 
 

DEV/STG/PROD: `yarn ios` or `yarn android` 

 
 

Also, you can use npm following the same rule as before: `npm run ios` 

 
 

## Generate production version 

 
 

These are the steps to generate `.apk`, `.aab` and `.ipa` files 

 
 

### Android 

 
 

1. Generate an upload key 

2. Setting up gradle variables 

3. Go to the android folder 

4. Execute `./gradlew assemble[Env][BuildType]` 

 
 

Note: You have three options to execute the project 

`assemble:` Generates an apk that you can share with others. 

`install:` When you want to test a release build on a connected device. 

`bundle:` When you are uploading the app to the Play Store. 

 
 

For more info please go to https://reactnative.dev/docs/signed-apk-android 

 
 

### iOS 

 
 

1. Go to the Xcode 

2. Select the schema 

3. Select 'Any iOS device' as target 

4. Product -> Archive 

 
 

For more info, please go to https://reactnative.dev/docs/publishing-to-app-store 

 
 

## Components 

 
 

Components are the basic blocks of a Blog Mobile application, but since we aim to minimize development complexity, all the components are at the same nesting level. 

 
 

Another important thing is the use of propTypes to check the kind of data that your components need to work properly. If the component receives some data from others, the type of these props must be defined, and in case you need it the default value of the property too. 
 
 

### Controllers folder and API connection handler 

 
 

To keep the networking layer simple, the template uses a single Axios instance in the `axiosConfig.ts`. It uses interceptors to define common side effects for the responses. 

 
 

When you need communication with a service you have to create a function to manage the operation and grouping according to the kind of transaction inside a controller file, please keep all of those inside the controllers' folder. 

 
 

While the data transfer between the API and the app is working you must use the success and error actions that help you to catch the result of the operation. With this method, you can track the interaction through the redux store. This is useful because you can create behaviors based on those states in a quick and simple way  

## Screens 

 
 

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store. 

 