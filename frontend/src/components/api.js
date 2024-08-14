
export async function surveyForm(test) {

  const res = await fetch("http://localhost:4040/api/v1/report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify(test),
  });

  const data = await res.json();
  if (!res.ok) {
    console.log(res.status);
    if (res.status === 500) {
      throw {
        message: "Internal server error",
        statusText: res.statusText,
        status: res.status,
      };
    } else {
      throw {
        message: data.msg,
        statusText: res.statusText,
        status: res.status,
      };
    }
  }
  return data;
}

export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
