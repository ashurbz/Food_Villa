import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ashurbz");
        const json = await data.json()
        
        this.setState({
            userInfo:json
        })
       this.timer= setInterval(()=>{
            console.log('setInterval')
        },1000)
    }

    componentWillUnmount(){
       clearInterval(this.timer) 
    }
    
    
    render(){
        const  {name,location, avatar_url} = this.state.userInfo
      
        return <div>
            <h1>Profile</h1>
            <img src={avatar_url} width='200px' height='200px'/>
            <h3>{name}</h3>
            <h4>{location}</h4>
        </div>
    }
}

export default Profile;