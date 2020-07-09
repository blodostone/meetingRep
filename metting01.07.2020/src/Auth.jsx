import React from 'react';
import Login from './Login';
import Spinner from './Spinner';
import Logout from './Logout';


class Auth extends React.Component {
    
    constructor() {
        super();

        this.state = {
            inLoggedIn: false,
            isProcessing: false
        }
    }


    login = () => {
        this.setState({
            isProcessing: true
        })

        setTimeout(() => {
            this.setState({
                isProcessing: false,
                isLoggedIn: true
            })
        }, 2000)


        // this.setState({
        //     isLoggedIn:true
        // })
    }

    logout = () => {
        this.setState({
            isLoggedIn:false
        })
    }



    render() {

        const {isLoggedIn, isProcessing} = this.state;

        if(isProcessing) {
            return (
                <Spinner size={15}/>
            )
        }

        if(isLoggedIn) {
            return (
                <Logout onLogout={this.logout}/>
            )
        }

        return (
            <Login onLogin={this.login}></Login>
        )

        // return(<>
        // <Login></Login>
        // <Spinner></Spinner>
        // <Logout></Logout>
        // </>
        // )
    }
} 

export default Auth;