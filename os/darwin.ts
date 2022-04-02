const getWifiName = async () => {
  const cmd =
    "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport";

  const p = Deno.run({
    cmd: [cmd, "-I"],
    stdout: "piped",
  });

  const stdout = await p.output();

  const decoded = new TextDecoder().decode(stdout);

  let name;

  name = /^\s*SSID: (.+)\s*$/gm.exec(decoded);
  name = name && name.length ? name[1] : null;

  if (!name) {
    throw new Error("Could not get SSID");
  }

  return name;
};

export default getWifiName;
