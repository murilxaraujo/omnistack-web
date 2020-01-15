import React from "react";
import "./sidebar.styles.scss";
import api from "../../services/api";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      github_username: "",
      techs: ""
    };

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    await api.post("/devs", this.state);
    this.props.handleNewUser(this.state);
    this.setState({ github_username: "", techs: "" });
    alert("usuário cadastrado com sucesso");
  };

  render() {
    return (
      <>
        <strong>Cadastrar</strong>
        <form onSubmit={this.handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input
              name="github_username"
              id="github_username"
              onChange={this.handleChange}
              value={this.state.github_username}
              required
            ></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              onChange={this.handleChange}
              value={this.state.techs}
              required
            ></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                type="number"
                value={this.state.latitude}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                type="number"
                value={this.state.longitude}
                onChange={this.handleChange}
                required
              ></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </>
    );
  }
}

export default SideBar;
