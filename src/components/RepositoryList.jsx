import { ReposiroryItem } from "./RepositoryItem.jsx"

const repository = {
    name: "unform",
    description: "Forms in React" ,
    link: "https://github.com/unform/unform" 
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <ReposiroryItem repository={repository} />               
                <ReposiroryItem repository={repository} />
                <ReposiroryItem repository={repository} />
                <ReposiroryItem repository={repository} />
            </ul>

        </section>

    );
}