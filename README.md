<h1 align="center">
  <br>
    <img height="200" src="https://github.com/wooseok0717/chunggy/assets/53969430/57ef2d0d-a41f-4dd7-9ea7-12cff3c89062">
    <h3 align="center">
        Simulator built to see items from Aion.
      <br>
    </h3>
</h1>

<h2>Features that is ready to be used</h2>

<details>
  <summary><h3>Display list from database</h3></summary>
  <ul>
    <li>Efficiently retrieves accurate items through querying the database..</li>
    <li>A filter is dynamically assigned whenever there are changes in state, encompassing part, type, grade, and search input parameters.</li>
    <li>The list is sorted based on the user-assigned criteria, accessible through a button located at the top-right corner of the page.</li>
    <li>The 'Add' button facilitates the inclusion of items into the database.</li>
  </ul>
  <br>
  <img src="https://github.com/wooseok0717/chunggy/assets/53969430/1cd2c776-ecb6-4834-af3c-7e0911a88fbb">

</details>

<details>
  <summary><h3>Display for individual item</h3></summary>
  <ul>
    <li>The individual item is displayed upon a user click event.</li>
    <li>Upon clicking, it retrieves details from the database.</li>
    <li>It displays the item in the appropriate format along with its relevant details.</li>
  </ul>
  <br>
  <img src="https://github.com/wooseok0717/chunggy/assets/53969430/c1646b01-92d4-4415-adcc-a59d7129a066">
</details>

<details>
  <summary><h3>Manage users</h3></summary>
  <ul>
    <li>It presents the user details of individuals who have signed up through Google Sign-In (Firebase).</li>
    <li>It showcases the data provided by the user during the sign-up process.</li>
    <li>Roles can be reassigned by selecting the desired role for the user.</li>
    <li>It is possible to filter users based on their roles.</li>
    <li>Additionally, users can be filtered based on the in-game name (IGN) they provided during the sign-up process.</li>
    <li>This page is accessible exclusively to managers.</li>
    <li>The role reassignment privilege is restricted to the owner.</li>
  </ul>
  <br>
  <img src="https://github.com/wooseok0717/chunggy/assets/53969430/e3781d5e-9b34-49c5-90f8-b3865fba35fe">
</details>

<details>
  <summary><h3>SignIn/SignOut/SignUp</h3></summary>
  <ul>
    <li>Users have the option to sign in using Google Sign-In.</li>
    <li>Users can fill out a form to provide their information for insertion into the database.</li>
    <li>The user information will be utilized to display names on the page.</li>
    <li>The information will also be used to create an item in the database, subsequently logging the record.</li>
    <li>It will also retain the record for future modification of the item (under development).</li>
  </ul>
  <br>
  <img src="https://github.com/wooseok0717/chunggy/assets/53969430/dade281e-a5b0-4cbc-8056-821d66aff1b1">
</details>

<details>
  <summary><h3>Add new item to the database</h3></summary>
  <ul>
    <li>Database access for addition is restricted to the website's owner and managers only.</li>
    <li>Users will provide information about the item to be inserted into the database.</li>
    <li>The item added by the user will be uploaded to the database through an Axios request.</li>
  </ul>
  <br>
  <img src="https://github.com/wooseok0717/chunggy/assets/53969430/08d98d35-bce9-45c8-bd91-8a0530f3113e">
</details>

<details>
  <summary><h3>Navigation Bar</h3></summary>
  <ul>
    <li>Upon clicking, the item will lead to its own dedicated page, allowing users to utilize selected features associated with it.</li>
    <li>Each item will have its own unique link that leads to its dedicated page, enabling users to access and utilize selected features associated with that item.</li>
  </ul>
  <br>
  <img src="https://github.com/wooseok0717/chunggy/assets/53969430/92bf8077-7a94-4de3-8ab8-c8999e2ca7b8">
</details>

<h2>Feature that will be worked on</h2>

<details>
  <summary><h3>Home Feature(not built yet)</h3></summary>
  <br>
  <ul>
    <li>The web application will display a list of features along with user-friendly guides on how to utilize them.</li>
    <li>These guides will provide step-by-step instructions to help users navigate and maximize the functionality of the application.</li>
    <li>Additionally, there may be tooltips, contextual help, or a comprehensive help section accessible from the navigation menu, providing further assistance to users as needed.</li>
    <li>The goal is to ensure a smooth and intuitive user experience, empowering users to make the most out of the application's capabilities.</li>
  </ul>
</details>

<details>
  <summary><h3>Gear Simulator(not built yet)</h3></summary>
  <br>
  <ul>
    <li>Users will have the capability to personalize and configure their own equipment setups according to their preferences.</li>
    <li>This functionality allows users to select specific parts and components for their equipment, creating a customized setup that meets their individual needs and requirements.</li>
    <li>By providing this level of customization, the web application empowers users to tailor their equipment to suit their unique preferences and use cases effectively.</li>
  </ul>
</details>

<details>
  <summary><h3>Crafting(not built yet)</h3></summary>
  <br>
  <ul>
    <li>Users will have the ability to create craft recipes for various items or products within the web application.</li>
    <li>These craft recipes will allow users to define the required materials, quantities, and steps involved in the crafting process.</li>
    <li>Additionally, users will be able to view and access existing recipe designs for crafting.</li>
    <li>This feature will enable them to explore and learn from established recipes, providing valuable insights.</li>
  </ul>
</details>

## Technologies

### FrontEnd Tech
<p>
  <img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png">
  <img height="50" src="https://github.com/wooseok0717/chunggy/assets/53969430/1fd9d965-34fe-477b-8b41-f903c1d40cd5">
  <img height="50" src="https://github.com/wooseok0717/chunggy/assets/53969430/05173592-251a-4b8d-b6c9-368f45047000">
</p>

### Server Tech
<p>
  <img height="50" src="https://github.com/wooseok0717/chunggy/assets/53969430/0a907a71-ae2d-4f47-b7aa-af242ad95949">
  <img height="50" src="https://github.com/wooseok0717/chunggy/assets/53969430/7f85d781-b4b5-4aa7-932a-b110f3d17856">
  <img height="50" src="https://github.com/wooseok0717/chunggy/assets/53969430/70937a5f-a186-4c0b-ac2b-0fc8af535da4">
</p>

### Database Tech
<p>
  <img height="50" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png">
</p>

### Deployment Tech
<p>
  <img height="50" src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png">
</p>

### Authentication Tech
<p>
  <img height="50" src="https://github.com/wooseok0717/chunggy/assets/53969430/2ff6c72d-8d3c-4c65-be72-63c5b0541c28">
</p>

