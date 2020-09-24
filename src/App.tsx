import React from 'react';
import './scss/App.scss';
import './scss/nav.scss';

// class WhoIAm extends React.Component<{}, { pre: string, post: string, postChoices: string[], postId: number }> {
//   timer?: NodeJS.Timeout;
//   fillLength: number;

//   readonly scriptEls: HTMLScriptElement[] = [];
//   // readonly scriptUrls: string[] = [
//   //   "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js",
//   //   "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/TextPlugin.min.js",
//   //   "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/EasePack.min.js",
//   // ];

//   constructor(props: Readonly<{}>) {
//     super(props);
//     this.state = {
//       pre: "I am ",
//       post: "...",
//       postChoices: [
//         "a programmer",
//         "a chemist",
//         "a thinker",
//         "an explorer",
//         "a researcher"
//       ],
//       postId: 0
//     };
//     this.fillLength = Math.max(3, ...this.state.postChoices.map((val: string): number => val.length));
//   }

//   componentDidMount(): void {
//     // for (const scriptUrl of this.scriptUrls) {
//     //   const scriptEl: HTMLScriptElement = appendScript(scriptUrl);
//     //   this.scriptEls.push(scriptEl);
//     // }
//     this.timer = setInterval((): void => this.nextPost(), 2000);
//   }

//   componentWillUnmount(): void {
//     // removeScripts(this.scriptEls);
//     if (this.timer !== undefined)
//       clearInterval(this.timer);
//   }

//   fillChoice(s: string): string {
//     return s + " ".repeat(this.fillLength - s.length);
//   }

//   nextPost() {
//     let nextPostId: number = (this.state.postId + 1) % this.state.postChoices.length;
//     let nextPost: string = this.state.postChoices[nextPostId];
//     this.setState({ post: nextPost, postId: nextPostId });
//     this.transition();
//   }

//   transition(): void { }

//   render(): JSX.Element {
//     return (
//       <div id="who-i-am">
//         <h1 className="i-am">{this.state.pre}</h1>
//         <h1 className="i-am">{this.fillChoice(this.state.post)}</h1>
//       </div>
//     )
//   }
// }

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <nav className="nav-bar">
        <div className="nav-elements">
          <div className="nav-el"><a href="/#">Mushinako</a></div>
          <div className="nav-el"><a href="https://github.com/Mushinako">GitHub</a></div>
          <div className="nav-el"><a href="/#">Placeholder</a></div>
        </div>
      </nav>
    )
  }
}

function App(): JSX.Element {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main id="main">
      </main>
    </div>
  );
}

export default App;
