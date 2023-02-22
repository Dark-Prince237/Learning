function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("Hello");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("World");
    }, 1000);
  });
}

async function parallel() {
    await Promise.all([
        (async () => console.log(await resolveHello()))(), //Logs after 2 seconds
        (async () => console.log(await resolveWorld()))(), //Logs after 1 seconds
    ])
    console.log("Finally") //Logged after World Hello
}

parallel()