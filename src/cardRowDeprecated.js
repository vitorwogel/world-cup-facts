const xhr = new XMLHttpRequest()

function cards(){

    let data = []

    try{
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                
                data = JSON.parse(this.response)
            }
        }
        
        xhr.open('GET', 'http://localhost:5000/groups')
        xhr.send()
    }catch(e){
        console.log(e)
    }
    
    function rt(){
        console.log(data)
        return(
            <div className="cards-container">
                <div className="card">
                    <div className="card-header">
                        <h4>Group {}</h4>
                    </div>
                    <hr/>
                    <div className="card-body">
                        <ul>
                            <li>
                                Lorem
                            </li>
                            <li>
                                Ipsum
                            </li>
                            <li>
                                sit Dolor
                            </li>
                            <li>
                                Amet
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="card-footer">
                        <span>Matches and Stats</span>
                    </div>
                </div>
            </div>
        )
    }

    return setTimeout(rt(), 1000)
}

export default cards