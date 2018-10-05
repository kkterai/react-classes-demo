import React from 'react';

const Data = (props) =>

    <div>
        <br></br>
        <h1><a href={props.userInfo.html_url}>{props.userInfo.login}</a></h1>
        <img src={props.userInfo.avatar_url}></img>
        { props.userInfo ? <p><a href={props.userInfo.repos_url}>Repos URL</a></p> : "" }
    </div>

export default Data;