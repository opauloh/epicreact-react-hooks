<div>
  <h1 align="center"><a href="https://epicreact.dev">🎣 React Hooks 🚀 EpicReact.Dev</a></h1>
  <strong>
    There are better patterns and practices that are an entirely new approach to
    developing components and managing state in your React applications.
  </strong>
  <p>
    Learn the ins and outs of React Hooks. I will take you on a deep dive into
    React Hooks, and show you what you need to know to start using them in your
    applications right away.
  </p>

  <a href="https://epicreact.dev">
    <img
      alt="Learn React from Start to Finish"
      src="https://kentcdodds.com/images/epicreact-promo/er-1.gif"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![All Contributors][all-contributors-badge]](#contributors-)
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

- Watch my talk
  [Why React Hooks](https://www.youtube.com/watch?v=zWsZcBiwgVE&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf)
  (35 minutes)

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `^10.13 || 12 || 14`
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

> If you want to commit and push your work as you go, you'll want to
> [fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
> first and then clone your fork rather than this repo directly.

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/kentcdodds/react-hooks.git
cd react-hooks
node setup
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier.

If you get any errors, please read through them and see if you can find out what
the problem is. If you can't work it out on your own then please [file an
issue][issue] and provide _all_ the output from the commands you ran (even if
it's a lot).

If you can't get the setup script to work, then just make sure you have the
right versions of the requirements listed above, and run the following commands:

```
npm install
npm run validate
```

It's recommended you run everything locally in the same environment you work in
every day, but if you're having issues getting things set up, you can also set
this up using [GitHub Codespaces](https://github.com/features/codespaces)
([video demo](https://www.youtube.com/watch?v=gCoVJm3hGk4)) or
[Codesandbox](https://codesandbox.io/s/github/kentcdodds/react-hooks).

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

You can also open
[the deployment of the app on Netlify](https://react-hooks.netlify.app/).

## Running the tests

```shell
npm test
```

This will start [Jest](https://jestjs.io/) in watch mode. Read the output and
play around with it. The tests are there to help you reach the final version,
however _sometimes_ you can accomplish the task and the tests still fail if you
implement things differently than I do in my solution, so don't look to them as
a complete authority.

### Exercises

- `src/exercise/00.md`: Background, Exercise Instructions, Extra Credit
- `src/exercise/00.js`: Exercise with Emoji helpers
- `src/__tests__/00.js`: Tests
- `src/final/00.js`: Final version
- `src/final/00.extra-0.js`: Final version of extra credit

The purpose of the exercise is **not** for you to work through all the material.
It's intended to get your brain thinking about the right questions to ask me as
_I_ walk through the material.

### Helpful Emoji 🐨 💪 🏁 💰 💯 🦉 📜 💣 👨‍💼 🚨

Each exercise has comments in it to help you get through the exercise. These fun
emoji characters are here to help you.

- **Kody the Koala** 🐨 will tell you when there's something specific you should
  do
- **Matthew the Muscle** 💪 will indicate what you're working with an exercise
- **Chuck the Checkered Flag** 🏁 will indicate that you're working with a final
  version
- **Marty the Money Bag** 💰 will give you specific tips (and sometimes code)
  along the way
- **Hannah the Hundred** 💯 will give you extra challenges you can do if you
  finish the exercises early.
- **Olivia the Owl** 🦉 will give you useful tidbits/best practice notes and a
  link for elaboration and feedback.
- **Dominic the Document** 📜 will give you links to useful documentation
- **Berry the Bomb** 💣 will be hanging around anywhere you need to blow stuff
  up (delete code)
- **Peter the Product Manager** 👨‍💼 helps us know what our users want
- **Alfred the Alert** 🚨 will occasionally show up in the test failures with
  potential explanations for why the tests are failing.

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/react-hooks/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/react-hooks/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://tsnieman.net/"><img src="https://avatars3.githubusercontent.com/u/595711?v=4" width="100px;" alt=""/><br /><sub><b>Tyler Nieman</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=tsnieman" title="Code">💻</a> <a href="https://github.com/kentcdodds/react-hooks/commits?author=tsnieman" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mplis"><img src="https://avatars0.githubusercontent.com/u/1382377?v=4" width="100px;" alt=""/><br /><sub><b>Mike Plis</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=mplis" title="Code">💻</a> <a href="https://github.com/kentcdodds/react-hooks/commits?author=mplis" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://stackshare.io/jdorfman/decisions"><img src="https://avatars1.githubusercontent.com/u/398230?v=4" width="100px;" alt=""/><br /><sub><b>Justin Dorfman</b></sub></a><br /><a href="#fundingFinding-jdorfman" title="Funding Finding">🔍</a></td>
    <td align="center"><a href="http://algus.ninja"><img src="https://avatars1.githubusercontent.com/u/818856?v=4" width="100px;" alt=""/><br /><sub><b>Carlos Pérez Gutiérrez</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=AlgusDark" title="Code">💻</a></td>
    <td align="center"><a href="http://charliestras.me"><img src="https://avatars2.githubusercontent.com/u/10193500?v=4" width="100px;" alt=""/><br /><sub><b>Charlie Stras</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=CharlieStras" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/react-hooks/commits?author=CharlieStras" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/lideo"><img src="https://avatars3.githubusercontent.com/u/1573567?v=4" width="100px;" alt=""/><br /><sub><b>Lide</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=lideo" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/marcosvega91"><img src="https://avatars2.githubusercontent.com/u/5365582?v=4" width="100px;" alt=""/><br /><sub><b>Marco Moretti</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=marcosvega91" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/gugol2"><img src="https://avatars0.githubusercontent.com/u/4933016?v=4" width="100px;" alt=""/><br /><sub><b>Watchmaker</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/issues?q=author%3Agugol2" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://dschapman.com"><img src="https://avatars3.githubusercontent.com/u/36767987?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Chapman</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=dschapman" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/flofehrenbacher"><img src="https://avatars0.githubusercontent.com/u/18660708?v=4" width="100px;" alt=""/><br /><sub><b>flofehrenbacher</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=flofehrenbacher" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/pritamsangani/"><img src="https://avatars3.githubusercontent.com/u/22857896?v=4" width="100px;" alt=""/><br /><sub><b>Pritam Sangani</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=PritamSangani" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/emzoumpo"><img src="https://avatars2.githubusercontent.com/u/2103443?v=4" width="100px;" alt=""/><br /><sub><b>Emmanouil Zoumpoulakis</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=emzoumpo" title="Documentation">📖</a></td>
    <td align="center"><a href="http://peter.hozak.info/"><img src="https://avatars0.githubusercontent.com/u/1087670?v=4" width="100px;" alt=""/><br /><sub><b>Peter Hozák</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=Aprillion" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/timobleeker"><img src="https://avatars0.githubusercontent.com/u/2723586?v=4" width="100px;" alt=""/><br /><sub><b>Timo</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=timobleeker" title="Documentation">📖</a></td>
    <td align="center"><a href="http://thacher.co"><img src="https://avatars1.githubusercontent.com/u/12368025?v=4" width="100px;" alt=""/><br /><sub><b>Thacher Hussain</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=thacherhussain" title="Documentation">📖</a></td>
    <td align="center"><a href="https://magrippis.com"><img src="https://avatars0.githubusercontent.com/u/3502800?v=4" width="100px;" alt=""/><br /><sub><b>Johnny Magrippis</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=jmagrippis" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/apolakipso"><img src="https://avatars2.githubusercontent.com/u/494674?v=4" width="100px;" alt=""/><br /><sub><b>Apola Kipso</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=apolakipso" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Snaptags"><img src="https://avatars1.githubusercontent.com/u/1249745?v=4" width="100px;" alt=""/><br /><sub><b>Markus Lasermann</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=Snaptags" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/degeens"><img src="https://avatars2.githubusercontent.com/u/33414262?v=4" width="100px;" alt=""/><br /><sub><b>Stijn Geens</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=degeens" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/nativedone"><img src="https://avatars2.githubusercontent.com/u/20998754?v=4" width="100px;" alt=""/><br /><sub><b>Adeildo Amorim</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=nativedone" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/thegoodsheppard"><img src="https://avatars1.githubusercontent.com/u/13774377?v=4" width="100px;" alt=""/><br /><sub><b>Greg Sheppard</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=thegoodsheppard" title="Documentation">📖</a></td>
    <td align="center"><a href="https://rafaeldavis.dev"><img src="https://avatars0.githubusercontent.com/u/6822714?v=4" width="100px;" alt=""/><br /><sub><b>Rafael D. Hernandez</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=RafaelDavisH" title="Code">💻</a></td>
    <td align="center"><a href="http://dallascarraher.dev"><img src="https://avatars2.githubusercontent.com/u/4131693?v=4" width="100px;" alt=""/><br /><sub><b>Dallas Carraher</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=DallasCarraher" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/roni-castro"><img src="https://avatars3.githubusercontent.com/u/24610813?v=4" width="100px;" alt=""/><br /><sub><b>Roni Castro</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=roni-castro" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/thebrengun"><img src="https://avatars2.githubusercontent.com/u/15270595?v=4" width="100px;" alt=""/><br /><sub><b>Brennan</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=thebrengun" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.daleseo.com"><img src="https://avatars1.githubusercontent.com/u/5466341?v=4" width="100px;" alt=""/><br /><sub><b>Dale Seo</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=DaleSeo" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4" width="100px;" alt=""/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/kentcdodds/react-hooks/commits?author=MichaelDeBoey" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## Notes

- when using class you can call super to extend your constructor like that:

```
class Counter extends React.Component {
  constructor(...args) {
    super(...args)
  }
}
```

so you extends all at once

- **useState:** React.useState returns a pair of values. It does this by
  returning an array with two elements (and we use destructuring syntax to
  assign each of those values to distinct variables). The first of the pair is
  the state value and the second is a function we can call to update the state.
  We can name these variables whatever we want. Common convention is to choose a
  name for the state variable, then prefix set in front of that for the updater
  function. State can be defined as: data that changes over time. So how does
  this work over time? When the button is clicked, our increment function will
  be called at which time we update the count by calling setCount. React’s
  useState hook allows you to pass a function instead of the actual value, and
  then it will only call that function to get the state value when the component
  is rendered the first time. So you can go from this:
  `React.useState(someExpensiveComputation())` To this:
  `React.useState(() => someExpensiveComputation())` - This is also called Lazy
  state initialization
- **React.useEffect** is a built-in hook that allows you to run some custom code
  after React renders (and re-renders) your component to the DOM. It accepts a
  callback function which React will call after the DOM has been updated:

```javascript
React.useEffect(() => {
  // your side-effect code here.
  // this is where you can make HTTP requests or interact with browser APIs.
})
```

- Hook Flow diagram: <img
        src="https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png"
      />

- **Lifting State**: When you find the lowest common parent shared between the
  two components and placing the state management there, and then passing the
  state and a mechanism for updating that state down into the components that
  need it.
- **Colocating State**: The oposite of lifting, is to place code as close to
  where it's relevant as possible
- **Managed State**: State that you need to explicitly manage
- **Derived State**: State that you can calculate based on other state
- Array .fill The fill() method changes all elements in an array to a static
  value, from a start index (default 0) to an end index (default array.length).
  It returns the modified array. Ex: `Array(9).fill(null)`,

```js
const array1 = [1, 2, 3, 4]

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4))
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1))
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6))
// expected output: [6, 6, 6, 6]
```

- Array .slice : The slice() method returns the selected elements in an array,
  as a new array object. ex: `history.slice(0, currentStep + 1)`

- DOM: to get get access to the DOM, you need to ask React to give you access to
  a particular DOM node when it renders your component. The way this happens is
  through a special prop called ref. Additionally, we’ll need to clean up after
  ourselves if this component is unmounted. Otherwise we’ll have event handlers
  dangling around on DOM nodes that are no longer in the document.

```js
function MyDiv() {
  const myDivRef = React.useRef()
  React.useEffect(() => {
    const myDiv = myDivRef.current
    // myDiv is the div DOM node!
    console.log(myDiv)
  }, [])
  return <div ref={myDivRef}>hi</div>
}
```

- This is how we use async/await in an useEffect:

```js
React.useEffect(() => {
  async function effect() {
    const result = await doSomeAsyncThing()
    // do something with the result
  }
  effect()
})
```

- But typically is just easier to extract all the async code into a utility
  function which I call and then use the promise-based .then method instead of
  using async/await syntax:

```js
React.useEffect(() => {
  doSomeAsyncThing().then(result => {
    // do something with the result
  })
})
```

- use Status instead of isLoading, isError: We could make things much simpler by
  having some state to set the explicit status of our component. Our component
  can be in the following "states":

idle: no request made yet pending: request started resolved: request successful
rejected: request failed

Try to use a status state by setting it to these string values rather than
relying on existing state or booleans.

- **Error handling** : No matter how hard you try, eventually your app code just
  isn’t going to behave the way you expect it to and you’ll need to handle those
  exceptions. If an error is thrown and unhandled, your application will be
  removed from the page, leaving the user with a blank screen… Kind of awkward…
  Luckily for us, there’s a simple way to handle errors in your application
  using a special kind of component called an Error Boundary. Unfortunately,
  there is currently no way to create an Error Boundary component with a
  function and you have to use a class component instead. The reason this is
  happening is because the error that’s stored in the internal state of the
  ErrorBoundary component isn’t getting reset, so it’s not rendering the
  children we’re passing to it. So what we need to do is reset the
  ErrorBoundary’s error state to null so it will re-render. But how do we access
  the internal state of our ErrorBoundary to reset it? Well, there are a few
  ways we could do this by modifying the ErrorBoundary, but one thing you can do
  when you want to reset the state of a component, is by providing it a key prop
  which can be used to unmount and re-mount a component.

```js

class ErrorBoundary extends React.Component {
  state = {error : null}

  static getDerivedStateFromError(error) {
    return {error}
  }

  render() {
    const {error} = this.state
    if (error) {
      return <this.props.FallbackComponent error={error} />
    }
    return this.props.children
  }
}

function ErrorFallback({error}) {
  return <div>
  There was an error:
  <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <PokemonInfo pokemonoName={pokemonName}>
</ErrorBoundary>

```

One thing that I want to make a particular note of here is that where you place
this error boundary has significance on what happens with react.

- **react-error-boundary** : As cool as our own ErrorBoundary is, I’d rather not
  have to maintain it in the long-term. Luckily for us, there’s an npm package
  we can use instead and it’s already installed into this project. It’s called
  react-error-boundary.
- **Tricks** - resetting component: whenever you need to reset components, you
can do this easily by just changing the key prop
<!-- prettier-ignore-start -->

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]:
  https://img.shields.io/github/workflow/status/kentcdodds/react-hooks/validate/main?logo=github&style=flat-square
[build]:
  https://github.com/kentcdodds/react-hooks/actions?query=workflow%3Avalidate
[license-badge]:
  https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/react-hooks/blob/main/LICENSE
[coc-badge]:
  https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/react-hooks/blob/main/CODE_OF_CONDUCT.md
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[all-contributors-badge]:
  https://img.shields.io/github/all-contributors/kentcdodds/react-hooks?color=orange&style=flat-square
[win-path]:
  https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/react-hooks/issues/new

<!-- prettier-ignore-end -->
