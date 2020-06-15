import React, { Component } from "react";
import FilmCard from "./FilmCard";

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoArr: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((objArr) => {
        let newFilmArr = objArr.map((film) => (
          <FilmCard
            key={film.id}
            title={film.title}
            descr={film.description}
            id={film.id}
            obj={film}
          />
        ));
        this.setState({ infoArr: newFilmArr });
      });
  }

  render() {
    return (
      <div>
        <h3>Films</h3>
        <div className="conatiner">{this.state.infoArr}</div>
      </div>
    );
  }
}

export default Films;
