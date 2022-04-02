const getWifiName = async () => {
  const p = Deno.run({
    cmd: ["netsh", "wlan", "show", "interface"],
    stdout: "piped",
  });

  const stdout = await p.output();

  const decoded = new TextDecoder().decode(stdout);

  let name;

  name = /^\s*SSID\s*: (.+)\s*$/gm.exec(decoded);
  name = name && name.length ? name[1] : null;

  return name;
};

export default getWifiName;
