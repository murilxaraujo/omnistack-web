import React, { Component } from "react";
import SideBar from "../components/sidebar/sidebar.component";
import DevCard from "../components/dev-item/dev-item.component";
import api from "../services/api";
import "./home.styles.scss";
export default class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      devs: []
    };

    this.getDevs();
  }

  async getDevs() {
    const response = await api.get("/devs");
    this.setState({ devs: response.data });
  }

  handleNewUser(user) {
    this.setState({ devs: [...this.state.devs, user] });
  }

  render() {
    return (
      <>
        <aside>
          <SideBar className="sidebar" handleNewUser={this.handleNewUser} />
        </aside>
        <main>
          <ul>
            {this.state.devs.map(({ _id, ...otherProps }) => (
              <DevCard key={_id} {...otherProps} />
            ))}
          </ul>
        </main>
      </>
    );
  }
}
