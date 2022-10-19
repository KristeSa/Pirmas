const getToDos = async () => {
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me");
    const toDos = await response.json();

    return toDos;
  } catch (error) {
    console.error(error);
  }
};

export { getToDos };
