'use server'



import {redirect} from "next/navigation";
const user={email:"h.admin@gmail.com",password:"Azerty2024…"}
export async function login(formData: FormData) {

        const { email, password } = ({
            email: formData.get('email'), // Ensure email is a string
            password: formData.get('password'), // Ensure password is a string
        });

        console.log( email +  password)
            if(email===user.email && password===user.password){
                redirect("/exp")
            }else{
               throw new Error("Email et/ou mot de passe incorrect")
            }




}

// Replace with your actual authentication logic (e.g., database lookup, API call)

