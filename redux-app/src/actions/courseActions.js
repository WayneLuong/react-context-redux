//ACTION
export function createCourse(course) {
    return {
        type: "ADD_COURSE",
        payload: course
    }
}

export function deleteCourse(id) {
    return {
        type: "DELETE_COURSE",
        payload: id
    }
}

export function editCourse(newCourse) {
    return {
        type: "EDIT_COURSE",
        payload: newCourse
    }
}