
export const transformCountries = (countries) => countries.map((country) => ({
    id: country?.ID,
    name: country?.Country,
    cases: country?.TotalConfirmed,
    deaths: country?.TotalDeaths,
    recovered: country?.TotalRecovered,
}))