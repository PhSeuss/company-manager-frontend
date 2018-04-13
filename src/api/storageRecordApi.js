class storageRecordApi {  
  static getAllRecords() {
    return fetch('http://localhost:4000/api/v1/storagees')
    .then(response => response.json())
    .catch(error => error)
  }
  static getSelectedRecord(recordId) {
    return fetch(`http://localhost:4000/api/v1/storagees/${recordId}`)
    .then(response => response.json())
    .catch(error => error)
  }
  static deleteRecord(record) {
    const request = new Request(`https://jsonplaceholder.typicode.com/posts/${record.id}`, {
      method: 'DELETE'
    });
    return fetch(request)
    .then(response => response.json())
    .catch(error => error)
  }
  
}

export default storageRecordApi
