/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // OBLIGATORIO para GitHub Pages
  basePath: '/followare-management-system', // OBLIGATORIO para que carguen los estilos
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig