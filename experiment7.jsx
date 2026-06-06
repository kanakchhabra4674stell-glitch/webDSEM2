function Student(props){
return(
<div>
<h2>{props.name}</h2>
<p>{props.course}</p>
<p>{props.marks}</p>
</div>
);
}
export default function App(){
return(
<>
<Student name="Rahul" course="BCA" marks="90"/>
<Student name="Aman" course="MCA" marks="85"/>
</>
);
}