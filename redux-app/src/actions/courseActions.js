//ACTION
export function createCourse(course) {
    return {
        type: "ADD_COURSE",
        payload: course
    }
}

export function createCourse(id) {
    return {
        type: "DELETE_COURSE",
        payload: id
    }
}

export function createCourse(newCourse) {
    return {
        type: "EDIT_COURSE",
        payload: newCourse
    }
}