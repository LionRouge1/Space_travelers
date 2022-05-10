import { Component } from "react";
import GetMission from "../GetMission";

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state= {};
  }

  render() {
    return (
      <div className="mission">
        <GetMission />
      </div>
    )
  }
}

export default Mission;