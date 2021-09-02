import React from "react";
import "./style.scss";

// @packages
import Axios from "axios";
import millify from "millify";

export default function GlobalData() {
  const [globalData, setGlobalData] = React.useState({
    coinData: {},
    gasStation: {},
  });

  React.useEffect(() => {
    (async function getGlobalData() {
      try {
        const data = await Axios.get("https://api.coingecko.com/api/v3/global");

        const gasData = await Axios.get(
          `https://ethgasstation.info/api/ethgasAPI.json?api-key=${process.env.REACT_APP_ETH_GAS_API_KEY}`
        );

        setGlobalData({
          coinData: data.data.data,
          gasStation: gasData.data,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="globalData">
      <div>
        <span className="index">Coins:</span>
        <span>
          {globalData.coinData.active_cryptocurrencies &&
            millify(globalData.coinData.active_cryptocurrencies)}
        </span>
      </div>
      <div>
        <span className="index">Markets:</span>
        <span>
          {globalData.coinData.markets && millify(globalData.coinData.markets)}
        </span>
      </div>
      <div>
        <span className="index">Ongoing ICO:</span>
        <span>
          {globalData.coinData.ongoing_icos && millify(globalData.coinData.ongoing_icos)}
        </span>
      </div>
      <div>
        <span className="index">Ended ICO:</span>
        <span>
          {globalData.coinData.ended_icos && millify(globalData.coinData.ended_icos)}
        </span>
      </div>
      <div>
        <span className="index">Market Cap:</span>
        <span>
          $
          {globalData.coinData.total_market_cap &&
            millify(globalData.coinData.total_market_cap.usd.toFixed(2))}
        </span>
      </div>
      <div>
        <span className="index">Volume:</span>
        <span>
          $
          {globalData.coinData.total_volume &&
            millify(globalData.coinData.total_volume.usd.toFixed(2))}
        </span>
      </div>
      <div>
        <span className="index">Market Cap 24h:</span>
        <span
          style={
            globalData.coinData.market_cap_change_percentage_24h_usd < 0
              ? { color: "red" }
              : globalData.coinData.market_cap_change_percentage_24h_usd > 0
              ? { color: "green" }
              : { color: "#01BAD5" }
          }
        >
          {globalData.coinData.market_cap_change_percentage_24h_usd &&
            globalData.coinData.market_cap_change_percentage_24h_usd.toFixed(2)}
          %
        </span>
      </div>

      <div style={{
          display: "flex",
          flexDirection: "row"
      }}>
        <span
          className="index"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <i className="ri-gas-station-line"></i> <span>ETH Gas:</span>
        </span>
        <span>{(globalData.gasStation.fast / 10).toFixed(2)} GWEI</span>
      </div>
    </div>
  );
}
