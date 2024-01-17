const ServerBackend = async (data) => {
  console.log("Data Received:", data);

  if (data.includes("wake up")) {
    console.log("Welcome sir, I am Jarvis, a virtual assistant designed to help automate your tasks!");
  }
};

export default ServerBackend;
