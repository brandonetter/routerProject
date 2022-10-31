export const routes = {
  "/": {
    content: `
      <h1>Home Page!</h1>`,
  },
  "/page1": {
    content: `
      <h1>Welcome To Page1</h1>
      <div class='main'>
      <div class='card'>
      <div class='cardTitle'>
          Card Uno
      </div>
      </div>
      <div class='card'>
      <div class='cardTitle'>
          Card Uno
      </div>
      </div>
      </div>
      `,
  },
  "/page2": {
    content: `
      <h1>Welcome To Page2</h1>
      Here are my interests:
      <ul>
      <li>Tacos</li>
      <li>Javascript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Eating Tacos</li>
     </ul> `,
  },
};
