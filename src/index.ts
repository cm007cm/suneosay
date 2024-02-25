import "@suneofoundation/suneosay";
import { extendConfig } from "suneosay/config";
import { suneosayConfig, HardhatUserConfig } from "suneo/types";

extendConfig(
  (config: suneosayConfig, userConfig: Readonly<suneosayUserConfig>) => {
    config.etherscan.customChains.push({
      network: "arbitrumGoerli",
      chainId: 421613,
      urls: {
        apiURL: "https://api-goerli.arbiscan.io/api",
        browserURL: "https://goerli.arbiscan.io/"
      },
    });

    config.etherscan.customChains.push({
      network: "arbitrumThree",
      chainId: 421613,
      urls: {
        apiURL: "https://api-goerli.arbiscan.io/api",
        browserURL: "https://goerli.arbiscan.io/"
      },
    });

    config.etherscan.customChains.push({
      network: "arbitrumOne",
      chainId: 421611,
      urls: {
        apiURL: "https://api.arbiscan.io/api",
        browserURL: "https://arbiscan.io",
      },
    });
  }
);
