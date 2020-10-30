/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cardsHolder = document.querySelector('.cards')


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function markup(userHere){
  const bigDiv = document.createElement('div')
  const image = document.createElement('img')
  const innerDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const  profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
   

  bigDiv.appendChild(image);
  bigDiv.appendChild(innerDiv);
  innerDiv.appendChild(h3);
  innerDiv.appendChild(userName);
  innerDiv.appendChild(location);
  innerDiv.appendChild(profile);
  profile.appendChild(profileLink);
  innerDiv.appendChild(followers);
  innerDiv.appendChild(following);
  innerDiv.appendChild(bio);


  bigDiv.classList.add('card');
  innerDiv.classList.add('card-info');
  h3.classList.add('name');
  userName.classList.add('username');
    
// innerDiv.style.flexWrap='nowrap'

  image.src = userHere.avatar_url
  h3.textContent = userHere.name;
  userName.textContent = userHere.login;
  location.textContent = 'Location: ' + userHere.location;
  // profile.textContent = "Profile: "
  profileLink.textContent = userHere.html_url
  profileLink.href = userHere.html_url
  followers.textContent = 'Followers: ' + userHere.followers;
  following.textContent = 'Following: ' + userHere.following
  bio.textContent = 'Bio: ' + userHere.bio


    return bigDiv
    
}





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

axios
.get('https://api.github.com/users/c-melchor')
.then(success => {
const workingNow = success.data
cardsHolder.appendChild(markup(workingNow));
console.log(success.data)
})
.catch(errParam => {
console.log('nope',errParam)
})



const followersArray = ['tetondan', 'dustinmyers', 'justsml','luishrd','bigknell'];

for (let i = 0; i < followersArray.length; i++){
axios
.get('https://api.github.com/users/' + followersArray[i])
.then( futureData => {
  const  theirData = futureData.data
  cardsHolder.appendChild(markup(theirData))
})
.catch( error => {
  console.log(`nope, did not work`)
})
}
