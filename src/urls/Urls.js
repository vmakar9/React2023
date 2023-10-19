// const baseURL = "https://jsonplaceholder.typicode.com/"

const baseURL="https://api.spacexdata.com/v3/"

const posts = 'posts'

const launches = 'launches/'


const urls={
    posts:{
        base:posts,
        byId:(id)=>`${posts}/${id}`
    },
    spaceX:{
        base:launches
    }
}

export {baseURL,urls}