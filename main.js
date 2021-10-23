const linksSocialMedia = {
    github: "karolynaassuncao",
    youtube: "rocketseat",
    instagram: "karolynaassuncao",
    facebook: "karolyna.assuncao",
    twitter: "karolynaassuncao"
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}
changeSocialMediaLinks()

async function getGitHubProfileInfos(){
    const url =`https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json()) 
        // fetch(url) entra na URL e pega as informações solicitada
        // .then(response.json) está pega as informações como promessa e converte em json
        // .then(data)   
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })

    // const teste =  await fetch(url)

    // console.log(teste)
}

getGitHubProfileInfos()