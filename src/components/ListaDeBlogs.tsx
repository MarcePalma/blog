import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from 'next/link';



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
    <section>
      {blogs.map((blog) => (
        <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <time className="block text-xs text-gray-500">
                {blog.meta.date}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">
                  {blog.meta.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {blog.meta.description}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}