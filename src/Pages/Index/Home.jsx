import React from "react";
import "./style.scss";

// @packages
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Helmet } from "react-helmet";
import currencyFormatter from "currency-formatter";

// @components
import EventCard from "../../Components/EventCard/EventCard";
import { useDataLayerValue } from "../../Contexts/Datalayer";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Home() {
  const classes = useStyles();
  const [events, setEvents] = React.useState([]);
  const [{ trendingCoinList }, dispatch] = useDataLayerValue();

  // @dev get events
  React.useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/events")
      .then((data) => {
        console.log(data.data.data);
        setEvents(data.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    (async function getTrendingCoins() {
      try {
        const data = await Axios.get(
          `https://api.coingecko.com/api/v3/search/trending`
        );

        var coinData = [];

        for (let coin of data.data.coins) {
          const data = await Axios.get(
            `https://api.coingecko.com/api/v3/coins/${coin.item.id}`
          );

          coinData.push(data.data);
        }

        console.log(coinData);

        dispatch({
          type: "SET_TRENDING_COIN_LIST",
          trendingCoinList: coinData,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);
  return (
    <div className="home">
      <Helmet>
        <title>
          Crypto Port | Business Intelligence Tool | Generate Crypto Report
        </title>
      </Helmet>

      <div className="title">
        <h1>
          Crypto Port - Business Intelligence Tool for monthly crypto report.
        </h1>
        <p>
          Export crypto data for business trade analysis whether the
          cryptocurrencies are bullish or bearish. User can convert their
          specific or list of coins data into sheets.
        </p>
      </div>

      {/* section => trending coins */}
      <div className="trendingCoins">
        <h2>Trending Coins </h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            {/* @dev thead contains column identifiers */}
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="row">
                  <b>S.N.</b>
                </TableCell>
                <TableCell>
                  <b>Coin</b>
                </TableCell>
                <TableCell align="center">
                  <b>Price</b>
                </TableCell>
                <TableCell align="center">
                  <b>1h</b>
                </TableCell>
                <TableCell align="center">
                  <b>24h</b>
                </TableCell>
                <TableCell align="center">
                  <b>7d</b>
                </TableCell>
                <TableCell align="center">
                  <b>Total Volume</b>
                </TableCell>
                <TableCell align="center">
                  <b>Mkt Cap</b>
                </TableCell>
              </TableRow>
            </TableHead>

            {/* @dev tbody contains data */}
            <TableBody>
              {trendingCoinList !== undefined &&
                trendingCoinList.length !== 0 &&
                trendingCoinList.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell className="coinIntro">
                      <img src={row.image.thumb} alt={row.name} />{" "}
                      <Link to={`/coin_focused/?id=${row.id}`}>
                        <span>{row.name}</span>&nbsp;
                        <span style={{ textTransform: "uppercase" }}>
                          ({row.symbol})
                        </span>
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      {currencyFormatter.format(
                        row.market_data.current_price.usd,
                        { code: "USD" }
                      ) || "Null"}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={
                        row.market_data.price_change_percentage_1h_in_currency
                          .usd < 0
                          ? { color: "red" }
                          : row.market_data
                              .price_change_percentage_1h_in_currency.usd > 0
                          ? { color: "green" }
                          : { color: "black" }
                      }
                    >
                      {row.market_data.price_change_percentage_1h_in_currency
                        .usd || "Null"}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={
                        row.market_data.price_change_percentage_24h_in_currency
                          .usd < 0
                          ? { color: "red" }
                          : row.market_data
                              .price_change_percentage_24h_in_currency.usd > 0
                          ? { color: "green" }
                          : { color: "black" }
                      }
                    >
                      {row.market_data.price_change_24h_in_currency.usd ||
                        "Null"}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={
                        row.market_data.price_change_percentage_7d_in_currency
                          .usd < 0
                          ? { color: "red" }
                          : row.market_data
                              .price_change_percentage_7d_in_currency.usd > 0
                          ? { color: "green" }
                          : { color: "black" }
                      }
                    >
                      {row.market_data.price_change_percentage_7d_in_currency
                        .usd || "Null"}
                    </TableCell>
                    <TableCell align="center">
                      {currencyFormatter.format(
                        row.market_data.total_volume.usd,
                        { code: "USD" }
                      ) || "Null"}
                    </TableCell>
                    <TableCell align="center">
                      {currencyFormatter.format(
                        row.market_data.market_cap.usd,
                        { code: "USD" }
                      ) || "Null"}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* section =>  events */}
      <h2>Recent Events & News</h2>
      <div className="events">
        {events.map((event, index) => (
          <EventCard
            website={event.website}
            screenshot={event.screenshot}
            title={event.title}
            start_date={event.start_date}
            description={event.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
