const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3010' : 'https://yourwebsite.com'