import './GrowingTogether.css';

function GrowingTogether(){
    return (
        <div className = "WholePage">
            <h1>Growing Together</h1>
            <p className = "HowToHelp">How can you help?</p>
            <div className = "Container">
                <div className = "RowOne">
                    <h2 className = "One">01</h2>
                    <p className = "Partner">
                        PARTNER: Share time, expertise, information, and resources with 
                        Sankofa facilitators and potentially share with the group.
                    </p>
                </div>
                <div className = "RowTwo">
                    <h2 className = "Two">02</h2>
                    <p className = "Share">
                        SHARE: Help distribute the word about our group and be an ambassador
                        as to the importance of having culturally relevant support groups for
                        families in underserved communities. 
                    </p>
                </div>  
            </div>
        </div>
    );
}

export default GrowingTogether;