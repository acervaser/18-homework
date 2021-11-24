
import './App.css';
import React from "react";
import UserInfo from "./components/UserInfo";
import Baby from "./assests/img/baby_yoda.jpg";
import Yoda from "./assests/img/Yoda.jpg";

const userData = {
    name: "Baby Yoda",
    photo: Baby,
    nickname: "@baby_yoda"
};

const postData = {
    content: "My dear father, I miss you so much...",
    image: Yoda,
    date: "14 nov"
};

const App = () => {
    return (
        <div className="post">
            <div className="wrapper">
                <UserInfo name={userData.name} image={userData.photo} nickname={userData.nickname} />
                <span className="post-date">{postData.date}</span>
                <span className="post-content">{postData.content}</span>
            </div>
            <img className="post-image" src={postData.image} alt="Some post" />
        </div>
    );
};

export default App
