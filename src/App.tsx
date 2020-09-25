import React from 'react';
import './scss/App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';

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

function App(): JSX.Element {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main id="main">
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
