import React, { useContext, useEffect, useState } from 'react';
import { firebaseContext } from '../../store/Context';
import { PostContext } from '../../store/postContext';

import './View.css';
function View() {

  const [userDetails,setUserDetails] = useState()
  const {PostDetails} = useContext(PostContext)
  const {firebase} = useContext(firebaseContext)

  useEffect(() => {
    const {userId} = PostDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{

      res.forEach(doc => {
        setUserDetails(doc.data())
      });

    })
  
 
  }, [])
  


  return (

    
    <div className="viewParentDiv">
      
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>₹ {PostDetails.price}  </p>
          <span>{PostDetails.category}</span>
          <p>{PostDetails.name}</p>
          <span>{PostDetails.createdAt}</span>
        </div>


       {  userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>  }


      </div>
    </div>
  );
}
export default View;
