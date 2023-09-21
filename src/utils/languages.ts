export const languages = [
  {
    code: 'fr',
    name: 'français',
    countryCode: 'fr'
  },
  {
    code: 'en',
    name: 'english',
    countryCode: 'us'
  }
]

// const es = {
//   code: "es",
//   name: "español",
//   countryCode: "es",
// };

// languages.push(es)

export const langCodes = languages.map(({ code }) => code)
