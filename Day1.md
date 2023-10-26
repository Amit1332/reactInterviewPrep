## Day - 1 --------

###  Q1. What is SPA
- single page application basically that application the whole application source code load in first when open  on browser and after that does not reload onchange of components or tab because only one html file so thats called the single page application

###  Q2. What is Virtual DOM
- virtual dom is basically the copy of real dom when we update or change the component it will not change or the whole component it will compare with real dom and virtual1 dom that process called Reconcillation and update only updated data and virtual dom1 and virtual dom2 comparisio known as diffing.and does not change whole html and we can say spa single page application only one html file and it will make fast to render the component .

### 3 . Difference between class based and function based component 

|class Component |Functional Component |
|-----|-----|
|Functional components are written as a JavaScript function.|Class components are written as a JavaScript class.|
|Functional components do not have a state or lifecycle methods.|Class components have a state and can implement lifecycle methods like componentDidMount and componentDidUpdate.|
|Faster as they do not have state and lifecycle, react needs to do less work to render these components.|Slower as they have state and lifecycle, react needs to do comparatively more work to render these components.|
|Functional components tend to be shorter and more concise	|Class components require the boilerplate code, such as a constructor method and the use of “this” to access props and state.|
|Functional components do not use “this” at all, which makes them easier to understand for beginners.	|Class components use the “this” keyword is used to refer to the current instance of the component which can be confusing for new developers.|



### 4 . Difference between props and state - 
|Props|State|
|----|----|
|The Data is passed from one component to another.	|The Data is passed within the component only.|
|It is Immutable (cannot be modified).	|It is Mutable ( can be modified).|
|Props can be used with state and functional components.|The state can be used only with the state components/class component (Before 16.0).|
|Props are read-only.|The state is both read and write.|


### Q5. What is package.jsonpackage.json
 - package.json is the file those store project detalis and version of project or we can say metadata and dependencies
  1.project name
  2.version 
  3.dependencies 
  4.script


### Q6. What is JSX and why do we use it instead of js?
 - JSX stands for JavaScript XML ,  javascript xml this is syntax extension - basically that file in which we can write html and and javascript both  . in react dom hav one dependencies ReactDom which proveide to write jsx in react using {} in html
- 1.JSX stands for JavaScript XML
- 2.JSX allows us to write HTML in React.
- 3.JSX makes it easier to write and add HTML in React.


### Q7. What is the Difference between react and react native? Which one is library or framework?
|Category|React JS|React Native|
|----|----|----|
|Type |React js is a library | React Native is a framework|
|Definition	|A JavaScript library, widely used for developing the user interface.|A cross-platform mobile framework used for developing native mobile applications.|
|User Interface	|ReactJS renders HTML tags in its user interface. React components can include simple HTML tags|React Native renders JSX in its user interface. React Native supports specific JSX tags which are used.|
|Styling|ReactJS uses Cascading Style Sheets (CSS).	|React Native uses a Stylesheet object (javascript object).|
|Navigation	|ReactJS uses the React router to allow users to visit different web pages.	|React Native uses its built-in Navigator library to allow users to visit different screens.|
|External library support	|ReactJS supports third-party packages but lacks native library support.	|React Native lacks both native libraries and third-party packages support.|
|Security|It has comparatively higher security.	|It has comparatively lower security.
|Applications|Facebook, Netflix, Medium, Udemy	|Uber Eats, Tesla|

### Q8. Difference b/w Stateful and stateless Component ?
|stateful|stateless|
|---|---|
|Stateful Protocols require the server to save the state of a process.	|Stateless Protocols do not need the server to save the state of a process.|
|They are logically heavy to implement.	|They are easy to implement.|
|It is difficult to code as one of the salient features here is data storage.	|It is much easier to code.|
|This makes the design heavy and complex since data needs to be stored.	|Server design is simplified in this case. |


### Q9. What do you know about NPM?
 - npm stands for Node Package Manager basically It's a library and registry for JavaScript software packages. npm also has command-line tools to help you for installing packages on your project as a external library this is the most usefull and we can install any packages using command line "npm i package-name" from npm
 - here are the some packages of npm 
  - react-router-dom
  - react-slick
  - bcrypt js
  - jsonwebtoken

  these are the packages install in react and show in package.json file as dependencies


### Q10. Do you prefer function-based or class component and why ?
- i prefer functional component because -
 - it is easy to write and understanding code.
 - Functional component are much easier to read and test because they are plain JavaScript functions   without state or lifecycle-hooks.
 - the length of code of boiler plate in functional component is less



### Q11. Difference between Library vs Framework
|Library|Framework|
|----|----|
|It comprises of lot of APIs , compilers , support programs , libraries etc.|It is a collection of helper modules , classes , objects , functions , pre-written code , etc.|
|It is difficult to replace frameworks.	|A library is easy to be replaced with another library.|
|Its example are AngularJS , Spring , NodeJS , etc.	|Its example are JQuery , React JS , etc. |
|Including framework smoothly into an existing project is impossible.|Libraries can be integrated easily into existing projects to add some specific functionality.|
|A framework development requires a lot of code that decrease performance and increase the load time.|Building a library requires less code , so there is better performance and fast load time.|
