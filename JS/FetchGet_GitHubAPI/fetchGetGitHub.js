const doFetch = async () => {
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();

    return users;
    //console.log(users);
  };
  const users = await getUsers();

  const getOnlyXusers = (amount) => {
    return users.slice(0, amount);
  };
  //galima su users.length(3), bet pakeis pagrindini masyva
  console.log({ users });
  console.log(getOnlyXusers(3));

  const firstThreeUsers = getOnlyXusers(3);
};
doFetch();
