import API from './client';

export function getAnalytics(payload) {
  return API({
    method: 'GET',
    url: `/getcounts`,
  })
}

export function getStudentsDetailsData(payload) {
  return API({
    method: 'GET',
    url: `/getstudentdetails`,
  })
}

export function getDrivesDetailsData(payload) {
  return API({
    method: 'GET',
    url: `/getdrivedetails`,
  })
}

export function addStudentDetails(payload) {
  return API({
    method: 'POST',
    url: `/insertstudentdetails`,
    data: payload
  })
}

export function addDriveDetails(payload) {
  return API({
    method: 'POST',
    url: `/insertdrivedetails`,
    data: payload
  })
}

export function updateStudentDetails(payload) {
  return API({
    method: 'POST',
    url: `/updatestudentdetails`,
    data: payload
  })
}

export function updateDriveDetails(payload) {
  return API({
    method: 'POST',
    url: `/updatedrivedetails`,
    data: payload
  })
}
  
