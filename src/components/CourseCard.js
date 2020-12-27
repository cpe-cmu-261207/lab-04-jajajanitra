export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <>
  
  <p>- Course name : {props.name}</p>
  <p>- Credit : {props.crd}</p>
  <p>- Grade : {props.grd}</p>
  <button onClick = {() =>props.del(props.name)} > --- Delete this course --- </button><br></br><br></br>
  </>;
};