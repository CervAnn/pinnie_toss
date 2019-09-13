export const fetchFootballData = async () => {
  const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=American_Football&c=USA"
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error ('There was an issue grabbing the data.')
  }
  const footballData = await response.json();
  return footballData
}