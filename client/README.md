# Getting started

First make a `.env` file inside the client folder and type in the following environment variable

```
REACT_APP_BASE_URL = http://localhost:3000
```

**Note: Environment variables in CRA should always start with `REACT_APP_`**

After creating the `.env` file open the terminal and type the following command

```
$ npm install
```

This will install all the necessary dependencies.

# Dependencies

Apart from the CRA dependencies this project uses:

1. [react-router-dom](https://www.npmjs.com/package/react-router-dom) for routing through pages.
2. [axios](https://www.npmjs.com/package/axios) for making http request.
3. [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) for icons.
   - [@fortawesome/free-regular-svg-icons](https://www.npmjs.com/package/@fortawesome/free-regular-svg-icons) for regular svg icons.
   - [@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) for solid svg icons.

# Scripts

### 1. `start`

Open the terminal and type the following command to start the react app

```
$ npm start
```

This will the the app on port 3000 by default or a different port if port 3000 is not available.

### 2. `build`

To make a production build open the terminal and type in the following command

```
$ npm build
```

This will create a `build` folder which is production ready.

# Code walkthrough

Inside the `/src/components` folder there are directories for each components which consists of a `index.js` file for the component and a `stylesheet` file for styles of the particular component.

## 1. App.js

The main file for the application is `App.js` (excluding `index.js` which is the entry file) which is in the root of `src`. It contains basic routing for pages.

```JSX
  <Switch>
    <Route exact path="/">
      {status && <Modal closeModal={() => setStatus(false)} />}
      <div className="container">
        <button id="modal-trigger" onClick={() => setStatus(true)}>
          Open Modal
        </button>
      </div>
    </Route>
    //Not a protected route right now
    <Route exact path="/purchase-details">
      <PurchaseDetails />
    </Route>
  </Switch>
```

The `<Switch>` allows us to render the first page that matches the `path` in `<Route>`. The `exact` props in route checks whether the entered route matches the `path` props exactly. Also there is an unprotected route `/purchase-details` which can be protected using authentication for deploying it to production.

## 2. CreateProject/index.js

This component handles the form for creating a project. It has `controlled input` which has a `handleChange` method hooked into the `onChange` props. Also for validation there is a custom form validator `validator(name, value)` function that checks whether the entered value meets the necessary requirements or not. The error messages are conditionally rendered as

```html
- - - - - - - - - - - - - - - - - -
<input
  type="text"
  autofocus
  required
  autocomplete="off"
  onChange="{handleChange}"
  name="name"
  placeholder="Title"
/>
{error.name ? (<small className="error">*Characters exceedeed!</small>) : null}
- - - - - - - - - - - - - - - - - -
```

A function `handleChange` is hooked into the `onSubmit` props of the `form` which on submission makes a **POST** request to the `/project` route with the request body as

```JSON
{
  "name": "Mini Project",
  "summary": "This is a react mini project",
  "date": "2020-12-26",
  "cost": "405"
}
```

## 3. Modal/index.js

This a modal component which triggers when we click the `Open Modal` button. It has a `switch` case which returns components based on the case number. Also we can scale the form to add more pages in between the modal by simply adding more cases.

```Javascript
switch (step) {
  case 1:
    return <CreateProject next={next} closeModal={props.closeModal} />;

  case 2:
    return <Payment closeModal={props.closeModal} />;

  default:
    return <></>;
}
```

It receives a props `closeModal` from the parent that is hooked into the `X` icon to close the modal.

## 4. Payment/index.js

This is just a static component for now but can be made dynamic when connected to a database. Clicking the button `Pay` routes the page to `/purchase-details`.

## 5. PurchaseDetails/index.js

This is the order page which has the cost details in it. It uses a `useEffect` hook that runs once the component mounts. It fetches the details by making a **GET** request to the `/project` endpoint.
