// main
export const process = {
 dev: true, // if false - that means prod
}

// mamp dev server or prod host
export const site = {
 home: process.dev ? 'http://localhost/' : 'https://tocode.ru/',
 app: process.dev ? 'http://app.localhost.ru/' : 'https://app.tocode.ru/',
}

// main
export const nameSite = {
 name: 'Интернет магазин на React'
}