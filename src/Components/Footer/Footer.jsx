import React from "react";
import "./style.scss";

import { Button } from "@material-ui/core";

export default function Footer() {
  return (
    <div className="footer">
      <Button>
        <img
          src="https://i.ibb.co/B3tB4cH/BMC-logowordmark-Black.png"
          alt="Buy Me a Coffee"
        />
      </Button>
      <div>Copyright &copy; Crypto Port</div>
      <div>
        Made with ❤️ in{" "}
        <a
          href="https://hashtechnologies.net/"
          rel="noreferrer"
          target="_blank"
        >
          Hash Technologies
        </a>
      </div>
    </div>
  );
}
