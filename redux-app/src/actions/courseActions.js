//ACTION
export function createCourse(course) {
    return {
        type: "ADD_COURSE",
        payload: course
    }
}