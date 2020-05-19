## Repositories API

- [api](#module_api)
  - [~app](#module_api..app) : <code>Object</code>
  - [~repositories](#module_api..repositories) : <code>Array</code>
  - [~message(res, status, message)](#module_api..message)
  - [~validateRepositoryId(req, res, next)](#module_api..validateRepositoryId) ⇒ <code>Object</code>
  - [~/repositories](#module_api../repositories) ⇒ <code>Array</code>
  - [~/repositories/:id](#module_api../repositories/_id) ⇒ <code>Object</code>
  - [~/repositories](#module_api../repositories) ⇒ <code>Object</code>
  - [~/repositories/:id](#module_api../repositories/_id) ⇒ <code>Object</code>
  - [~/repositories/:id](#module_api../repositories/_id) ⇒ <code>Object</code>
  - [~/repositories/:id/like](#module_api../repositories/_id/like) ⇒ <code>Object</code>

<a name="module_api..app"></a>

### app : <code>Object</code>

Express instance

**Kind**: inner constant of [<code>api</code>](#module_api)
<a name="module_api..repositories"></a>

### repositories : <code>Array</code>

Repositories

**Kind**: inner constant of [<code>api</code>](#module_api)
<a name="module_api..message"></a>

### message(res, status, message)

Generic message function, containing by default a error message with a 400 HTTP status error.

**Kind**: inner method of [<code>api</code>](#module_api)

| Param   | Type                | Default                         | Description                        |
| ------- | ------------------- | ------------------------------- | ---------------------------------- |
| res     | <code>Object</code> |                                 | Express response object            |
| status  | <code>number</code> | <code>400</code>                | Status returned from HTTP request  |
| message | <code>String</code> | <code>Resource Not found</code> | Message returned from HTTP request |

<a name="module_api..validateRepositoryId"></a>

### validateRepositoryId(req, res, next) ⇒ <code>Object</code>

See more about [midlewares in express](https://expressjs.com/en/guide/using-middleware.html)

**Kind**: inner method of [<code>api</code>](#module_api)
**Returns**: <code>Object</code> - If the UUID is valid, executes the next function. If the conditions are not met, returns an error message.

| Param | Type                  | Description                                                                                                    |
| ----- | --------------------- | -------------------------------------------------------------------------------------------------------------- |
| req   | <code>Object</code>   | Express request object                                                                                         |
| res   | <code>Object</code>   | Express response object                                                                                        |
| next  | <code>function</code> | Next function to be executed, can be another middleware or the function responsable for the requested endpoint |

<a name="module_api../repositories"></a>

### /repositories ⇒ <code>Array</code>

<p> Returns all the stored repositories </p>

**Method**: GET </br>
**Returns**: <code>Array</code> - A list of repositories
<a name="module_api../repositories/_id"></a>

### /repositories/:id ⇒ <code>Object</code>

<p> Find a specific stored repository </p>

**Method**: GET </br>
**Returns**: <code>Object</code> - If the repository exists, return the found repository, else returns an error message
<a name="module_api../repositories"></a>

### /repositories ⇒ <code>Object</code>

<p> Add a repository to the list </p>

**Method**: POST </br>
**Returns**: <code>Object</code> - The repository created by the user

| Param | Type                | Description                                                  |
| ----- | ------------------- | ------------------------------------------------------------ |
| url   | <code>String</code> | Url of the repository                                        |
| title | <code>String</code> | Title of the repository                                      |
| techs | <code>Array</code>  | Technologies related to the project stored in the repository |

<a name="module_api../repositories/_id"></a>

### /repositories/:id ⇒ <code>Object</code>

<p> Update a stored repository </p>

**Method**: PUT </br>
**Returns**: <code>Object</code> - If the repository exists, update the found repository and return to the user, else returns an error message

| Param | Type                | Description                                                  |
| ----- | ------------------- | ------------------------------------------------------------ |
| url   | <code>String</code> | Url of the repository                                        |
| title | <code>String</code> | Title of the repository                                      |
| techs | <code>Array</code>  | Technologies related to the project stored in the repository |

<a name="module_api../repositories/_id"></a>

### /repositories/:id ⇒ <code>Object</code>

<p> Delete a stored repository </p>

**Method**: DELETE </br>
**Returns**: <code>Object</code> - If the repository exists, delete the repository and returns a empty response with a 204 HTTP status code. If fails, returns an error message
<a name="module_api../repositories/_id/like"></a>

### /repositories/:id/like ⇒ <code>Object</code>

<p> Gives a thumbs up to a specific repository </p>

**Method**: POST </br>
**Returns**: <code>Object</code> - Returns how many likes the repository has after the update
<a name="app"></a>
