import React from 'react';
import '../css/Home.css';
import moment from 'moment';


const Home = ({ post, currentUser }) => {
    return (
        <>
            <div className="home">
                {currentUser ?
                    <div className="nameBox">
                        <h1>Hello {currentUser.firstName}! Here are all the peeps</h1>
                    </div>
                    :
                    <div className="noNameBox">
                        <h1>Hello! Here are all the peeps</h1>
                    </div>
                }

                {post.map((eachPost, index) => (
                    <div key={index} data-testid="postBody" className="box">
                        <h3 id='peepBox'>{eachPost.postBody}</h3>
                        {eachPost.firstName} {eachPost.secondName}<br />
                        {eachPost.userName}
                        <div className='middleLine'></div><br />
                        {eachPost.postDate ? moment(eachPost.postDate).calendar() : <></>}
                    </div>
                ))
                }
            </div>
        </>
    );
}


export default Home;