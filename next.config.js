/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()

const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
                pathname: '/**',
            }
        ]
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'md','ts', 'tsx'],
};


module.exports = nextConfig
