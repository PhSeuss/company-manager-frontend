class storageRecordApi {  
  static getAllRecords() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
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
