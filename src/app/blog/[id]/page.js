import PrivateRoute from "@/Components/PrivateRoute";




const page =async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
const {title,body}=data
    return (
    <PrivateRoute>
            <div className="p-8">
           <h1 className="text-3xl font-bold">{title}</h1>
           <h1>{body}</h1>
        </div>
    </PrivateRoute>
    );
};

export default page;