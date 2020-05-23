import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { createCourse } from '../actions/courseActions'

const Courses = () => {
    //assign redux to state
    const courses = useSelector(state => state.courses)
    const dispatch = useDispatch()

    //Function
    const addCourse = () => {
        const newCourse = {
            id: uuidv4(),
            name: 'HTML & CSS',
            description: `description ${uuidv4()}`
        }
        dispatch(createCourse(newCourse))
    }

    return (
        <div>
            <h1>Courses</h1>
            {courses.map(({ id, name, description }) => ( //destructuring
                <div key={id}>
                    <h2>{name}</h2>
                    <p>Description: {description}</p>
                </div>
            ))}
            <button onClick={addCourse}>Add a course</button>
        </div>
    )
}
export default Courses
