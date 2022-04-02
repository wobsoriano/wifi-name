const getWifiName = async () => {
  const p = Deno.run({
    cmd: ["iwgetid", "--raw"],
    stdout: "piped",
  });

  const stdout = await p.output();

  const decoded = new TextDecoder().decode(stdout);

  const name = decoded.replace("\n", "");

  if (!name) {
    throw new Error("Could not get SSID");
  }

  return name;
};

export default getWifiName;
