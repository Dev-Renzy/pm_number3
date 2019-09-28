import React, {Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameVal : "Renzy",
            passVal : "Verano",
            name : '',
            password: '',
            situation : ''
        }
    }

    name(e){
        this.setState({
            name: e.target.value
        })
    }

    password(e){
        this.setState({
            password: e.target.value
        })
    }

    situation(e){
        if(this.state.name === this.state.nameVal){
            this.setState({
                situation: "Hi! "+ (this.state.name)
            })
        }else{
            this.setState({situation : "Invalid"})
        }
    }

    render(){
        return(
            <div>
                <h2>
                    Name:
                </h2>
                <input type="text" placeholder="Enter name" onChange={(e) => this.name(e)}></input>
                <h2>
                    Password:
                </h2>
                <input type="password" placeholder="Enter Password" onChange={(e) => this.password(e)}></input>
                <button onClick = {(e) => this.situation(e)}>OK</button>
                <br></br>
                <h1>{this.state.situation}</h1>
            </div>
        )
    }
}

export default Login;