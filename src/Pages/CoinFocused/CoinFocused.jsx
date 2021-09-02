import React from "react";
import "./style.scss";

// @packages
import { Divider, Button } from "@material-ui/core";
import currencyFormatter from "currency-formatter";

// @components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// @helpers
// import returnMonth from "../../Helpers/MonthSelector";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CoinFocused() {
  const [coinConvereterPrice, setCoinConverter] = React.useState("1");
  const classes = useStyles();

  return (
    <div className="coinFocused">
      {/* section => topbar */}
      <div className="topbar">
        {/* section => digitInfo */}
        <div className="digitInfo">
          <div className="rank">Rank #10</div>

          <div className="coinInfo">
            <img
              src="https://assets.coingecko.com/coins/images/12164/small/Unilayer.jpg?1597779313"
              alt="Coin Name"
            />
            <h3>
              UniLayer (
              <span style={{ textTransform: "uppercase" }}>Layer</span>)
            </h3>
          </div>

          <div className="currentInfo">
            <h1 className="currentPrice">
              {currencyFormatter.format(1000000, { code: "USD" })}
            </h1>

            {/* @info color should be dynamic here */}
            <h3 className="priceChangePercentage">-5%</h3>
          </div>

          <div className="marketInfo">
            <div className="marketInfoOne">
              <span style={{ marginRight: "25px" }}>
                <b>Market Cap:</b>{" "}
                <span>
                  {currencyFormatter.format(1000000, { code: "USD" })}
                </span>
              </span>

              <span>
                <b>Circulating Supply:</b>{" "}
                <span>
                  {currencyFormatter.format(1000000, { code: "USD" })}
                </span>
              </span>
            </div>
            <div className="marketInfoTwo">
              <span style={{ marginRight: "25px" }}>
                <b>24 Hour High:</b>{" "}
                <span>
                  {currencyFormatter.format(1000000, { code: "USD" })}
                </span>
              </span>
              <span>
                <b>Total Supply:</b> <span>40000000</span>
              </span>
            </div>
          </div>
        </div>

        <div className="additonalInfo">
          <div className="title">
            <h3>Info</h3>
            <div>
              <b>ATH</b>: $ 5.4
            </div>
          </div>
          <Divider />
          <div className="extraInfo">
            <div>
              <b>Website:</b>
              <span>https://unilayer.com/</span>
            </div>
            <div>
              <b>API ID:</b>
              <span>unilayer</span>
            </div>
            <div>
              <b>Add to watchlist:</b>
              <span>
                <Button
                  style={{
                    display: "flex",
                  }}
                >
                  <i
                    className="ri-price-tag-3-line"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <span>ADD</span>
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div className="priceConverter">
        <div>
          <span>LAYER</span>
          <input
            type="text"
            value={coinConvereterPrice}
            onChange={(e) => setCoinConverter(e.target.value)}
          />
        </div>
        <i className="ri-arrow-left-right-line"></i>
        <div>
          <span>USD</span>
          {/* @dev value should be dynamic */}
          <input type="text" value={coinConvereterPrice * 100} disabled />
        </div>
      </div>

      <div className="tableData">
        <div className="title">
          <div className="yearSelector">
            <span style={{ marginRight: "10px" }}>Select Year</span>
            <select name="cryptoReportYear" id="">
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>

          <Button>
            <i
              style={{ marginRight: "5px" }}
              className="ri-chat-upload-line"
            ></i>
            <span>Export Data</span>
          </Button>
        </div>

        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>S.N.</b>
              </TableCell>
              <TableCell>
                <b>Market Cap Rank</b>
              </TableCell>
              <TableCell>
                <b>Month</b>
              </TableCell>
              <TableCell align="center">
                <b>Final Closing Price</b>
              </TableCell>
              <TableCell align="center">
                <b>Total Volume</b>
              </TableCell>
              <TableCell align="center">
                <b>Total Market Cap</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {coinData.default_data.map(
            (row, index) =>
              index !== 7 && ( */}
                {/* <TableRow key={index}> */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    {/* {index + 1} */}
                    1
                  </TableCell>
                  <TableCell>
                    {/* # {row.public_interest_stats.alexa_rank} */}
                    # 109
                  </TableCell>
                  {/* <TableCell>{returnMonth(index + 1)}</TableCell> */}
                  <TableCell>January</TableCell>
                  <TableCell align="center">
                    {/* ${row.market_data.current_price.usd} */}
                    $100
                  </TableCell>
                  <TableCell align="center">
                    {/* ${row.market_data.total_volume.usd} */}
                    $100
                  </TableCell>
                  <TableCell align="center">
                    {/* ${row.market_data.market_cap.usd} */}
                    $100
                  </TableCell>
                </TableRow>
              {/* )
          )} */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
