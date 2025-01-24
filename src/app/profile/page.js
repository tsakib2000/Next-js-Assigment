

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Protected() {
    const { isAuthenticated } = getKindeServerSession();
    const user= await isAuthenticated() 
    console.log(isAuthenticated);
if(user) 

  {
    return (

        <div className="flex flex-col justify-center items-center h-screen">
         <h1 className="text-3xl font-bold">Welcome to your profile</h1>
        
     
                </div>
        
            ) 
  }else{
    redirect('/api/auth/login')
  }
}