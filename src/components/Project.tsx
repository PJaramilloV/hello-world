import '../assets/styles/Project.scss';

interface ProjectItems {
    name: string,
    url: string,
    imgPath: string,
    description: string
}

function Project({name, url, imgPath, description}: ProjectItems){
    return <div className="project">
                <a href={url} target="_blank" rel="noreferrer"><img src={imgPath} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={url} target="_blank" rel="noreferrer"><h2>{name}</h2></a>
                <p>{description}</p>
            </div>
}

export default Project