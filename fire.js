
            
            import {initializeApp} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
            
            import {firebaseConfig} from "./fireCreds.js";

            import {
                getFirestore,
                doc,
                setDoc
            } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

            const app = initializeApp(firebaseConfig);
            // Initialize Firebase
            const db = getFirestore();


            async function addUser() {
                const nameMessage = document.getElementById("nameMessage").value;
                const descMessage = document.getElementById("descMessage").value;
                document.getElementById("nameMessage").value ="";
                document.getElementById("descMessage").value ="";

                console.log(nameMessage);

                // Adding time stamp and changing status
                let timeStamp = Date.now();
                await setDoc(doc(db, "portfolio", nameMessage), {
                    time: new Date(timeStamp),
                    name: nameMessage,
                    desc: descMessage
                });

                alert("Message sent successfully");

            }


            document.getElementById('submitMessage').addEventListener('click',addUser);