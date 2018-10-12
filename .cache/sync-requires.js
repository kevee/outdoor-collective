// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/kevin/Documents/outdoor-collective/.cache/dev-404-page.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/kevin/Documents/outdoor-collective/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kevin/Documents/outdoor-collective/src/pages/index.js")),
  "component---src-pages-trainings-js": preferDefault(require("/Users/kevin/Documents/outdoor-collective/src/pages/trainings.js"))
}

