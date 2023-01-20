const addGroup = async (req, res) => {
  const addAcount = document.body.querySelector("#group-id-input-form");
  const accountGroupId = +document.querySelector("#add-group-id").value;
  const token = req.headers.authorization?.split(" ")[1];
  const user = jwt.verify(token, jwtSecret);
  req.userId = decodedToken.id;

  try {
    const response = await fetch("http://localhost:5100/bills/", {
      method: "POST",
      body: JSON.stringify({
        group_id: accountGroupId,
        user_id: req.userId,
      }),
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      alert("Group added");
    }
  } catch (error) {
    console.error(error);
  }
  addAcount.addEventListener("submit", async (event) => {
    event.preventDefault();

    addGroup();
  });
};
