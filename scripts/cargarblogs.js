const fs = require('fs');
const path = require('path');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function cargarBlogEnDB(filePath) {
  const contenidoMDX = fs.readFileSync(filePath, 'utf-8');

  const titulo = 'Título extraído del MDX';
  const contenido = 'Contenido extraído del MDX';

  const nuevoBlog = await prisma.blog.create({
    data: {
      titulo,
      contenido,
    },
  });

  console.log('Nuevo blog creado:', nuevoBlog);
}

async function cargarBlogsEnDB() {
  const directorioMDX = path.join(__dirname, '../src/blogs');
  const archivosMDX = fs.readdirSync(directorioMDX);

  archivosMDX.forEach((archivo) => {
    const filePath = path.join(directorioMDX, archivo);
    cargarBlogEnDB(filePath);
  });

  await prisma.$disconnect();
}

cargarBlogsEnDB();
