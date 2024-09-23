import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, getDocs, query } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDN9o8TW1oX1qVDCu1j-_Mlf1jQR8wPCeU",
    authDomain: "doyenifyselfpaced.firebaseapp.com",
    projectId: "doyenifyselfpaced",
    storageBucket: "doyenifyselfpaced.appspot.com",
    messagingSenderId: "535054760563",
    appId: "1:535054760563:web:be321971a6736e94510806",
    measurementId: "G-7Q308EBS1Z",
};

const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);




const getFirebaseApp = () => {

}

const uploadData = async () => {
    const dataToUpload = {
        key1: 'test',
        key2: 123,
        key3: new Date()
    }

    try {
        const document = doc(firestoreDb, 'Users', 'dNQO6Orhbm65eXBVaKQr')
        const dataUpdated = await setDoc(document, dataToUpload)

        return dataUpdated;
    } catch (error) {
        console.log('upload error', error);

    }
}

const getData = async () => {
    try {
        const collectionRef = collection(firestoreDb, 'Users')
        let finalData: any = [];
        const q = query(collectionRef)

        const docSnap = await getDocs(q)

        docSnap.forEach((doc) => {
            finalData.push(doc.data())
        })

        return finalData
    } catch (error) {
        console.log('fetch error', error);

    }
}


export { getFirebaseApp, uploadData, getData, firestoreDb }; 