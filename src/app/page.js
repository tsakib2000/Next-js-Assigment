import BlogCard from "@/Components/BlogCard";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

 
  return (
<>
<div className="grid md:grid-cols-3 grid-cols-4  gap-4 container mx-auto">
{
  data.map(blog=><BlogCard key={blog.id} blog={blog}/>)
}
</div>

</>
  );
}
