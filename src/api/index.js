const searchSkills = async (search) => {
  const params = new URLSearchParams({ q: search });
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/search?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const skills = await response.json();
  return skills;
};

export default searchSkills;
