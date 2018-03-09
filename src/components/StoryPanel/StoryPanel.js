import React from "react";

// const StoryPanel = (props) =>
//     <div className="card blue-grey darken-1">
//         <div className="card-content white-text">
//             {...props}
//         </div>
//     </div>

// import React from "react";
// //for testing
// import { Button, Row, Col, CardPanel } from "react-materialize";

// const StoryPanel = (props) => {
//   return (
//     <div>
//       <Row>
//         <Col s={20} m={10}>
//           <CardPanel className="blue-grey darken-1">
//             <h1>View All Stories</h1>
//             <li className="list-group-item">
//               <h3>
//                 <span><em>Title:</em></span>
//                 {props.text}
//                 <span><em>Story:</em></span>
//                 {props.words}
//               </h3>
//             </li>

            {/* <button onClick={props.loadStories} type="button">View Story</button> */}



            {/* <button onClick={props.handleDeleteClick} type="button">Delete this Story</button> */}
            {/* <button onClick={props.deleteStory(props._id)}>Delete this Story</button> */}

            {/* <div>
              <button onClick={() => props.handleClick(props._id)} 
              type = "button"
              >
              Delete this Story
              </button>
              <button onClick={() => props.gdUploadStory(props._id, props.words)} 
              type = "button"
              >
              Google Drive Upload
              </button>
            </div> */}


          {/* </CardPanel>
        </Col>
      </Row>
    </div>
  )
} */}


// export default StoryPanel;

const StoryPanel = ({children}) =>
    <div className="card blue-grey darken-1">
        <div className="card-content white-text">
            {children}
        </div>
    </div>

export default StoryPanel;