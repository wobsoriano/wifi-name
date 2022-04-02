import getDarwinWifiName from "./os/darwin.ts";
import getWindowsWifiName from "./os/windows.ts";
import getLinuxWifiName from "./os/linux.ts";

const OS = Deno.build.os;

function getWifiName() {
  if (OS === "darwin") {
    return getDarwinWifiName();
  } else if (OS === "windows") {
    return getWindowsWifiName();
  }

  return getLinuxWifiName();
}

export default getWifiName;
