const title = document.querySelector("h1")
const description = document.querySelector("#description")
const button = document.querySelector("button")
const articles = document.querySelector(".articles")
const feedbackDom = document.querySelector("#feedbacks")
const beneficesDom = document.querySelector("#benefices")

const addBenefices = (list) => {
  console.log(list)
  let ul = document.createElement("ul")
  list.forEach(element => {
    const p = document.createElement("p")
    p.innerText = element
    ul.appendChild(p)
  })
  beneficesDom.appendChild(ul)
  console.log(ul)
}

const url = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json"
fetch(url)
.then(response => response.json())
  .then(data => {
    title.innerText = data.nomCommercial
    description.innerText = data.phraseAccroche
    button.innerText = data.texteBouton
    const realisations = data.realisations
    const feedbacks = data.temoignages
    
    const benefices = data.listeBenefficesClients
    addBenefices(benefices)
    
    realisations.forEach(realisation => {
      const article = document.createElement("div")
      article.classList.add("article")
      
      const h2 = document.createElement("h2")
      h2.innerText = realisation.nom
      article.appendChild(h2)

      const p = document.createElement("p")
      p.innerText = realisation.description
      article.appendChild(p)

      articles.appendChild(article)

    })
    feedbacks.forEach(feedback => {
      const feedDiv = document.createElement("div")
      feedDiv.classList.add("feedDiv")
      feedbackDom.appendChild(feedDiv)
      const clientH2 = document.createElement("h2")
      clientH2.innerText = feedback.prenom
      feedDiv.appendChild(clientH2)

      const prestationP = document.createElement("p")
      prestationP.innerText = feedback.typePrestation
      feedDiv.appendChild(prestationP)

      const commentaireC = document.createElement("p")
      commentaireC.innerText = feedback.commentaire
      feedDiv.appendChild(commentaireC)

      const notes = document.createElement("p")
      notes.innerText = feedback.note
      feedDiv.appendChild(notes)

    

    })
    
  
    })

  
