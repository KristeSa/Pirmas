const getPropertyList = async () => {
  try {
    const response = await fetch(" https://robust-safe-crafter.glitch.me/");
    const propertyList = await response.json();
    console.log(getPropertyList());
    return propertyList;
  } catch (error) {
    console.error(error);
  }
};

export { getPropertyList };
