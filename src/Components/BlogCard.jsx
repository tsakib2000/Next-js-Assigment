import Link from "next/link";

const BlogCard = async ({ blog }) => {
  const { id, title } = blog;
  return (
    <Link
      className="border flex justify-center items-center p-5"
      href={`blog/${id}`}
    >
      <h1 className="font-semibold">{title}</h1>
    </Link>
  );
};

export default BlogCard;
