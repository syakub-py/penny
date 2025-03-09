import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import {storage} from "@/utils/firebaseConfig";

const useRetrieveFirebaseData = (username:string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newsletterData, setNewsletterData] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!username) {
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const usersRef = collection(storage, 'users');
                const q = query(usersRef, where('username', '==', username));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    setError('No user found with this username');
                    setIsLoading(false);
                    return;
                }

                const userDoc = querySnapshot.docs[0];
                const userDataFromFirebase = userDoc.data();
                setUserData(userDataFromFirebase);

                if (userDataFromFirebase && userDataFromFirebase.latest_newsletter_data) {
                    setNewsletterData(userDataFromFirebase.latest_newsletter_data);
                } else {
                    setError('No newsletter data available for this user');
                }
            } catch (err) {
                console.error('Error fetching data from Firebase:', err);
                setError(`Failed to fetch data: ${err.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [username]);

    return { isLoading, error, newsletterData, userData };
};

export default useRetrieveFirebaseData;
