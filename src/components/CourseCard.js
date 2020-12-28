export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <>
  
  <p>
    <div className="bg-red-900 hover:bg-green-900 rounded-3xl text-yellow-50">
      <br></br>
      <p>-  Course name : {props.name}</p>
      <p>-  Credit : {props.crd}</p>
      <p>-  Grade : {props.grd}</p>
      <p className="text-center text-yellow-500 hover:text-red-600"><button onClick = {() =>props.del(props.name)}> ----- Delete this course ----- </button></p>
      <br></br>
    </div>
    <br></br>
  </p>
  
  </>;
};