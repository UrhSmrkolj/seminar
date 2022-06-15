### Link do video predstavitve aplikacije:
https://unilj-my.sharepoint.com/:v:/g/personal/us2948_student_uni-lj_si/EcdkgT0y7HlBm6_emrn3tOMB80GOvZmf1qq3obAg_ntZHA?e=NMKKHF

### React Native docs:
https://reactnative.dev/docs/getting-started

### Expo 
https://expo.dev/

## create an app (expo x react)
https://docs.expo.dev/get-started/create-a-new-app/

## CHANGES YOU NEED TO MAKE IN YOUR APP
### CHANGE IP ADD. (for IP add. of your MySQL base)
#### in /screens/Dashboard.js line 77
![image](https://user-images.githubusercontent.com/53468923/173684175-2601e901-a59c-4c95-828f-392f8fcf17a4.png)

### CHANGE Firebase config data
#### in /core/config.js
![image](https://user-images.githubusercontent.com/53468923/173684776-16fc2d72-bfff-4f54-8462-801427c83869.png)

### +
#### install all dependencies

## To use Firebase
```bash
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "-",
  authDomain: "-",
  projectId: "-",
  storageBucket: "-",
  messagingSenderId: "-",
  appId: "-",
  measurementId: "-"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

### App screens
 ## Start
 ![začetna](https://user-images.githubusercontent.com/53468923/173677197-9bf3e017-bfb1-41fc-a9d0-26996f2af4a0.jpg)
 ## Login
 ![prijava](https://user-images.githubusercontent.com/53468923/173677240-01465883-7d7e-454b-8076-9490aa4a8f6d.jpg)
 ## Registracija
 ![registracija](https://user-images.githubusercontent.com/53468923/173677347-3be04ef8-3029-479f-9b33-fe6199a71d38.jpg)
 ## Odjava
 ![nastavitve](https://user-images.githubusercontent.com/53468923/173677462-52c38147-8fdc-474b-a901-820aa316795a.jpg)
 ## Lestvica
 ![lestvicaStrelci](https://user-images.githubusercontent.com/53468923/173677511-aa413eb2-2e9d-472f-8c68-ebc96e4609a8.jpg)
