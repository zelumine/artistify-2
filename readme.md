# Artistify Workshop

This group workshop will walk you through the steps to create a fullstack application.  

**Work as a team, communicate, splits tasks, avoid git conflicts !**
<br/>

![alt text][intro]

[intro]: https://media.giphy.com/media/3o6ZtjUZAD5Lf0QFLW/giphy.gif "rock on !"


---

## Day II - More C.R.U.D and Collection references (end @ 13h00)

Today, we will continue the dashboard CRUD with an important addition.  
We will introduce a new model : Album.  
It's an interesting one since it's linked to 2 other models : Artist and Label.  
One album is indeed performed by an artist and produced by a label (debatable :)

**Don't worry** if you can't finish all the steps : you will get a soluce proposal.

**Do your best : Happy hacking !**

---

### Todos

- create model Album:
  - link Album to Artist with a ref (ObjectId)
  - link Album to Label with a ref (ObjectId)
- CRUD Album
  - the Create is **provided** but select/option displaying artists and label are **missing**
  - the Read is **provided**
  - code the Update form + routes
  - code the Delete route

- **BONUS Artist**
  - Link Artist model to Style with a ref (array of ObjectId)
  - Update the provided code to add style to CRUD Artist

---

The Album model should be located in /models/Album.js

The Album model must have the following properties :

- title - String
- releaseDate - Date
- label - { type: Schema.Types.ObjectId, ref: "labels" }
- artist - { type: Schema.Types.ObjectId, ref: "artists" }
- cover - String (default:https://res.cloudinary.com/gdaconcept/image/upload/v1614550771/workshop-artistify/no-image-logo_dcufai.png)

The artist router should be located in /routes/album.js .  
All those routes are **prefixed** with /dashboard/album/  

<br/>
Here is a routes description:

| Route         | HTTP | View                       | Description                                          |
| ------------- | ---- | -------------------------- | ---------------------------------------------------- |
| `/`           | GET  | dashboard/album.hbs        | Show all albums in a dashboard table                 |
| `/create `    | GET  | dashboard/albumCreate.hbs  | Display album create form                            |
| `/update/:id` | GET  | dashboard/albumUpdate.hbs  | Display album update form                            |
| `/delete/:id` | GET  | none                       | Delete one album and redirect to /dashboard/album    |
| `/`           | POST | none                       | Create one album and redirect to /dashboard/album    |
| `/:id`        | POST | none                       | Update one album and redirect to /dashboard/album    |

<br/>


---

Done already ? Congratz !  


![alt text][congratz]

[congratz]: https://media.giphy.com/media/blSTtZehjAZ8I/giphy.gif "all done"



