import '../assets/styles/Project.scss';

interface ProjectItems {
    name: string,
    url: string,
    img_or_vid_url: string,
    description: string
}

function Project({name, url, img_or_vid_url, description}: ProjectItems){
    return <div className="project">
                <a href={url} target="_blank" rel="noreferrer">
                    { img_or_vid_url.includes(".mp4") ? 
                        <video src={img_or_vid_url} className="zoom" autoPlay loop muted width="100%" height="50%"/> :
                        <img src={img_or_vid_url} className="zoom" alt="thumbnail" width="100%"/>}
                </a>
                <a href={url} target="_blank" rel="noreferrer"><h2>{name}</h2></a>
                <p>{description}</p>
            </div>
}

export default Project