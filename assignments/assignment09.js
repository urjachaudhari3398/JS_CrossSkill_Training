// Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript
const changeParaText = () => {
  document.querySelectorAll("p").forEach((pTag) => {
    pTag.textContent = "How's the Josh?";
  });
};

changeParaText();

/*************************************************************************************************/

// Create a form to submit a blog to a mock API (reqres.in)

async function submitData(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const blogData = {};
  formData.forEach((value, key) => {
    blogData[key] = value;
  });

  try {
    const response = await fetch("https://reqres.in/api/blogs", {
      method: "POST",
      body: blogData,
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log("Blog submitted successfully:", responseData);

      document.getElementById("successMessage").style.display = "block";
      setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
      }, 2000);

      event.target.reset();
    } else {
      throw new Error("Blog Upload Unsuccessful!");
    }
  } catch (error) {
    console.log("Error submitting blog:", error);
    document.getElementById("notSuccessMessage").style.display = "block";
    setTimeout(() => {
      document.getElementById("notSuccessMessage").style.display = "none";
    }, 2000);
  }
}

document.getElementById("blogForm").addEventListener("submit", submitData);

/*************************************************************************************************/

/**
 * Create a blog list page that fetches a list of users from a mock API and adds them to a table on the page after loading.
 * Add a button to sort the users by name. Add an input to filter the table by search.
 * (Optional: Show “Loading…” or a loading spinner on the screen till the data loads)
 */

let userData = [];

const asyncApiCall = async () => {
  try {
    const resp = await fetch("https://reqres.in/api/users");
    if (resp.ok) {
      const data = await resp.json();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return data.data;
    } else {
      throw "Error in executing API";
    }
  } catch (error) {
    throw error;
  }
};
const fetchData = async () => {
  try {
    userData = await asyncApiCall();
    console.log(userData);
    if (userData && userData.length) {
      userData.forEach((user) => {
        user.id = user.id + "";
        setUserData(user);
      });
      document.getElementById("isLoading").style.display = "none";
      document.getElementById("usersData").style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
};

const setUserData = (user) => {
  const tableBody = document
    .getElementById("usersData")
    .getElementsByTagName("tbody")[0];

  const newRow = tableBody.insertRow();

  newRow.insertCell(0).innerHTML = user.id;
  newRow.insertCell(1).innerText = user.first_name;
  newRow.insertCell(2).innerText = user.last_name;
  newRow.insertCell(3).innerText = user.email;
};

const searchUserData = () => {
  const searchValue = document.getElementById("searchInput").value;
  const searchedData = userData.filter((user) => {
    for (let key in user) {
      if (user.hasOwnProperty(key)) {
        if (user[key].toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
      }
    }
    return false;
  });
  console.log(searchedData);
  const tableBody = document
    .getElementById("usersData")
    .getElementsByTagName("tbody")[0];
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  searchedData.forEach((user) => {
    setUserData(user);
  });
};

const resetData = (event) => {
  if (!event.target.value) {
    const tableBody = document
      .getElementById("usersData")
      .getElementsByTagName("tbody")[0];
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
    userData.forEach((user) => {
      setUserData(user);
    });
  }
};

let order = "default";

const sortData = () => {
  sortedArray = [...userData];
  const sortAsc = document.getElementById("sortAsc");
  const sortDesc = document.getElementById("sortDesc");
  if (order === "default") {
    order = "asc";
    sortAsc.style.display = "block";
  } else if (order === "asc") {
    order = "desc";
    sortAsc.style.display = "none";
    sortDesc.style.display = "block";
  } else {
    order = "asc";
    sortAsc.style.display = "block";
    sortDesc.style.display = "none";
  }
  sortedArray.sort((a, b) => {
    let x = a.first_name.toLowerCase();
    let y = b.first_name.toLowerCase();
    return order === "asc" ? x.localeCompare(y) : y.localeCompare(x);
  });
  console.log(order, sortedArray);
  const tableBody = document
    .getElementById("usersData")
    .getElementsByTagName("tbody")[0];
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  sortedArray.forEach((user) => {
    setUserData(user);
  });
};

document.getElementById("searchUser").addEventListener("click", searchUserData);
document.getElementById("searchInput").addEventListener("input", resetData);
document.getElementById("sortButton").addEventListener("click", sortData);

fetchData();
