import React from "react";
import "./index.scss";
import apexAvatar from "../../images/apex.png";
import takaLogo from "../../images/taka.png";
import {ReactComponent as Twitter} from '../../icons/twitter.svg'
import {ReactComponent as Discord} from '../../icons/discord.svg'
import {ReactComponent as Mail} from '../../icons/mail.svg'
import {ReactComponent as Github} from '../../icons/github.svg'

type props = {}
type state = {
  age: number
}

class Home extends React.Component<props, state> {
  constructor(props: props) {
    super(props);

    const dob = new Date(2002, 4, 25)
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    this.state = {
      age
    }
  }

  render() {
    return (
      <div className="homeContainer">
        <img className="apexAvatar" alt="Apex Avatar" src={apexAvatar} />
        <div className="textContainer">
          <span className="greeting">Hi, I'm apex</span>
          <span className="description">
            Occasional code writer &bull; {this.state.age} &bull; he/him
          </span>
        </div>
        <div className="socialLinks">
          <a href="mailto:me@apex.me" className="socialLink"><Mail id="mail" /></a>
          <a href="https://discord.com/users/397869855749177345" className="socialLink"><Discord id="discord" /></a>
          <a href="https://twitter.com/apex2504" className="socialLink"><Twitter id="twitter" /></a>
          <a href="https://github.com/apex2504" className="socialLink"><Github id="github" /></a>
        </div>
        <a className="takaLink" href="https://taka.moe/">
          <img alt="Taka Logo" className="takaIcon" src={takaLogo} />
          Get Taka
        </a>
      </div>
    );
  }
}

export default Home
