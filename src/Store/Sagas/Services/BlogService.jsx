export async function addRecord(payload) {
  let response = await fetch("http://localhost:8000/blog", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
export async function getRecord() {
  let response = await fetch("http://localhost:8000/blog", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
}

export async function updateRecord(payload) {
  let response = await fetch("http://localhost:8000/blog/" + payload.id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function deleteRecord(payload) {
  let response = await fetch("http://localhost:8000/blog/" + payload.id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
}
