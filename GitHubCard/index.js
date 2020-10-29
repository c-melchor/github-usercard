/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

axios.get('https://api.github.com/users/bigknell')
// axios.get('https://dog.ceo/api/breed/chihuahua/images/random/6')


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

const followersArray = [];

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

function markup(singleObj){
  const bigDiv = document.createElement('div')
  const image = document.createElement('img')
    bigDiv.appendChild(image)
    bigDiv.textContent='testing testing'

  const innerDiv = document.createElement('div')
    innerDiv.classList.add('card-info')
    bigDiv.appendChild(innerDiv)

    const h3 = document.createElement('h3')
      h3.classList.add('name')
      // h3.textContent=singleObj.data.textContent.name
      innerDiv.appendChild(h3)

    const userName = document.createElement('p')
      userName.classList.add('username')
      innerDiv.appendChild(userName)
      userName.textContent='username test'

    const location = document.createElement('p')
      innerDiv.appendChild(location)
    
    const profile = document.createElement('p')
      innerDiv.appendChild(profile)
      const  profileLink = document.createElement('a')
      profile.appendChild(profileLink)

    const followers = document.createElement('p')
      innerDiv.appendChild(followers)

    const following = document.createElement('p')
      innerDiv.appendChild(following)

    const bio = document.createElement('p')
    innerDiv.appendChild(bio)

    return bigDiv
}
cardsHolder.appendChild(markup())
console.log(markup())


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

axios
.get('https://api.github.com/users/bigknell')
.then( param => {
    console.log('working', param.data)
})
.catch( errParam => {
  console.log('nope', errParam)
})


