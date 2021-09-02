import React from "react";
import "./style.scss";

import { Button } from "@material-ui/core";

export default function Minibar() {
  return (
    <div className="minibar">
      <Button>
        <i className="ri-star-line"></i>
        <span>Watchlist</span>
      </Button>

      <Button>
        <i className="ri-pie-chart-line"></i>
        <span>Portfolio</span>
      </Button>
      
      <Button>
      <i className="ri-coins-line"></i>
        <span>Coins</span>
      </Button>
      
      <Button>
      <i className="ri-calendar-event-line"></i>
        <span>Events</span>
      </Button>
      
      <Button>
      <i className="ri-exchange-line"></i>
        <span>Exchanges</span>
      </Button>
      
      <Button>
      <i className="ri-bank-line"></i>
        <span>Finance</span>
      </Button>
    </div>
  );
}
