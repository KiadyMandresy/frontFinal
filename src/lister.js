
import React, { Component} from 'react';
import Header from './Header';
import authHeader from './auth-header';

class lister extends Component {

    /*constructor(props) {
        super(props);
        this.state = {region: [],
            redirect: null,
            userReady: false,
            currentUser: { username: "" },
            nbPage : null};
        this.remove = this.remove.bind(this);
        this.changePage = (data) => {
            fetch('/signalementRegion/Diana/1',{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  
                }
            })
                .then((response) => {
                    if (response.ok) {
                        const body = response.json();
                        this.setState({cl: body});
                      
                      return response.json();
                    } else {     
                        this.props.history.push('/');
                        window.location.reload();
                    }
                  })
                .then(data => this.setState({region: data.content,nbPage: data.totalPages}));
            console.log(data.selected);
        }



        state = {
            region: []
        };
        
        async componentDidMount() {
            const response = await fetch('/signalementRegion/Diana/1');
            const body = await response.json();
            this.setState({region: body});
        }

    

     render() {

        const {region} = this.state;
        return (
            <div className="App">
            <header className="App-header">
               
                <div className="App-intro">
                <h2>region</h2>
                {region.map(region =>
                    <div key={region.id}>
                        {region.commentaire} ({region.nom})
                    </div>
                )}
                </div>
            </header>
            </div>
        );
    }*/

}

export default lister;   
