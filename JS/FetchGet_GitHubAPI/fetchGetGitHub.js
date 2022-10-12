const doFetch = async () => {
  const getOnlyXusers = (amount) => {
    return users.slice(0, amount);
  };

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();

    return users;
    //console.log(users);
  };
  const users = await getUsers();
};
//galima su users.length(3), bet pakeis pagrindini masyva
console.log({ users });
console.log(getOnlyXusers(3));
doFetch();
