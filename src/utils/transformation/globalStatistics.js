export const transformGlobalStatistics = (global) => [
  { id: 'CASES', name: "Cases", value: global?.TotalConfirmed },
  { id: 'DEATHS', name: "Deaths", value: global?.TotalDeaths },
  { id: 'RECOVERED', name: "recovered", value: global?.TotalRecovered },
];
