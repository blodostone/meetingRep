import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';



class UserList extends Component {


    state = {
        currentPage: 0,
        itemsPerPage: 3
    }

    goNextHandler = () => {
        this.setState({
            currentPage:this.state.currentPage + 1
        })
    }

    goPrevHandler = () => {
        this.setState({
            currentPage:this.state.currentPage - 1
        })
    }



    render() {
        const { users } = this.props;
        const { currentPage, itemsPerPage } = this.state;

        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;
        
        const usersToDisplay = users.slice(start, end);

        return (
            <div>
                <Pagination 
                    goNext={this.goNextHandler}
                    goPrev={this.goPrevHandler}
                    currentPage={currentPage + 1}
                />
                <ul className="users">
                    {usersToDisplay.map(user => (
                        <User key={user.id} {...user} />

                    ))}
                </ul>
            </div>
        )
    }
}

export default UserList;