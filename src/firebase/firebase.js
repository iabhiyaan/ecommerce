import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCwMCd83SUgsweUi7SvO-2tW2cVOLSkuNg",
	authDomain: "hats-ecommerce.firebaseapp.com",
	databaseURL: "https://hats-ecommerce.firebaseio.com",
	projectId: "hats-ecommerce",
	storageBucket: "hats-ecommerce.appspot.com",
	messagingSenderId: "450284346406",
	appId: "1:450284346406:web:93511149258e9412f25ae7",
	measurementId: "G-BLVZ3HTP7J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const currentDate = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				currentDate,
				...additionalData
			});
		} catch (error) {
			console.log("Error is", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
