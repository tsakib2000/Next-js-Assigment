import BlogCard from "@/components/BlogCard";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

 
  return (
<>



<div className=" mt-5">
<h1 className="text-center text-3xl font-bold mb-3">Explore Blogs</h1>
<div className="grid md:grid-cols-3 grid-cols-4  gap-4 w-11/12 mx-auto">
{
  data.map(blog=><BlogCard key={blog.id} blog={blog}/>)
}
</div>
</div>

</>
  );
}
