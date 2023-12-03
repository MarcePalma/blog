import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const archivos = fs.readdirSync(path.join('src/blogs'));

  const rutas = archivos
    .filter((nombreDeArchivo) => nombreDeArchivo.endsWith(".mdx"))
    .map((nombreDeArchivo) => ({
      slug: nombreDeArchivo.replace(/\.mdx$/, ''),
    }));

  return rutas;
}


function obtenerBlog({ slug }: { slug: string }) {
  const archivoDeBlog = fs.readFileSync(path.join('src/blogs/' + slug + ".mdx"), "utf-8")

  const { data: frontMatter, content } = matter(archivoDeBlog)

  return {
    metadatos: frontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const blog = obtenerBlog(params);

  return (
    <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
      <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold items-center justify-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-gray-500 to-white">
          {blog.metadatos.title}
        </span>

      </h1>
      {/*@ts-ignore*/}
      <MDXRemote source={blog.content}></MDXRemote>

    </article>
  )
}

