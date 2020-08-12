import React from 'react';
import underConstruction from './under-construction.png';
import './App.scss';

class Name extends React.Component {
  render(): JSX.Element {
    return (
      <div id="name">
        <h1>Lemuel Li</h1>
      </div>
    );
  }
}

class WhoIAm extends React.Component<{}, { pre: string, post: string, postChoices: string[], postId: number }> {
  timer?: NodeJS.Timeout;
  fillLength: number;

  constructor(props: Record<string, string>) {
    super(props);
    this.state = {
      pre: "I am ",
      post: "...",
      postChoices: [
        "a programmer",
        "a chemist",
        "a thinker",
        "an explorer",
        "a researcher"
      ],
      postId: 0
    };
    this.fillLength = Math.max(3, ...this.state.postChoices.map((val: string): number => val.length));
  }

  componentDidMount(): void {
    this.timer = setInterval((): void => this.nextPost(), 2000);
  }

  componentWillUnmount(): void {
    if (this.timer !== undefined)
      clearInterval(this.timer);
  }

  fillChoice(s: string): string {
    return s + " ".repeat(this.fillLength - s.length);
  }

  nextPost() {
    let nextPostId: number = (this.state.postId + 1) % this.state.postChoices.length;
    let nextPost: string = this.state.postChoices[nextPostId];
    this.setState({ post: nextPost, postId: nextPostId });
    this.transition();
  }

  transition(): void { }

  render(): JSX.Element {
    return (
      <div id="who-i-am">
        <h1 className="i-am">{this.state.pre}</h1>
        <h1 className="i-am">{this.fillChoice(this.state.post)}</h1>
      </div>
    )
  }
}

class KeepTuned extends React.Component {
  render(): JSX.Element {
    return (
      <div id="keep-tuned">
        <p>Under construction! Keep tuned!</p>
        <img src={underConstruction} alt="under construction" className="under-construction-pic" />
      </div>
    )
  }
}

function App(): JSX.Element {
  return (
    <div className="App">
      <main id="main">
        <Name />
        <WhoIAm />
        <KeepTuned />
      </main>
    </div>
  );
}

export default App;
