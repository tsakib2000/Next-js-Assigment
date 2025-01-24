
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Protected() {
  const { getUser,isAuthenticated } = getKindeServerSession();
  
const {user}=await getUser
  return (await isAuthenticated()) ?(

    <div className="flex flex-col justify-center items-center h-screen">
     <h1 className="text-3xl font-bold">Welcome to your profile</h1>
    
     <div className="border p-4 mt-5">
        <h3>Name: {user?.given_name} {user?.family_name}</h3>
        <h4>Email: {user?.email}</h4>
         
     </div>
            </div>
    
        ) : redirect('/api/auth/login')
}