
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";





const about =  async() => {

    const { isAuthenticated} = getKindeServerSession();
    if(!(await isAuthenticated())){
        redirect('/api/auth/login')
    }


    return (

<div className="flex flex-col justify-center items-center h-screen">
 <h1 className="text-3xl font-bold">Welcome to your profile</h1>

 <div className="border p-4 mt-5">

     
 </div>
        </div>

    );
};

export default about;