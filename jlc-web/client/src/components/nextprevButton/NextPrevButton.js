import { useState, useEffect } from "react";
import axios from "axios";
{
  /* function fetches collection so we can iterate through it */
}
async function fetchUsers() {
  try {
    const response = await axios.get("http://localhost:5000/api/houses");
    return response;
  } catch (error) {
    const errorMessage =
      error.response?.data?.error || "Error obtaining picture";
    console.log("House retrieval Failed: ", errorMessage.response?.data);
    return errorMessage;
  }
}
function NextPrevButton() {
  const collection = fetchUsers();
  const [buttonState, setButtonState] = useState({
    prevState: "",
    nextState: "",
  });
  const handleClick = async (event) => {
    event.preventDefault();
    const stateValue = event.target;
    if (stateValue == "next") {
    }
  };
  return <div>hello</div>;
}
export default NextPrevButton;
