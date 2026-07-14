import axios from 'axios'
import React, { useState } from 'react'

const AddLog = () => {

    const[input,changeInput] = useState(
{
  "name":"",
  "department":"",
  "sem":"",
  "course":"",
  "systemNo":"",
  "login_time":"",
  "logout_time":"",
  "date":""
}

    )


            const inputHandler = (event) =>{


                    changeInput({...input,[event.target.name]:event.target.value})
            }


            const readValue = () => {

                    console.log(input)

                    axios.post("http://localhost:3000/add-labEntry",input).then(

                        (response) => {


                            console.log(response.data)

                            alert("Log added succesfully")

                        }

                    ).catch(

                        (error) => {


                            console.error("Error adding log:",error)

                            alert("Failed to add Log")


                        }

                    )


            }


  return (
    <div>

<h1 align="center">Add Lab Entry</h1>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Department</label>
<input type="text" className="form-control" name="department" value={input.department} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Semester</label>
<input type="text" className="form-control" name="sem" value={input.sem} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Course</label>
<input type="text" className="form-control" name="course" value={input.course} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">System No</label>
<input type="text" className="form-control" name="systemNo" value={input.systemNo} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Login Time</label>
<input type="time" className="form-control" name="login_time" value={input.login_time} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Logout Time</label>
<input type="time" className="form-control" name="logout_time" value={input.logout_time} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Date</label>
<input type="date" className="form-control" name="date" value={input.date} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-dark">SUBMIT</button>

        </div>
    </div>
</div>



        </div>
    </div>
</div>

    </div>
  )
}

export default AddLog
