const getUsers = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers };
