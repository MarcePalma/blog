import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from 'next/link';
import Image from "next/image";



export default function ListaDeBlogs() {
  const direccionDeMisBlogs = "src/blogs";
  const archivos = fs.readdirSync(path.join(direccionDeMisBlogs));
  console.log("Ruta de blogs:", direccionDeMisBlogs);


  const blogs = archivos
    .map((nombreDeArchivo) => {
      const contenidoDelArchivo = fs.readFileSync(path.join(direccionDeMisBlogs, nombreDeArchivo), "utf-8");
      const { data: frontMatter } = matter(contenidoDelArchivo);

      return {
        meta: frontMatter,
        slug: nombreDeArchivo.replace(".mdx", "")
      };
    });

  return (
    <section id="blogs">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        <span className="bg-clip-text bg-gradient-to-r text-white">Blogs</span>
      </h2>
      <ul className="grid md:grid-cols-2 gap-8 md:gap-12">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>

              <article
                className="hover:animate-background rounded-xl bg-gradient-to-r from-slate-300 via-gray-500 to-black-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <Image
                  alt="Blog Image"
                  src={blog.meta.image}
                  width={400}
                  height={300}
                  className="h-56 w-full object-cover"
                />

                <section className="bg-gray-900 p-4 sm:p-6">
                  <time className="block text-xs text-gray-500">{blog.meta.date}</time>

                  <h3 className="mt-0.5 text-lg text-white">{blog.meta.title}</h3>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {blog.meta.description}
                  </p>
                </section>
              </article>

          </Link>
        ))}
      </ul>
    </section >
  );
}