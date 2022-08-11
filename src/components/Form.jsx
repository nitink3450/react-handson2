import React,{useState} from "react";

export function Form() {
  const [store,setStore] = useState({name:'',department:'',rating:''});
  const [out,setOut] = useState([]);
  let input = (e) =>{
    let name = e.target.name;
    let inputValue = e.target.value; 
    setStore({...store,[name]:[inputValue]});
  }
  const submitted = (e) => {
    e.preventDefault();
    setOut([...out,{...store,id:out.length}]);
  }
  return (
    <div className="container">
      <form onSubmit={submitted}>
        <label htmlFor="name">Name :</label>
        <input type="text" onChange={input} name='name' placeholder="Enter Name.." />
        <br />
        <label htmlFor="name">Department :</label>
        <input type="text" onChange={input} name='department' placeholder="Field" />
        <br />
        <label htmlFor="name">Rating :</label>
        <input type="text" onChange={input} name='rating' placeholder="Out of 5" maxLength={1} minLength={1} />
        <br />
        <br />
        <input style={{ fontSize: "xx-large", height: "65px" }} type="submit" value="Submit"/>
        <div className="feedStoreDiv">
        {out.map((ele)=>(
          <h3 className="feedStoreData" key={ele.id}>
          Name : {ele.name} || Department : {ele.department } || Rating : {ele.rating}
          </h3>))}
        </div>
      </form>
    </div>
  );
}





// import React,{useState} from "react";
// import "./style.css";
// export const Form = () => {
//     const [store,setStore] =useState({
//         name:'',
//         department:'',
//         rating: ''
//     });
//     const [out,setOut]= useState([]);
//     const input1 = (e) =>{
//         const name = e.target.name;
//         const value = e.target.value;       
//               // console.log(name,value);        
//         setStore({...store,[name]:[value]});   
             
//     }
//     const submitted = (e) =>{
//         e.preventDefault();
//         setOut([...out,{...store,id:out.length}])
//         // console.log(out);
        
        
//     }
//   return (
//     <>
//     <div>
//       <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
//       <form onSubmit={submitted}>
//         <label className="text1">
//           Name:
//           <input required className="box1" type="text" name="name"  onChange={input1}/>
//         </label>
//         <label className="text2">
//           Department:
//           <input required className="box1" type="text" name="department"  onChange={input1}/>
//         </label>
//         <label className="text3">
//           Rating:
//           <input required className="box1" type="number" name="rating" onChange={input1}/>
//         </label>
//         <input className="box2" type="submit" />
//       </form>
      
//     </div>
//     <div className="box4" >
//     {out.map(ele =>(<h4 className="text4" key={ele.id}>Name:{ele.name} || Department:{ele.department} || Rating:{ele.rating} </h4>))}
//     </div>
//     </>
//   );
// };

// value={store.name}
// value={store.rating} 
// value={store.department}