import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from 'next/link';
import Image from "next/image";



export default function ListaDeBlogs() {

  const direccionDeMisBlogs = "src/blogs";
  const archivos = fs.readdirSync(path.join(direccionDeMisBlogs));

  const blogs = archivos
    .filter((nombreDeArchivo) => nombreDeArchivo.endsWith(".mdx"))
    .map((nombreDeArchivo) => {
      const contenidoDelArchivo = fs.readFileSync(path.join(direccionDeMisBlogs, nombreDeArchivo), "utf-8");
      const { data: fronMatter } = matter(contenidoDelArchivo);

      return {
        meta: fronMatter,
        slug: nombreDeArchivo.replace(".mdx", "")
      };
    });

  return (
    <section id="blogs">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        <span className="bg-clip-text bg-gradient-to-r text-white">
          Blogs
        </span>

      </h2>
      <ul className="grid md:grid-cols-2 gap-8 md:gap-12">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Office"
                src="/images/blog-images/lorem-ipsum-image.png"
                width={"56"}
                height={"56"}
                className="h-56 w-full object-cover"
              />

              <section className="bg-gray-900 p-4 sm:p-6">
                <time className="block text-xs text-gray-500">
                  {blog.meta.date}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">
                    {blog.meta.title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {blog.meta.description}
                </p>
              </section>
            </article>
          </Link>
        ))}
      </ul>
    </section>
  );
}