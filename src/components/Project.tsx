import '../assets/styles/Project.scss';
import ReactPlayer from 'react-player'

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
                        <ReactPlayer url={img_or_vid_url} playing={true} loop={true} volume={0} width={800} height={485} /> : 
                        <img src={img_or_vid_url} className="zoom" alt="thumbnail" width="100%"/>}
                </a>
                <a href={url} target="_blank" rel="noreferrer"><h2>{name}</h2></a>
                <p>{description}</p>
            </div>
}

export default Project