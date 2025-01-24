




const page =async ({params}) => {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
const {title,body}=data
console.log(data);
    return (
    
            <div className="p-8 text-center space-y-5">
                <p>ID:{id}</p>
           <h1 className="text-3xl font-bold">{title}</h1>
           <p>Description: {body}</p>
        </div>
    
    );
};

export default page;